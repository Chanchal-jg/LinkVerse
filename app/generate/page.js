"use client"
import { React, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";

const Generate = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get("handle"))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const addLink = () => {
        setLinks(links.concat({ link: "", linktext: "" }))
    }

    const handlechange = (index, link, linktext) => {
        setLinks((initiallinks) => {
            return initiallinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                } else {
                    return item
                }
            }
            )
        }
        )
    }


    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
            setTimeout(() => {
                router.replace(`/${handle}`);
            }, 1500);
            setLinks([{ link: "", linktext: "" }])
            setpic("")
            setdesc("")
        } else {
            toast.error(result.message)
        }
    }
    return (

        <div className='min-h-screen md:grid md:grid-cols-2 bg-[#235abf] text-white'>

           <div className="col1 flex flex-col justify-center items-center py-36 md:py-32 md:gap-5 gap-10">
                <h1 className='text-4xl font-bold'>Create your Linkverse</h1>

                <div className="w-[85vw] md:w-full max-w-xl space-y-6 p-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl ">
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold'>Step 1: Claim your handle</h2>
                        <input className='bg-white/20 px-3 py-2 rounded-3xl focus:outline-[#235abf]' type="text" value={handle || ""} onChange={e => sethandle(e.target.value)} name="" id="" placeholder='Choose a handle' />
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold'>Step 2: Add link</h2>
                        {links && links.map((item, index) => {
                            return <div className='flex gap-3' key={index}>
                                <input className='bg-white/20 px-3 py-2  rounded-3xl focus:outline-[#235abf] w-1/2' type="text" name="" id="" value={item.linktext || ""} onChange={e => handlechange(index, item.link, e.target.value,)} placeholder='Enter Link Title' />
                                <input className='bg-white/20 px-3 py-2 rounded-3xl focus:outline-[#235abf] w-1/2' type="text" name="" id="" value={item.link || ""} onChange={e => handlechange(index, e.target.value, item.linktext)} placeholder="https://..." />
                            </div>
                        }
                        )}

                        <button onClick={() => { addLink() }} className='bg-slate-900 text-white px-5 py-2 rounded-2xl font-bold w-5/6 md:w-3/6 cursor-pointer'>+ Add Another Link</button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold'>Step 3: Add picture and description</h2>
                        <input className='bg-white/20 px-3 py-2 rounded-3xl focus:outline-[#235abf]' type="text" name="" id="" value={pic || ""} onChange={e => setpic(e.target.value)} placeholder='Enter link for picture' />
                        <textarea
                            rows={2}
                            value={desc}
                            onChange={(e) => setdesc(e.target.value)}
                            placeholder="Tell people about yourself..."
                            className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 resize-none placeholder:text-white/60 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />

                    </div>
                    <button onClick={() => { submitLinks() }}
                        disabled={!pic || !handle || !desc || !links[0]?.link || !links[0].linktext}
                        className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-600 py-4 rounded-xl font-bold transition cursor-pointer"
                    >Create your LinkVerse</button>
                </div>
            </div>
            <div className='col2 hidden md:grid'>
                <img className='object-contain' src="/images/loginpage.jpg" alt="" />
            </div>
            <ToastContainer />
        </div>
    )
}

export default Generate