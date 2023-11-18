"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { FaChevronLeft } from "react-icons/fa";
import { HiOutlineSave } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";

export default function ComposePage() {
    const session = useSession();
    const { status } = session;
    return (
        <section className="w-screen min-h-screen bg-white max-w-7xl mx-auto">
            <div className="bg-[#E84100] h-fit">
                <div className="flex sm:hidden text-lg text-white h-fit px-3 py-2 hover:cursor-default space-x-3"><Link href="/news"><span className="font-bold hover:underline hover:cursor-pointer">news</span></Link><span>-</span><span className="font-bold hover:cursor-default">compose</span></div>
                <div className="flex justify-between items-center bg-[#E84100] min-h-[60px]">
                    <div className="flex justify-start items-center px-3 my-2">
                        <Link href="/news" className="text-white">
                            <FaChevronLeft size={24} />
                        </Link>
                    </div>
                    <div className="hidden sm:flex text-lg text-white h-fit px-3 my-2 hover:cursor-default space-x-3"><Link href="/news"><span className="font-bold hover:underline hover:cursor-pointer">news</span></Link><span>-</span><span className="font-bold hover:cursor-default">compose</span></div>
                    {status === "authenticated" && (
                        <div className="flex justify-end px-4 my-3 space-x-2 w-full">
                            <Link className="text-white text-center hover:bg-gray-200/25 hover:cursor-pointer px-4 py-2 border-1 w-fit max-w-[180px] font-medium" href="#">
                                <div className="flex items-center md:space-x-2">
                                    <span className="hidden md:block">Save draft</span>
                                    <HiOutlineSave size={24} />
                                </div>
                            </Link>
                            <Link className="text-[#E84100] bg-white/100 hover:bg-gray-200 hover:cursor-pointer text-center px-4 py-2 border-1 w-fit max-w-[180px] font-bold" href="#">
                                <div className="flex items-center md:space-x-2">
                                    <span className="hidden md:block">Publish</span>
                                    <IoIosSend size={24} />
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-white">
                <div className="flex flex-col px-4 bg-white min-h-screen py-4 space-y-4">
                    <label htmlFor="composeBanner">Banner</label>
                    <input type="file" className="px-4 py-2 rounded-md bg-white border-2 border-slate-300 outline-2 outline-blue-500/50" name="banner" id="composeBanner" />
                    <label htmlFor="composeTitle">Title</label>
                    <input type="text" className="px-4 py-2 rounded-md bg-white border-2 border-slate-300 outline-2 outline-blue-500/50" name="title" id="composeTitle" placeholder="Title" />
                    <label htmlFor="composeOverview">Overview</label>
                    <textarea className="px-4 py-2 rounded-md bg-white border-2 border-slate-300 outline-2 outline-blue-500/50" name="overview" id="composeOverview" cols={1} rows={5} placeholder="Overview"></textarea>
                    <label htmlFor="composeContent">Content</label>
                    <textarea className="px-4 py-2 rounded-md bg-white border-2 border-slate-300 outline-2 outline-blue-500/50" name="content" id="composeContent" cols={1} rows={25} placeholder="Content"></textarea>
                </div>
            </div>
        </section>
    )
}
