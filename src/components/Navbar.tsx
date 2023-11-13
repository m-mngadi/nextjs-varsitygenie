"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx"

import { MdOutlineLogin, MdMenu } from "react-icons/md";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "News",
        href: "/news",
    },
    {
        name: "Gurus",
        href: "/gurus",
    },
    {
        name: "Communities",
        href: "/communities",
    }
]

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-row justify-between md:justify-normal w-full px-2 md:px-6 bg-white">
            <Image src="/images/logo.png" width={68} height={68} alt="Varsity Genie logo" />
            <div className="flex items-center hover:cursor-pointer px-4 md:hidden text-[#E84100]">
                <MdMenu size={32} />
            </div>
            <div className=" hidden md:flex md:justify-between w-full">
                <ul className="flex justify-start flex-row w-auto gap-4 items-center">
                    {
                        menuItems.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <li key={"li_" + item.name} className={clsx("text-xl hover:text-orange-600 hover:font-bold hover:cursor-pointer px-4 ", {
                                    "text-orange-600 underline font-bold": pathname === item.href,
                                    "text-gray-950": pathname !== item.href,
                                })}>{item.name}</li>
                            </Link>
                        ))
                    }
                </ul>
                <div className="flex items-center hover:cursor-pointer px-4">
                    <MdOutlineLogin size={24} />
                    <span className="text-xl text-gray-950">Login</span>
                </div>
            </div>

        </nav>
    )
}
