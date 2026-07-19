"use client"
import { LucideFlashlight, LucideLink, LucidePalette } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  const [text, settext] = useState("")
  const [currentImg, setcurrentImg] = useState(0)

  const images = [
    "/images/img1.webp",
    "/images/img2.webp",
    "/images/img3.webp",
    "/images/img4.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }


  return (
    <main>
      <section className="bg-[#d2e823] min-h-[100vh] grid grid-cols-1 md:grid-cols-2">
        <div className="text-[#254f1a] p-10 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col gap-6">
            <h1 className="text-8xl font-bold">A link in bio built for you.</h1>
            <p className="font-medium">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Facebook, Twitter, YouTube and other social media profiles.</p>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-5">
            <input value={text} onChange={(e) => { settext(e.target.value) }} className="bg-white px-15 py-5 rounded-lg focus:outline-yellow-200" type="text" placeholder="Enter your handle" />
            <button onClick={() => { createTree() }} className="bg-[#254f1a] text-white px-15 py-4 rounded-xl cursor-pointer">Claim your LinkVerse</button>
          </div>
        </div>
        <div className="relative w-full h-[80%] overflow-hidden rounded-3xl md:mt-20">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={images[currentImg]}
              alt=""
              className="absloute inset-0 w-full h-full object-cover px-5"

              initial={{
                y: "100%",
                opacity: 1,
              }}

              animate={{
                y: "0%",
                opacity: 1,
              }}

              exit={{
                y: "-100%",
                opacity: 1,
              }}

              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
            />
          </AnimatePresence>
        </div>
      </section>
      <section id="features" className="bg-[#2665d6] py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mt-5">
              One link. Endless possibilities.
            </h2>

            <p className="text-blue-100 mt-6 max-w-2xl mx-auto text-lg">
              Everything you need to build a beautiful personal landing page and
              share it anywhere.
            </p>
          </div>

          <div className="space-y-10">


            <div className="bg-white rounded-[35px] p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">

              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <LucideLink className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-4xl font-bold mt-8 text-gray-900">
                  Unlimited Links
                </h3>

                <p className="text-gray-500 mt-5 text-lg leading-8">
                  Add Instagram, YouTube, GitHub, LinkedIn, portfolio,
                  WhatsApp, and every important link in one place.
                </p>
              </div>

              <div className="">
                <img
                  src="/images/feature1.png"
                  className="rounded-2xl shadow-xl w-52"
                  alt=""
                />
              </div>

            </div>

            <div className="bg-[#1E3A8A] rounded-[35px] p-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 shadow-2xl">

              <div className="">
                <img
                  src="/images/feature2.png"
                  className="rounded-2xl shadow-xl w-52"
                  alt=""
                />
              </div>

              <div className="flex-1">

                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <LucidePalette className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-4xl font-bold mt-8 text-white">
                  Beautiful Profiles
                </h3>

                <p className="text-blue-200 mt-5 text-lg leading-8">
                  Personalize your LinkVerse with your profile picture,
                  bio and a clean modern layout.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[35px] p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">

              <div className="flex-1">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <LucideFlashlight className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-4xl font-bold mt-8 text-gray-900">
                  Share Instantly
                </h3>

                <p className="text-gray-500 mt-5 text-lg leading-8">
                  Share one LinkVerse URL across Instagram, X, YouTube,
                  Facebook and every social platform.
                </p>

              </div>

              <div className="">
                <img
                  src="/images/feature3.png"
                  className="rounded-2xl shadow-xl w-52"
                  alt=""
                />
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
