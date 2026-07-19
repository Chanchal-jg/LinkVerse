"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const pathname = usePathname();
  const showFooter = ["/", "/generate", "/myPage"].includes(pathname);

  if (!showFooter) return null;

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" className="w-10" alt="Logo" />
              <h2 className="text-3xl font-bold">
                Link<span className="text-[#60A5FA]">Verse</span>
              </h2>
            </div>

            <p className="text-slate-400 mt-5 leading-7">
              Build your personalized link-in-bio page and share everything
              with one simple URL.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-5">Product</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/#features" className="hover:text-white transition">
                  Features
                </Link>
              </li>

              <li>
                <Link href="/generate" className="hover:text-white transition">
                  Create
                </Link>
              </li>

              <li>
                <Link href="/myPage" className="hover:text-white transition">
                  My LinkVerse
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Resources</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
</div>

          <div>
            <h3 className="font-bold text-lg mb-5">Connect</h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Chanchal-jg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.instagram.com/_joy_ghosh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-pink-600 transition flex items-center justify-center"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/chanchal-ghosh-b95675377"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-sky-500 transition flex items-center justify-center"
              >
                <FaLinkedin size={22} />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} LinkVerse. All rights reserved.
          </p>

          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>

            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;