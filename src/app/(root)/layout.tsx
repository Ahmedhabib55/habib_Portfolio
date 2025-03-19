import React from "react";
import Sidebar from "../../../components/shared/Sidebar";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import MobileNavbar from "@/components/shared/MobileNavbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex">
      {/* Mobile Navbar */}
      <nav className="fixed left-0 top-0 z-[39] flex w-full items-center justify-between rounded-md bg-white bg-opacity-40 bg-clip-padding px-6 backdrop-blur-md md:hidden lg:hidden">
        <Logo />
        <MobileNavbar />
      </nav>
      {/* start sidebar  */}
      <div className="fixed hidden h-screen flex-col  border-r border-solid border-[#292929] md:flex md:w-[50px] lg:w-[239px] ">
        <div className="border_link-gray md:p-4 lg:p-[32px] ">
          <Link href="/">
            <h1 className="hover:text-primary-500 mb-1 whitespace-pre-wrap text-nowrap text-[30px] font-normal capitalize leading-[1.1rem] text-white transition md:hidden lg:block">
              Ahmed Habib
            </h1>
            <h1 className=" hover:text-primary-500 mb-8 ml-[-15px] text-6xl capitalize text-white delay-75 md:block lg:hidden ">
              H
            </h1>
          </Link>
          <span className="text-light-gray whitespace-pre-wrap  text-base md:hidden lg:flex">
            Frontend Developer
          </span>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
      {/* end sidebar */}
      {/* start main content */}
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-5 pt-[4.5rem] max-md:pb-14 md:pl-20 md:pt-12 lg:pl-64">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </section>
      {/* end main content */}
    </main>
  );
}

export default layout;
