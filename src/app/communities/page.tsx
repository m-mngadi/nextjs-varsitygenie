import CommunityTile, { CommunityType } from "@/components/CommunityTile";

const communities = [
    {
        title : "GDG Cloud Durban",
        description : "GDG Cloud Durban promote cloud technology awareness and knowledge sharing - we thrive on synaptic experiences to drive innovation.",
        img_url : "01"
    },
    {
        title : "Power Platform Jukies",
        description : "A group of Power BI, Power Apps and Power Automate enthusiasts with shared goal of discussing, learning and enriching, enabling experiences.",
        img_url : "02"
    },
]

export default function GurusPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="w-screen min-h-screen bg-[#E84100] max-w-7xl mx-auto">
                <div className="grid grid-flow-row auto-rows-max my-6">
                    <div className="flex flex-col px-6 md:px-16 gap-2 min-h-[150px]">
                        <h1 className="text-center text-3xl font-bold text-[#1E1E1E]">our <span className="text-white font-semibold underline">communities</span></h1>
                        <p className="text-white font-medium text-center">These are the platforms that our members use to learn , build work experience and leadership skills</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 grid-flow-row auto-rows-max xl:grid-cols-2 gap-3 px-4 bg-white min-h-screen">
                    {/* News bulletins here */}
                    {
                        communities.map((community: CommunityType) => (
                            <CommunityTile key={community.title} title={community.title} description={community.description} img_url={community.img_url} />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}