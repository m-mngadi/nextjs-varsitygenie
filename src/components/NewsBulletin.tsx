export interface NewsBulletinType {
    title : string,
    overview : string,
    date : string
}

export default function NewsBulletin({title, overview, date} : NewsBulletinType) {
    return (
        <div className="bg-white shadow-xl max-h-[250px] hover:cursor-pointer">
            <div className="flex flex-col p-4 h-full">
                <div className="flex basis-1/4 font-bold text-2xl  text-[#1E1E1E]">{title}</div>
                <div className="flex basis-1/2 font-lighter text-[#1E1E1E]">{overview}</div>
                <div className="flex basis-1/4 font-medium text-[#E84100]">{date}</div>
            </div>
        </div>
    )
}
