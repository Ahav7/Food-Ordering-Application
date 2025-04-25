import Link from "next/link";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
    <Hero />
    <HomeMenu />
    <section className="text-center my-16" id="about">
      <SectionHeaders
        subHeader={'Our Story'}
        mainHeader={'About us'}
      />
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
        nckdsbckds dbcbds c dksbckbdsc cbdskbkc.ds
      </p>
      <p>sdkjhclkd czxkjclkbc bsjzhczb cbjkzbcl</p>
      </div>
    </section>

    <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+1 9876501234">
            +1 987 650 1234
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2025 All rights reserved

      </footer>
    </>
  )
}