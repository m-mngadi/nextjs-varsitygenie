import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppContext from '@/components/AppContext'
import './globals.css'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VaristyGenie',
  description: 'VaristyGenie work in progress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " max-w-7xl mx-auto bg-[#1E1E1E] overscroll-x-none"}>
        <AppContext>
          <Navbar />
          {children}
          <Footer />
        </AppContext>
      </body>

    </html>
  )
}
