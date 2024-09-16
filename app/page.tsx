"use client";

import FileConvert from "@/components/FileConvert";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const HomePage = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  useEffect(() => {
    console.log(theme);
  }, [theme])

  return (
      <main className="min-h-screen overflow-x-hidden w-screen dark:bg-[#000000] text-xl md:text-2xl p-4 dark:text-slate-100">
        <nav className="px-3 flex justify-between items-center">
          <div className="text-3xl p-3 flex gap-1 cursor-pointer tracking-tight">
            <span className="font-bold">File Flow</span>
          </div>

          <button
            onClick={handleTheme}
            className="btn btn-ghost p-3 text-xl md:mr-8 mr-4"
          >
            {theme == "light" ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>
        </nav>

        <section className="mt-4 w-[90vw] md:w-[80vw] mx-auto">
          <h1 className="text-center text-2xl md:text-5xl md:font-bold tracking-wider font-bold pt-10 pb-3">
            Free Unlimited File Converter
          </h1>
          <p className="mt-4 text-lg text-center dark:text-slate-400">
            Introducing File Flow your go-to online tool for unlimited and free
            multimedia conversion, all processed{" "}
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
        <Footer />
      </main>
  );
};

export default HomePage;
