"use client"
import React from 'react'
import { useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
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
  }, 1500);

  return () => clearInterval(interval);
}, []);

  const viewPage = () => {
    router.push(`/${text}`);
  }

  return (
    <div value={text} onChange={(e) => { settext(e.target.value) }} className="min-h-screen bg-gradient-to-br from-[#235abf] to-[#1b3f87] flex items-center justify-center px-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 text-center">
        <img
          src="/images/logo.png"
          alt="LinkVerse"
          className="w-16 mx-auto mb-5"
        />

        <h1 className="text-4xl font-bold text-gray-900">
          View Your LinkVerse
        </h1>

        <p className="text-gray-500 mt-3 mb-8">
          Enter your unique handle to open your personalized page.
        </p>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter your handle"
            className="flex-1 rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-[#235abf] focus:ring-2 focus:ring-[#235abf]/20 transition"
          />

          <button onClick={() => { viewPage() }} className="bg-[#235abf] hover:bg-[#1d4fa7] text-white font-semibold px-6 rounded-xl transition duration-300 cursor-pointer">
            Open
          </button>
        </div>


      </div>
    </div>
  )
}

export default page