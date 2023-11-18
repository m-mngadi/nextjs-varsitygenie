"use client";

import NewsBulletin from "@/components/NewsBulletin"
import type { NewsBulletinType } from "@/components/NewsBulletin"
import { useSession } from "next-auth/react"
import Link from "next/link";

const news = [
    {
        id: "01_news",
        title: "VarsityGenie Values Impact Story: Siphesihle Sephaka",
        overview: "1. Please tell us about yourself I am Siphesihle Sephaka doing my third year in ICT (Applications Development) at the Durban University...",
        date: "11 October 2023",
    },
    {
        id: "02_news",
        title: "VarsityGenie Values Impact Story: Siphesihle Sephaka",
        overview: "1. Please tell us about yourself I am Siphesihle Sephaka doing my third year in ICT (Applications Development) at the Durban University, 1. Please tell us about yourself I am Siphesihle Sephaka doing my third year in ICT (Applications Development) at the Durban University",
        date: "11 October 2023",
    },
    {
        id: "03_news",
        title: "VarsityGenie Values Impact Story: Siphesihle Sephaka",
        overview: "1. Please tell us about yourself I am Siphesihle Sephaka doing my third year in ICT (Applications Development) at the Durban University...",
        date: "11 October 2023",
    }
]

export default function NewsPage() {
    const session = useSession();
    const { status } = session;

    return (
        <section className="w-screen min-h-screen bg-[#E84100] max-w-7xl mx-auto">
            <div className="flex flex-col justify-center bg-[#E84100] min-h-[150px] px-4">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold text-[#1E1E1E]">News</h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-base font-semibold text-white">Keep up with our latest stories</p>
                </div>
            </div>
            <div className="bg-white">
                <div className="flex flex-col justify-center bg-white min-h-[60px]">
                    {status === "authenticated" && (
                        <div className="flex md:justify-end px-4 my-3 space-x-2">
                            <Link className="text-black text-center px-4 p-2 border-1 w-full md:max-w-[125px]" href="/news/compose">
                                Compose
                            </Link>
                            <Link className="text-black text-center px-4 p-2 border-1 w-full md:max-w-[125px]" href="/news/drafts">
                                My drafts
                            </Link>
                        </div>
                    )}
                    <div className="flex justify-end mx-4">
                        <input className="form-control w-full md:max-w-[258px] rounded-none" type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="grid grid-cols-1 grid-flow-row auto-rows-max md:grid-cols-2 gap-4 px-4 bg-white min-h-screen py-4">
                    {/* News bulletins here */}
                    {
                        news.map((bulletin: NewsBulletinType) => (
                            <NewsBulletin key={bulletin.id} title={bulletin.title} overview={bulletin.overview} date={bulletin.date} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
