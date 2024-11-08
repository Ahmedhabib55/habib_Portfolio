import React from "react";
import HeaderTwo from "./HeaderTwo";
import FeaturedWorkCard from "./FeaturedWorkCard";
import { FeaturedWorkData } from "@/constants";
import AnimatedButton from "./AnimatedButton";

function FeaturedWork() {
  return (
    <section className="mt-16">
      <HeaderTwo text="Featured Work" />

      <div className=" flex justify-between items-center gap-5 mb-10">
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
