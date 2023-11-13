import NewsBulletin from "@/components/NewsBulletin"
import type { NewsBulletinType } from "@/components/NewsBulletin"

const news = [
    {
        title: "VarsityGenie Values Impact Story: Siphesihle Sephaka",
        overview: "1. Please tell us about yourself I am Siphesihle Sephaka doing my third year in ICT (Applications Development) at the Durban University...",
        date: "11 October 2023",
    },
    {
        title: "VarsityGenie Values Impact Story: Siphesihle Sephaka",
        overview: "1. Please tell us about yourself I am Siphesihle Sephaka doing my third year in ICT (Applications Development) at the Durban University...",
        date: "11 October 2023",
    },
    {
        title: "VarsityGenie Values Impact Story: Siphesihle Sephaka",
        overview: "1. Please tell us about yourself I am Siphesihle Sephaka doing my third year in ICT (Applications Development) at the Durban University...",
        date: "11 October 2023",
    }
]

export default function NewsPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="w-screen min-h-screen bg-[#E84100] max-w-7xl mx-auto">
                <div className="flex flex-col justify-center bg-[#E84100] min-h-[150px]">
                    <div className="flex justify-center">
                        <h1 className="text-3xl font-bold text-[#1E1E1E]">News</h1>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-base font-semibold text-white">Keep up with our latest stories</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center bg-white min-h-[60px]">
                    <div className="flex justify-end mx-4">
                        <input className="form-control w-full md:max-w-[250px]" type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="grid grid-cols-1 grid-flow-row auto-rows-max md:grid-cols-2 md:gap-3 px-4 bg-white min-h-screen">
                    {/* News bulletins here */}
                    {
                        news.map((bulletin: NewsBulletinType) => (
                            <NewsBulletin key={bulletin.title} title={bulletin.title} overview={bulletin.overview} date={bulletin.date} />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}
