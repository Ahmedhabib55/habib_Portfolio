import React from "react";
import HeaderTwo from "./HeaderTwo";
import FeaturedWorkCard from "./FeaturedWorkCard";
import { FeaturedWorkData } from "@/constants";
import AnimatedButton from "./AnimatedButton";

function FeaturedWork() {
  return (
    <section className="mt-16">
      <HeaderTwo text="Featured Work" />

      {/* <div className=" mb-10 flex flex-wrap justify-between  "> */}
      <div className=" mb-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap xl:justify-between ">
        {FeaturedWorkData.map((work) => (
          <FeaturedWorkCard
            key={work.id}
            id={work.id.toString()}
            title={work.title}
            type={work.type}
            img={work.img}
          />
        ))}
      </div>
      <AnimatedButton text="View All" size="lg" />
    </section>
  );
}

export default FeaturedWork;
