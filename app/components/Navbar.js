"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const showNavbar = ["/", "/generate", "/myPage"].includes(pathname);

  const generatePage = () => {
    setOpen(false);
    router.push("/generate");
  };

  if (!showNavbar) return null;

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[80vw] bg-white rounded-full px-6 py-3 flex items-center justify-between shadow-xl z-50">

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)}>
          <div className="flex items-center text-2xl font-bold cursor-pointer">
            <img src="/images/logo.png" className="w-10" alt="Logo" />
            <span>Link</span>
            <span className="text-[#60A5FA]">Verse</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <Link href="/">
            <li className="hover:text-blue-600 transition cursor-pointer">
              Home
            </li>
          </Link>

          <Link href="/#features">
            <li className="hover:text-blue-600 transition cursor-pointer">
              Features
            </li>
          </Link>

          <Link href="/generate">
            <li className="hover:text-blue-600 transition cursor-pointer">
              Create
            </li>
          </Link>

          <Link href="/myPage">
            <li className="hover:text-blue-600 transition cursor-pointer">
              My LinkVerse
            </li>
          </Link>

        </ul>

        {/* Desktop Button */}
        <button
          onClick={generatePage}
          className="hidden md:block bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition cursor-pointer"
        >
          Create LinkVerse
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-3xl shadow-2xl p-6 z-40 md:hidden">

          <ul className="flex flex-col gap-6 text-lg font-medium">

            <Link href="/" onClick={() => setOpen(false)}>
              <li>Home</li>
            </Link>

            <Link href="/#features" onClick={() => setOpen(false)}>
              <li>Features</li>
            </Link>

            <Link href="/generate" onClick={() => setOpen(false)}>
              <li>Create</li>
            </Link>

            <Link href="/myPage" onClick={() => setOpen(false)}>
              <li>My LinkVerse</li>
            </Link>

          </ul>

          <button
            onClick={generatePage}
            className="w-full mt-8 bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
          >
            Create LinkVerse
          </button>

        </div>
      )}
    </>
  );
};

export default Navbar;