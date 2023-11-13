import GuruTile, { GuruType } from "@/components/GuruTile";

const gurus = [
    {
        id : "01",
        name: "Mziwenhlanhla Mngadi",
        headline: "VarsityGenie Guru",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam iste provident? Aliquid excepturi earum exercitationem cum, deserunt, reprehenderit cumque numquam magnam autem voluptatum, ipsa cupiditate. Eveniet commodi natus repudiandae!",
        img_url: "path/to/img",
    },
    {
        id : "02",
        name: "Mziwenhlanhla Mngadi",
        headline: "VarsityGenie Guru",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam iste provident? Aliquid excepturi earum exercitationem cum, deserunt, reprehenderit cumque numquam magnam autem voluptatum, ipsa cupiditate. Eveniet commodi natus repudiandae!",
        img_url: "path/to/img",
    },
    {
        id : "03",
        name: "Mziwenhlanhla Mngadi",
        headline: "VarsityGenie Guru",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam iste provident? Aliquid excepturi earum exercitationem cum, deserunt, reprehenderit cumque numquam magnam autem voluptatum, ipsa cupiditate. Eveniet commodi natus repudiandae!",
        img_url: "path/to/img",
    },
    {
        id : "04",
        name: "Mziwenhlanhla Mngadi",
        headline: "VarsityGenie Guru",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam iste provident? Aliquid excepturi earum exercitationem cum, deserunt, reprehenderit cumque numquam magnam autem voluptatum, ipsa cupiditate. Eveniet commodi natus repudiandae!",
        img_url: "path/to/img",
    },
    {
        id : "05",
        name: "Mziwenhlanhla Mngadi",
        headline: "VarsityGenie Guru",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam iste provident? Aliquid excepturi earum exercitationem cum, deserunt, reprehenderit cumque numquam magnam autem voluptatum, ipsa cupiditate. Eveniet commodi natus repudiandae!",
        img_url: "path/to/img",
    },
    {
        id : "06",
        name: "Mziwenhlanhla Mngadi",
        headline: "VarsityGenie Guru",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam iste provident? Aliquid excepturi earum exercitationem cum, deserunt, reprehenderit cumque numquam magnam autem voluptatum, ipsa cupiditate. Eveniet commodi natus repudiandae!",
        img_url: "path/to/img",
    }
]

export default function GurusPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="w-screen min-h-screen bg-[#E84100] max-w-7xl mx-auto">
                <div className="grid grid-flow-row auto-rows-max my-6">
                    <div className="flex flex-col px-6 md:px-16 gap-2">
                        <h1 className="text-center text-3xl font-bold text-[#1E1E1E]">The tale of the <span className="text-white font-semibold underline">VasityGenie Gurus</span></h1>
                        <p className="text-white font-medium text-justify">"“The path to becoming a VG Guru is no ordinary journey; it is a grand adventure steeped in commitment and expertise! To claim the illustrious title, brave individuals must embark on a quest, proving their mettle in the vast realms of industry.</p>

                        <p className="text-white font-medium text-justify">To unlock the secrets of the VG Guru, one must first collect the sacred certifications bestowed by mighty tech giants like Azure, AWS, Google Cloud Platform, and Salesforce. These aren't just any certifications, oh no! They are treasures acquired through daring feats — rigorous examinations held under the watchful eye of Pearson VUE, a revered global leader in computer-based testing.</p>

                        <p className="text-white font-medium text-justify">So, with courage in their hearts and a gleam in their eyes, our intrepid seekers face the challenges, navigating the stringent conditions set by Pearson VUE. It's a journey of trials and triumphs, a tale woven with the threads of determination and tested under the wise gaze of the certification gods.</p>

                        <p className="text-white font-medium text-justify">And thus, the saga unfolds on the path to VG Guruhood, where every challenge met brings our heroes closer to the coveted title. May the spirits of technology guide them, and may their certifications shine like the stars in the vast digital sky!”"</p>

                        <div className="flex justify-center w-fit p-3 bg-white mx-auto my-3">
                            <p className="text-xl font-bold text-[#1E1E1E] text-center">say "hello" to the <span className="text-[#E84100] font-bold">VaristyGenie</span> team</p>
                        </div>
                    </div>

                    <div className="bg-[#E84100] min-h-screen">
                        <div className="grid grid-cols-1s md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 my-3">
                            {
                                gurus.map((guru: GuruType) => (
                                    <GuruTile key={guru.id} name={guru.name} headline={guru.headline} bio={guru.bio} img_url={guru.img_url} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
