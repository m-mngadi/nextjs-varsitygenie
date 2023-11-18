"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx"

import { MdOutlineLogin, MdMenu, MdClose, MdOutlineLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

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
    const [navExpanded, setNavExpanded] = useState(false);

    const session = useSession();
    const { status } = session;

    useEffect(() => {
        setNavExpanded(false);
    }, [pathname]);

    return (
        <nav className={clsx("flex flex-col md:flex-row justify-between md:justify-normal w-full px-2 md:px-6 bg-white", {
            "group is-expanded": navExpanded,
            "": !navExpanded,
        })}>
            <div className="flex justify-between">
                <Link href="/">
                    <Image src="/images/logo.png" width={68} height={68} alt="Varsity Genie logo" priority={true} />
                </Link>
                <div className="flex items-center hover:cursor-pointer px-4 md:hidden text-[#E84100]"
                    onClick={() => setNavExpanded(!navExpanded)}>
                    {navExpanded ? <MdClose size={32} /> : <MdMenu size={32} />}
                </div>
            </div>
            <div className="hidden group-[.is-expanded]:flex md:flex flex-col md:flex-row justify-between grow">
                <ul className="flex flex-col md:flex-row items-center">
                    {
                        menuItems.map((item) => (
                            <Link href={item.href} key={"li_" + item.name} className={clsx("text-xl text-center hover:text-orange-600 hover:font-bold hover:cursor-pointer px-4 w-full ", {
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
                    <div className="flex justify-center">
                        <Link className="flex flex-end items-center hover:cursor-pointer px-4" href="/login">
                            <MdOutlineLogin size={24} />
                            <span className="text-xl text-gray-950">Login</span>
                        </Link>
                    </div>
                ) : null } 
                {(status === 'authenticated') && (
                    <div className="flex justify-center">
                        <button className="flex flex-end items-center hover:cursor-pointer px-4" onClick={() => signOut({ callbackUrl: "/" })}>
                            <MdOutlineLogout size={24} />
                            <span className="text-xl text-gray-950">Logout</span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}
