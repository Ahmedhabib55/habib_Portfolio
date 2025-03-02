import React from "react";
import HeaderOne from "./HeaderOne";
import FeaturedWorkCard from "./FeaturedWorkCard";
import { FeaturedWorkData } from "@/constants";
import AnimatedButton from "./AnimatedButton";
import AnimationComponent from "../AnimationComponent";

function FeaturedWork() {
  return (
    <section className="mt-16">
      <HeaderOne text="Featured Work" />

      {/* <div className=" mb-10 flex flex-wrap justify-between  "> */}
      <div className=" mb-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap xl:justify-between ">
        {FeaturedWorkData.map((work) => (
          <AnimationComponent key={work.id}>
            <FeaturedWorkCard
              id={work.id.toString()}
              title={work.title}
              type={work.type}
              img={work.img}
            />
          </AnimationComponent>
        ))}
      </div>
      <AnimatedButton text="View All" size="lg" href="/work" />
    </section>
  );
}

export default FeaturedWork;
