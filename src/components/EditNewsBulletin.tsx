import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export interface EditNewsBulletinType {
    id?: string,
    title: string,
    overview: string,
    date: string,
}

export default function EditNewsBulletin({ title, overview, date }: EditNewsBulletinType) {
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-xl h-[250px]">
            <div className="flex flex-col basis-3/4 md:p-4 px-4 pt-4 h-full">
                <div className="flex basis-1/4 ">
                    <h1 className="font-bold lg:text-2xl md:text-lg text-md text-[#1E1E1E]">{title}</h1>
                </div>
                <div className="flex basis-1/2 max-h-[120px] text-ellipsis overflow-hidden">
                    <p className="text-[#1E1E1E] font-lighter inline-block">{overview}</p>
                </div>
                <div className="flex basis-1/4">
                    <p className="font-medium text-[#E84100]">{date}</p>
                </div>
            </div>
            <div className="flex basis-1/4">
                <div className="grid grid-cols-2 w-full divide-x-2 md:divide-x-0 divide-slate-200">
                    <div className="flex items-center justify-around hover:cursor-pointer group/edit">
                        <div className="group-hover/edit:bg-gray-200/50 rounded-full p-1 h-fit w-fit">
                            <MdModeEdit size={24} />
                        </div>
                    </div>
                    <div className="flex items-center justify-around hover:cursor-pointer group/delete">
                        <div className="group-hover/delete:bg-gray-200/50 rounded-full p-1 h-fit w-fit">
                            <MdDelete size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
