"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center bottom-0 mt-12 text-xs pb-8 w-full h-fit p-4">
      <div className="w-fit mx-auto md:flex-row flex flex-col">
        <Link href={"/images-to-pdf"} className="btn btn-link">
          Convert images to pdf
        </Link>
        <Link href={"/docx-to-pdf"} className="btn btn-link">
          Convert documents to pdf
        </Link>
      </div>
      <div>
        made with <span className="text-red-700">❤</span> by{" "}
        <a
          className="cursor-pointer text-blue-600"
          href="mailto: ghimiresushank64@gmail.com"
        >
          sushank_ghimire
        </a>
      </div>
    </footer>
  );
};

export default Footer;
