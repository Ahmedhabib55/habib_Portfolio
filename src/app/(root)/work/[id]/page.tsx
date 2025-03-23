import AnimatedButton from "@/components/shared/AnimatedButton";
import BackButton from "@/components/shared/BackButton";
import HeaderOne from "@/components/shared/HeaderOne";
import React from "react";
import { FeaturedWorkData } from "@/constants";
import Image from "next/image";

interface WorkPageProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: WorkPageProps) => {
  const { id } = await params;
  const projectDetails = FeaturedWorkData.find((project) => project.id === id);

  if (!projectDetails) {
    return <div className="mx-auto mt-14">Project not found</div>;
  }

  return (
    <div className="flex h-full flex-col space-y-8">
      <BackButton />
      <div>
        <HeaderOne text={projectDetails.title} />

        <p className="text-light-gray text-sm leading-6">
          {projectDetails.description}
        </p>
        <div className="text-right">
          <AnimatedButton
            text="View Live App"
            className="mt-8"
            href={projectDetails.demo_link}
          />
        </div>

        <div className="relative mt-6 flex w-full justify-center">
          <div className="animate-slide-right mx-auto w-full max-w-4xl opacity-0">
            <Image
              src={projectDetails.img}
              alt="Project on desktop"
              width={1200}
              height={675}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          <div className="animate-slide-up animation-delay-500 absolute right-0 top-0 w-1/4 translate-y-1/4 opacity-0 md:right-4 md:w-1/5 lg:right-12">
            <Image
              src={projectDetails.mobileImg || projectDetails.img}
              alt="Project on mobile"
              width={375}
              height={750}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
