export interface NewsBulletinType {
    title: string,
    overview: string,
    date: string
}

export default function NewsBulletin({ title, overview, date }: NewsBulletinType) {
    return (
        <div className="bg-white shadow-xl h-[250px] hover:cursor-pointer">
            <div className="flex flex-col p-4 h-full">
                <h1 className="flex basis-1/4 font-bold text-2xl text-[#1E1E1E]">{title}</h1>
                <p className="flex basis-1/2 font-lighter text-[#1E1E1E] max-h-[185px] text-ellipsis overflow-hidden">{overview}</p>
                <p className="flex basis-1/4 font-medium text-[#E84100]">{date}</p>
            </div>
        </div>
    )
}
