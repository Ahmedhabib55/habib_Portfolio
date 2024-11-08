import React from "react";

interface SkillShowCaseProps {
  title: string;
  description: string;
}

function SkillShowCase({ title, description }: SkillShowCaseProps) {
  return (
    <section className="my-4">
      <h3 className="h3-normal text-white mb-2">{title}</h3>
      <p className="text-sm leading-6 text-light-gray">{description}</p>
    </section>
  );
}

export default SkillShowCase;
