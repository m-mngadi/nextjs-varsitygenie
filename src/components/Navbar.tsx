"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx"

import { MdOutlineLogin, MdMenu, MdClose, MdOutlineLogout } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import { useNavbarStore } from "@/hooks/navbar-expand";

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
    let pathname = usePathname();
    if (pathname === "/news/drafts" || pathname === "/news/compose") {
        pathname = "/news";
    }

    const { isExpanded, setExpanded } = useNavbarStore();

    const session = useSession();
    const { status } = session;

    return (
        <nav className={clsx("flex flex-col md:flex-row justify-between md:justify-normal w-full px-2 md:px-6 bg-white z-10 relative top-0", {
            "group is-expanded h-full": isExpanded,
            "": !isExpanded,
        })}>
            <div className="flex justify-between">
                <Link href="/">
                    <Image src="/images/logo.png" width={68} height={68} alt="Varsity Genie logo" priority={true} />
                </Link>
                <div className="flex items-center hover:cursor-pointer px-4 md:hidden text-[#E84100]"
                    onClick={() => setExpanded(!isExpanded)}>
                    {isExpanded ? <MdClose size={32} /> : <MdMenu size={32} />}
                </div>
            </div>
            <div className="hidden group-[.is-expanded]:flex md:flex flex-col md:flex-row justify-start grow">
                <ul className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 divide-slate-700">
                    {
                        menuItems.map((item) => (
                            <Link href={item.href} key={"li_" + item.name} className={clsx("text-xl text-center hover:text-orange-600 hover:font-bold hover:cursor-pointer px-4 w-full py-4 md:py-0", {
                                "text-orange-600 underline font-bold": pathname === item.href,
                                "text-gray-950": pathname !== item.href,
                            })}>
                                <li>
                                    {item.name}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                {(status === 'unauthenticated' && pathname !== "/login") ? (
                    <div className="flex justify-center border-t-2 md:border-t-0 border-gray-500">
                        <Link className="flex flex-end items-center hover:cursor-pointer px-4 py-4 md:py-0" href="/login">
                            <MdOutlineLogin size={24} />
                            <span className="text-xl text-gray-950">Login</span>
                        </Link>
                    </div>
                ) : null } 
                {(status === 'authenticated') && (
                    <div className="flex justify-center border-t-2 md:border-t-0 border-gray-500">
                        <button className="flex flex-end items-center hover:cursor-pointer px-4 py-4 md:py-0sss" onClick={() => signOut({ callbackUrl: "/login" })}>
                            <MdOutlineLogout size={24} />
                            <span className="text-xl text-gray-950">Logout</span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}
