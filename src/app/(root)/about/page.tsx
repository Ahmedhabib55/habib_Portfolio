import React from "react";
import { PersonalInfo } from "../../../../constants";
import AnimatedButton from "@/components/shared/AnimatedButton";
import SkillShowCase from "@/components/SkillShowCase";
import HeaderOne from "@/components/shared/HeaderOne";

const page = () => {
  return (
    <div className=" px-24">
      <HeaderOne text="About Habib" />
      <p className=" text-white">
        I’m a passionate web developer based in Mansoura, Egypt, with a knack
        for crafting efficient, modern websites and applications. With a strong
        foundation in JavaScript and a growing expertise in React, Node.js,
        Next.js,TypeScript, and Tailwind CSS, I’m dedicated to creating
        seamless, responsive user experiences with a minimal dependency
        approach.
      </p>
      {/* <Image width={130} height={130} src={""} alt="habib"/> */}
      <div className="my-10 h-[400px] w-full rounded-lg bg-gray-400" />

      {PersonalInfo.map((detail) => (
        <SkillShowCase
          key={detail.title}
          title={detail.title}
          description={detail.description}
        />
      ))}

      <AnimatedButton text="Let's Talk" size="lg" hoverText="👋Let's Talk" />
    </div>
  );
};

export default page;
