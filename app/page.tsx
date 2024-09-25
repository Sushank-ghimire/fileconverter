"use client";

import FileConvert from "@/components/FileConvert";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const HomePage = () => {

  return (
    <main className="min-h-screen overflow-x-hidden w-screen dark:bg-[#000000] text-xl md:text-2xl p-4 dark:text-slate-100">
      <Navbar />
      {
        <>
          <section className="mt-4 w-[90vw] md:w-[80vw] mx-auto">
            <h1 className="text-center text-2xl md:text-5xl md:font-bold tracking-wider font-bold pt-10 pb-3">
              Free Unlimited File Converter
            </h1>
            <p className="mt-4 text-lg text-center dark:text-slate-400">
              Introducing File Flow, your go-to online tool for unlimited and
              free multimedia conversion, all processed{" "}
              <span className="text-blue-700">
                locally on your device for enhanced privacy and security.
              </span>{" "}
              Easily convert images, audio, and videos without any restrictions.
              Start converting now and streamline your content effortlessly with
              File Flow!
            </p>
          </section>

          <div className="mt-4 w-[90vw] md:w-[80vw] mx-auto p-4 pb-10">
            <FileConvert />
          </div>
        </>
      }

      <Footer />
    </main>
  );
};

export default HomePage;
