export interface NewsBulletinType {
    id?: string,
    title: string,
    overview: string,
    date: string
}

export default function NewsBulletin({ title, overview, date }: NewsBulletinType) {
    return (
        <div className="bg-white shadow-xl h-[250px] hover:cursor-pointer">
            <div className="flex flex-col p-4 h-full">
                <div className="flex basis-1/4 ">
                    <h1 className="font-bold lg:text-2xl md:text-lg text-md text-[#1E1E1E]">{title}</h1>
                </div>
                <div className="flex basis-1/2">
                    <p className="text-[#1E1E1E] font-lighter line-clamp-3">{overview}</p>
                </div>
                <div className="flex basis-1/4">
                    <p className="font-medium text-[#E84100]">{date}</p>
                </div>
            </div>
        </div>
    )
}