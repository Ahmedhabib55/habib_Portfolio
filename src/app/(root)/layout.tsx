import React from "react";
import Sidebar from "../../../components/shared/Sidebar";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex">
      {/* start sidebar  */}
      <div className="fixed hidden h-screen w-[239px] flex-col border-r border-solid border-[#292929] md:flex ">
        <div className="border_link-gray p-[32px] ">
          <Link href="/">
            <h3 className="h1-normal mb-1 whitespace-pre-wrap text-nowrap capitalize text-white delay-75 hover:text-primary-500">
              Ahmed Habib
            </h3>
          </Link>
          <span className="whitespace-pre-wrap text-base text-light-gray">
            Frontend Developer
          </span>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
      {/* end sidebar */}
      {/* start main content */}
      <section className="flex min-h-screen flex-1 flex-col px-10 pb-5 pt-16 md:pt-12 max-md:pb-14 md:pl-64">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </section>
      {/* end main content */}
    </main>
  );
}

export default layout;
