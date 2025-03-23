import FeaturedWork from "@/components/shared/FeaturedWork";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <header className="animate-fadeInUp relative mb-14 flex items-center justify-between overflow-hidden">
        <Image
          // src={"/assets/images/habib-test.jpg"}
          src={"/assets/images/habib.jpg"}
          alt="habib-img"
          width={120}
          height={150}
          className="rounded-lg object-cover "
          priority
        />

        <Link
          href={"/contact"}
          className="bg-active-green/5 text-active-green hover:bg-active-green/10 flex size-fit items-center justify-center gap-2 rounded-md px-5 py-2  font-light opacity-100 transition"
        >
          <span className="bg-active-green size-2 rounded-full"></span>
          <span className="first-letter:uppercase"> open to work</span>
        </Link>
      </header>

      <section className="animate-fadeInUp ">
        <h1 className="h1-semibold mb-4 leading-tight sm:w-[70%] ">
          Hey, I&apos;m Ahmed - I&apos;m a Frontend Developer
        </h1>
        <p className="text-light-gray  w-4/5 text-sm leading-6">
          I am a junior frontend developer specializing in <b>React</b> and
          <b>Next.js</b>, crafting responsive, high-performance web applications
          focused on modern UI and seamless user experiences.
        </p>
        {/* social icon links */}

        <div className="mt-10">
          <ul className="flex items-center gap-5">
            <li className="rounded-sm border border-[#292929] bg-[#121212] p-2 hover:bg-[#292929]">
              <a href="https://github.com/Ahmedhabib55" target="_blank">
                <Image
                  src={"/assets/Icons/github-svgrepo-com.svg"}
                  alt="github"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li className="rounded-sm border border-[#292929] bg-[#121212] p-2 hover:bg-[#292929]">
              <a
                href="https://www.linkedin.com/in/ahmed-habib-65a781274"
                target="_blank"
              >
                <Image
                  src={"/assets/Icons/linkedin-svgrepo-com.svg"}
                  alt="linkedin"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li className="rounded-sm border border-[#292929] bg-[#121212] p-2 hover:bg-[#292929]">
              <a href="https://x.com/ahmed_H_habib" target="_blank">
                <Image
                  src={"/assets/Icons/x.svg"}
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="border_top_bottom-gray mt-10">
        {/* <AnimationComponent> */}
        <FeaturedWork />
        {/* </AnimationComponent> */}
      </section>
    </div>
  );
};

export default page;
