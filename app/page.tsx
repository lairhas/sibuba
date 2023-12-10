import Image from 'next/image'
import Link from 'next/link'
import { TbBrandYoutubeFilled } from 'react-icons/tb'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-2 py-10 h-[600px] overflow-hidden items-center justify-center relative">
        <Image
          src="/sibuba-family.png"
          fill={true}
          objectFit="cover"
          alt="sibuba family"
        />
        <Link href="https://www.youtube.com/channel/UCsAJZzTB1NVMgOkRgylPxVQ" target="_blank" className="absolute z-10 bottom-5 hover:-translate-y-1 font-medium border-2 bg-gradient-to-r from-[#212427] via-[#49148b] to-[#FF0000] hover:from-[#FF0000] hover:via-[#49148b] hover:to-[#212427] font-mono border-[#f2f2f2] py-2 px-3 rounded-lg shadow duration-500 ease-in-out flex items-center gap-x-3">{"Let's go on a virtual trip"}<TbBrandYoutubeFilled size={30} /></Link>
      </div>
      <div className="flex gap-x-10 p-6 xl:p-12">
        <div className="flex flex-col gap-y-2 xl:w-[720px] xl:flex-none">
          <span id="about" className="font-bold text-xl">About Us</span>
          <span>
            Sibuba&apos;s dream is to <span className="font-semibold">travel around the world, try delicious food, and visit cool places all over the globe.</span> Whether it&apos;s exotic street snacks, local specialties, or unforgettable dining experiences, we&apos;re going to share all those exciting adventures together.
          </span>
          <span>
          But it&apos;s not just about long journeys! Sibuba also really enjoys <span className="font-semibold">exploring the nearby areas, finding comfortable staycation spots for families like ours.</span> Sibuba believes that exciting adventures can also be found close to home.
          </span>
        </div>
        <div className="flex w-full bg-[#f2f2f2] justify-center rounded-xl max-xl:hidden overflow-hidden relative group">
          <span className="absolute text-sm text-[#7b1fa1] top-3 group-hover:font-semibold duration-300 ease-in-out">
            Sibuba Family
          </span>
          <Image
            src="/char-suam.png"
            width={200}
            height={200}
            alt="sibuba"
            className="absolute left-0 -bottom-5 hover:-bottom-9 hover:-rotate-3 duration-300 ease-in-out"
          />
          <Image
            src="/char-sibuba.png"
            width={200}
            height={200}
            alt="sibuba"
            className="absolute right-0 -bottom-7 hover:-bottom-9 hover:rotate-3 duration-300 ease-in-out"
          />
          <Image
            src="/char-baby.png"
            width={150}
            height={150}
            alt="sibuba"
            className="absolute bottom-0 hover:-bottom-2 duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="flex gap-2 p-6 xl:p-12 max-xl:flex-col bg-[#212427]">
        <div className="flex flex-col justify-center xl:w-[600px] max-xl:hidden translate-x-8 group">
          <Image
            src="/char-sibuba.png"
            width={150}
            height={150}
            alt="sibuba"
            className="absolute translate-x-20 -translate-y-3"
          />
          <span className="font-semibold text-3xl -rotate-3 translate-x-8 group-hover:-rotate-2 duration-300 ease-in-out">Let&apos;s</span>
          <span className="font-bold text-4xl -rotate-2 text-[#ffc007] z-10">collaborate!</span>
        </div>
        <span className="font-bold text-xl xl:hidden">Let&apos;s <span className="text-[#ffc007]">collaborate!</span></span>
        <form id="contact" className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1">
            <label className="input-label" htmlFor="name">Name:</label>
            <input type="text" id="name" required></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="input-label" htmlFor="email">Email Address:</label>
            <input type="email" id="email" required></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="input-label" htmlFor="message">Message:</label>
            <textarea className="resize-none hover:resize-y" rows={6} id="message" required></textarea>
          </div>
          <button type="submit" className="p-2 bg-[#04724d] text-[#f2f2f2] rounded font-medium hover:bg-[#005632]">Send</button>
        </form>
        <Link
          href="https://saweria.co/sibuba"
          target="_blank"
          className="flex flex-col items-center justify-center xl:w-[600px] max-xl:hidden gap-2 -translate-y-5 group"
        >
          <span className="font-semibold text-3xl translate-y-5 group-hover:rotate-3 duration-300 ease-in-out">Want to</span>
          <span className="font-bold text-4xl group-hover:-rotate-2 text-[#ffc007] translate-x-8 duration-300 ease-in-out z-10">Donate?</span>
          <Image
            src="/saweria.png"
            width={200}
            height={200}
            alt="saweria"
            className="bg-[#f2f2f2] p-3 rounded translate-x-6"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-2 px-6 xl:px-12 pb-6 bg-[#212427] items-center">
        <span className="text-xs font-light">sibuba - © 2023 All Rights Reserved</span>
      </div>
    </>
  )
}
