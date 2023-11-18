import CommunityTile, { CommunityType } from "@/components/CommunityTile";
import GDGImage from "../../../public/images/gdg.webp"
import PJImage from "../../../public/images/powerJunkies.webp"

const communities = [
    {
        title: "GDG Cloud Durban",
        description: "GDG Cloud Durban promote cloud technology awareness and knowledge sharing - we thrive on synaptic experiences to drive innovation.",
        img: GDGImage,
        href: "https://gdg.community.dev/gdg-cloud-durban/",
    },
    {
        title: "Power Platform Jukies",
        description: "A group of Power BI, Power Apps and Power Automate enthusiasts with shared goal of discussing, learning and enriching, enabling experiences.",
        img: PJImage,
        href : "https://www.youtube.com/@powerplatformjunkies525/videos",
    },
]

export default function GurusPage() {
    return (
        <section className="w-screen min-h-screen bg-[#E84100] max-w-7xl mx-auto">
            <div className="flex flex-col justify-center bg-[#E84100] min-h-[150px] px-4">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold text-[#1E1E1E] text-center">our communities</h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-base font-semibold text-white text-center">These are the platforms that our members use to learn , build work experience and leadership skills</p>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-flow-row auto-rows-max xl:grid-cols-2 gap-3 px-4 bg-white min-h-screen">
                {/* News bulletins here */}
                {
                    communities.map((community: CommunityType) => (
                        <CommunityTile key={community.title} title={community.title} description={community.description} img={community.img} href={community.href} />
                    ))
                }
            </div>
        </section>
    )
}