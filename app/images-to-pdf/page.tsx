"use client";
import Navbar from "@/components/Navbar";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BiCloudUpload, BiError } from "react-icons/bi";
import { jsPDF } from "jspdf";
import { Badge } from "@/components/ui/badge";
import { MdDone } from "react-icons/md";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

const Page = () => {
  const [pdf, setPdf] = useState<jsPDF | null>(null);
  const [isConverted, setIsConverted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convertOtherFiles = () => {
    setIsConverted(false);
    setPdf(null);
    setError(null);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = async () => {
      try {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const pdfInstance = new jsPDF();
          pdfInstance.addImage(img, "JPEG", 10, 10, 190, 200);
          setPdf(pdfInstance);
          setIsConverted(true);
          setError(null);
        };
      } catch (error) {
        console.error("Error converting image to PDF:", error);
        setError("Error converting image to PDF");
      }
    };

    reader.readAsDataURL(file);
  }, []);

  const downloadPDF = () => {
    if (pdf) {
      pdf.save("converted-image.pdf"); // Trigger the download
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
  });

  return (
    <div className="min-h-screen overflow-x-hidden w-screen dark:bg-[#000000] text-xl md:text-2xl p-4 dark:text-slate-100">
      <Navbar />
      <section className="w-[90vw] mx-auto md:w-[80vw] py-8 px-12 text-xl text-center md:text-3xl">
        <h1>Convert your images (.jpg, .png) to PDF</h1>
        {!isConverted && (
          <div
            {...getRootProps()}
            className="md:w-1/2 w-[95%] rounded-lg min-h-[250px] mx-auto mt-8 flex justify-center items-center space-y-4 border-dotted bg-slate-300 border-black md:py-8 md:px-12 flex-col dark:bg-slate-950 text-sm cursor-pointer"
          >
            <BiCloudUpload size={60} />
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
        )}
        {isConverted && (
          <>
            <div className="w-[80vw] mx-auto p-8 rounded flex justify-between">
              {error ? (
                <Badge variant="destructive" className="flex gap-2">
                  <span>{error}</span>
                  <BiError />
                </Badge>
              ) : (
                <Badge variant="default" className="flex gap-2 bg-green-500">
                  <span>Done</span>
                  <MdDone />
                </Badge>
              )}
              <button
                onClick={downloadPDF}
                className="w-fit btn btn-ghost dark:btn-outline dark:text-white"
              >
                Download PDF <DownloadIcon />
              </button>
            </div>
            <button onClick={convertOtherFiles} className="btn btn-outline">
              Convert other files
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default Page;
