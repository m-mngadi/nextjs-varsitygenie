export interface CommunityType {
    title: string,
    description: string,
    img_url: string
}

export default function CommunityTile({ title, description, img_url }: CommunityType) {
    return (
        <div className="bg-white shadow-xl h-[250px] hover:cursor-pointer px-4 my-3">
            <div className="flex flex-row h-[230px]">
                <div className="basis-1/3">01</div>
                <div className="basis-2/3">
                    <div className="flex flex-col h-full">
                        <h1 className="flex font-bold text-2xl text-[#1E1E1E]">{title}</h1>
                        <p className="block font-lighter text-[#1E1E1E] text-ellipsis overflow-hidden">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
