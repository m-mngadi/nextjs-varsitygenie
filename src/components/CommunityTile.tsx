import Image, { StaticImageData } from "next/image"

export interface CommunityType {
    title: string,
    description: string,
    img: StaticImageData,
    href: string,
}

export default function CommunityTile({ title, description, href, img }: CommunityType) {
    return (
        <a href={href}>
            <div className="bg-white shadow-xl h-[185px] hover:cursor-pointer p-4 my-3">
                <div className="flex flex-row h-full items-center">
                    <div className="flex basis-1/3 relative justify-center">
                        <Image src={img} alt={`${title} logo`} width={64} height={64} />
                    </div>
                    <div className="basis-2/3">
                        <div className="flex md:flex-col h-full items-center md:justify-around">
                            <h1 className="flex font-bold lg:text-2xl md:text-lg text-md text-[#1E1E1E]">{title}</h1>
                            <p className="hidden md:block font-lighter text-[#1E1E1E] line-clamp-4 ">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}
