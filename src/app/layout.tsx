import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppContext from '@/components/AppContext'
import './globals.css'

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
      <AppContext font={inter.className}>
        {children}
      </AppContext>
    </html>
  )
}
