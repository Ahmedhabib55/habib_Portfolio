import AnimationComponent from "@/components/AnimationComponent";
import FeaturedWorkCard from "@/components/shared/FeaturedWorkCard";
import HeaderOne from "@/components/shared/HeaderOne";
import { FeaturedWorkData } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderOne text="Work" />

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
    </div>
  );
};

export default page;
