import React from "react";
import { PersonalInfo } from "../../../../constants";
import AnimatedButton from "@/components/shared/AnimatedButton";
import SkillShowCase from "@/components/SkillShowCase";
import HeaderTwo from "@/components/shared/HeaderTwo";

const page = () => {
  return (
    <>
      <HeaderTwo text="About Habib" />
      <p className=" text-white">
        I’m a passionate web developer based in Mansoura, Egypt, with a knack
        for crafting efficient, modern websites and applications. With a strong
        foundation in JavaScript and a growing expertise in React, Node.js,
        Next.js,TypeScript, and Tailwind CSS, I’m dedicated to creating
        seamless, responsive user experiences with a minimal dependency
        approach.
      </p>
      {/* <Image width={130} height={130} src={""} alt="habib"/> */}
      <div className="w-full h-[400px] bg-gray-400 rounded-lg my-10" />

      {PersonalInfo.map((detail) => (
        <SkillShowCase
          key={detail.title}
          title={detail.title}
          description={detail.description}
        />
      ))}

      <AnimatedButton text="Let's Talk" size="lg" hoverText="👋Let's Talk" />
    </>
  );
};

export default page;
