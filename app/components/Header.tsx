'use client'

import Link from "next/link"
import Image from "next/image"
import { TbMenu2 } from "react-icons/tb"
import { useEffect, useState } from "react"

const Header = () => {
    const [showBackground, setShowBackground] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let bodyTopPosition = document.body.getBoundingClientRect().top;
            setShowBackground(bodyTopPosition < -50);
        };

        document.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenuClick = () => {
        setShowDrawer(!showDrawer);
    };

    return (
        <>
            <header className={`fixed left-1/2 -translate-x-1/2 z-30 xl:container p-4 xl:px-10 max-w-md flex justify-between items-center mx-auto w-full transition-all duration-300 ease-in-out ${showBackground ? 'bg-[#f2f2f2] shadow' : 'bg-transparent'} text-[#212427] z-30`}>
                <Link href="/" className="duration-500 ease-in-out hover:text-[#000] px-2">
                    <span className="font-semibold">sibuba</span>
                </Link>

                <button className="xl:hidden px-2" onClick={handleMenuClick}><TbMenu2 size={20} /></button>
                <div className="max-xl:hidden flex gap-x-5 text-sm">
                    <Link href="/#about" className="flex w-20 duration-500 ease-in-out justify-center font-medium hover:font-semibold hover:text-[#000] rounded py-1 px-2">About</Link>
                    <Link href="/post" className="flex w-20 duration-500 ease-in-out justify-center font-medium hover:font-semibold hover:text-[#000] rounded py-1 px-2">Blog</Link>
                    <Link href="/#contact" className="flex w-20 duration-500 ease-in-out justify-center font-medium hover:font-semibold hover:text-[#000] rounded py-1 px-2">Contact</Link>
                    <Link href="https://saweria.co/sibuba" target="_blank" className="flex w-20 duration-500 ease-in-out justify-center font-medium hover:font-semibold hover:text-[#000] rounded py-1 px-2 bg-[#ffc007] hover:ring-2 ring-[#212427]">Donate</Link>
                </div>

            </header>
            {showDrawer && (
                <div className="flex flex-col pt-12 pb-3 gap-y-3 mx-auto w-full items-start max-w-md duration-300 ease-in-out bg-[#f2f2f2] text-[#212427] px-4 relative xl:hidden">
                    <Link href="/#about" className="ms-2 flex justify-start text-sm items-center font-medium">About</Link>
                    <Link href="/post" className="ms-2 flex justify-start text-sm items-center font-medium">Blog</Link>
                    <Link href="/#contact" className="ms-2 flex justify-start text-sm items-center font-medium">Contact</Link>
                    <Link href="https://saweria.co/sibuba" target="_blank" className="ms-2 flex justify-start text-sm items-center font-medium">Donate</Link>
                    <Image
                        src="/char-baby.png"
                        width={150}
                        height={150}
                        alt="sibuba"
                        className="absolute -bottom-6 left-1/2"
                    />
                    <span className="absolute right-7 bottom-3 font-bold text-[#212427] text-sm px-2 py-1 bg-[#ffc007] rounded-full">
                        Hello!
                    </span>
                </div>
            )}
        </>
    )
}

export default Header;