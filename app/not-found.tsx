"use client";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen dark:bg-[#020817] flex justify-center items-center flex-col space-y-4 text-3xl dark:text-slate-100">
      <span className="dark:text-slate-300">404 | not found </span>
      <button onClick={() => router.push("/")} className="btn btn-ghost">
        Go back to home page <FaArrowRight />
      </button>
    </div>
  );
};

export default NotFound;
