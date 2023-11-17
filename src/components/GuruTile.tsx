import Image from "next/image"

export interface GuruType {
    id? : string,
    name: string,
    headline: string,
    bio: string,
    img_url : string,
}

export default function GuruTile({ name, headline, bio, img_url }: GuruType) {
    return (
        <div className="bg-white shadow-xl min-h-[260px] w-[260px] hover:cursor-pointer rounded border-2 border-white mx-auto">
            <div className="flex flex-col justify-between content-center h-full">
                <div className="bg-white">
                    <div className="text-center">
                        <Image src={img_url} alt="" width={256} height={256} className="rounded-t-md"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-[#E84100] px-3 rounded-b">
                    <p className="text-white font-bold text-xl">Name</p>
                    <p className="text-white font-medium text-base">headline</p>
                </div>
            </div>
        </div>
    )
}
