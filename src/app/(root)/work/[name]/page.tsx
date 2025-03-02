import AnimatedButton from "@/components/shared/AnimatedButton";
import BackButton from "@/components/shared/BackButton";
import HeaderOne from "@/components/shared/HeaderOne";
import React from "react";

interface WorkPageProps {
  params: Promise<{ name: string }>;
}
const page = async ({ params }: WorkPageProps) => {
  const { name } = await params;
  return (
    <div className="flex h-full flex-col  space-y-8">
      <BackButton />
      <div>
        <HeaderOne text={name} />

        <p className="text-sm leading-6 text-light-gray">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
        <AnimatedButton text="View Live App" className="mt-8" />
      </div>
    </div>
  );
};

export default page;
