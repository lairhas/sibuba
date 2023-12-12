import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <body className={`${inter.className} relative text-[#f2f2f2] min-h-screen`}>
        <Header />
        <main className="flex flex-col xl:container mx-auto w-full max-w-md transition-all duration-300 ease-in-out bg-[#f2f2f2]">
          {children}
        </main>
        <Footer />
      </body>
    </html >
  )
}
