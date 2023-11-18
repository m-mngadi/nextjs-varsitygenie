export interface CommunityType {
    title: string,
    description: string,
    img_url: string
}

export default function CommunityTile({ title, description, img_url }: CommunityType) {
    return (
        <div className="bg-white shadow-xl h-[185px] hover:cursor-pointer p-4 my-3">
            <div className="flex flex-row h-full">
                <div className="basis-1/3">01</div>
                <div className="basis-2/3">
                    <div className="flex md:flex-col h-full items-center md:justify-around">
                        <h1 className="flex font-bold lg:text-2xl md:text-lg text-md text-[#1E1E1E]">{title}</h1>
                        <p className="hidden md:block font-lighter text-[#1E1E1E] line-clamp-4 ">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
