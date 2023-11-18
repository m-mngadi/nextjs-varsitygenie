"use client";

import { SessionProvider } from "next-auth/react"
import clsx from "clsx";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { useNavbarStore } from "@/hooks/navbar-expand";
import { useOrientation } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AppContext({
  children,
  font,
}: {
  children: React.ReactNode,
  font: string,
}) {
  const orientation = useOrientation();
  const { isExpanded, setExpanded } = useNavbarStore();
  const pathname = usePathname();

  useEffect(()=> {
    if (orientation.angle === 90 || orientation.angle === 180) {
      setExpanded(false);
    }
  }, [orientation]);

  useEffect(() => {
    setExpanded(false);
  }, [pathname])

  return (
    <SessionProvider>
      <body className={clsx(font + " max-w-7xl mx-auto bg-[#1E1E1E] overscroll-x-none h-screen",{
        "overflow-y-hidden" : isExpanded === true,
      })}>
        <Navbar />
        <main className='min-h-screen absolute z-0 top-[68px]'>
          {children}
        </main>
        <Footer />
      </body>
    </SessionProvider>
  )
}