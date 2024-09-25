"use client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const handleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  useEffect(() => {
    setMounted(true); // Set mounted to true after hydration
  }, []);

  if (!mounted) return null;
  return (
    <nav className="px-3 flex justify-between items-center">
      <div className="text-3xl p-3 flex gap-1 cursor-pointer tracking-tight">
        <span onClick={() => router.push("/")} className="font-bold">
          File Flow
        </span>
      </div>

      {/* Render button only after mounting */}
      {mounted && (
        <button
          onClick={handleTheme}
          className="btn btn-ghost p-3 text-xl md:mr-8 mr-4"
        >
          {theme === "light" ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
