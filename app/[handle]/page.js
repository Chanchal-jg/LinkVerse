import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { handle } = await params;

    const client = await clientPromise;
    const db = client.db("linkverse");
    const collection = db.collection("links");

    const item = await collection.findOne({ handle });

    if (!item) return notFound();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#2563EB]">
            <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 bg-yellow-400/10 backdrop-blur-2xl border border-white/20 rounded-xl px-4 shadow-2xl">
                <img src="/images/logo.png" className="w-10" alt="" />
                <h1 className="text-2xl font-bold text-white">
                    Link<span className="text-blue-300">Verse</span>
                </h1>
            </Link>
            <div className="max-w-xl mx-auto px-6 py-32 md:py-20">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-10 shadow-2xl">
                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-white/30 shadow-xl">
                            <img src={item.pic} className="w-full h-full object-cover" alt=""/>
                        </div>

                        <h1 className="text-4xl font-bold text-white mt-6">
                            @{item.handle}
                        </h1>

                        <p className="text-blue-100 text-center mt-3 max-w-sm">
                            {item.desc}
                        </p>

                    </div>
                    <div className="mt-10 flex flex-col gap-4">

                        {item.links.map((link) => (
                            <Link
                                href={link.link}
                                target="_blank"
                                key={link.link}
                            >
                                <div 
                                className="bg-white hover:bg-blue-50 transition-all duration-300 rounded-2xl px-6 py-2 flex justify-between items-center shadow-lg hover:scale-105">

                                    <span className="font-semibold text-gray-800">
                                        {link.linktext}
                                    </span>

                                    <span className="text-2xl">→</span>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}