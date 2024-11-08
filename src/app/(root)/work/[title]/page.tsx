import BackButton from "@/components/shared/BackButton";
import React from "react";

interface Props {
  params: { title: string };
}

function WorkDetailsPage({ params }: Props) {
  return (
    <div>
      <BackButton />
    </div>
  );
}

export default WorkDetailsPage;
