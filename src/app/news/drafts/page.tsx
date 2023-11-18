import EditNewsBulletin, { EditNewsBulletinType } from "@/components/EditNewsBulletin";
import Link from "next/link";

import { FaChevronLeft } from "react-icons/fa";

const drafts = [
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

export default function DraftPage() {

    return (
        <section className="w-screen min-h-screen bg-white max-w-7xl mx-auto">
            <div className="flex justify-between items-center bg-[#E84100] min-h-[60px]">
                <div className="flex justify-start items-center px-3 my-2">
                    <Link href="/news" className="text-white">
                        <FaChevronLeft size={24} />
                    </Link>
                    <div className="flex text-lg text-white h-fit px-3 my-2 hover:cursor-default space-x-3"><Link href="/news"><span className="font-bold hover:underline hover:cursor-pointer">news</span></Link><span>-</span><span className="font-bold hover:cursor-default">drafts</span></div>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-flow-row auto-rows-max md:grid-cols-2 gap-4 px-4 bg-white min-h-screen py-4">
                {
                    drafts.map((bulletin: EditNewsBulletinType) => (
                        <EditNewsBulletin key={bulletin.id} title={bulletin.title} overview={bulletin.overview} date={bulletin.date} />
                    ))
                }
            </div>
        </section>
    )
}
