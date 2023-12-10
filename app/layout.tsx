import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './ui/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sibuba',
  description: 'food, traveling, staycation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative text-[#f2f2f2]`}>
        <Header />
        <main className="flex flex-col xl:container mx-auto w-full max-w-md transition-all duration-300 ease-in-out bg-[#49148b]">
          {children}
        </main>
      </body>
    </html >
  )
}
