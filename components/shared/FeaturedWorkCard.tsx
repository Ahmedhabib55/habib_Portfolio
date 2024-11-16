import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedWorkCardProps {
  id: string;
  title: string;
  type: string;
  img: string;
}

function FeaturedWorkCard({ title, type, img }: FeaturedWorkCardProps) {
  return (
    <Link href={`/work/${title}`}>
      <article className="group w-[270px] min-w-[200px] flex-1 overflow-hidden ">
        <div className="h-[220px] w-full overflow-hidden rounded-md">
          <Image
            src={img}
            alt={title}
            width={300}
            height={200}
            className="rounded-md transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="my-4">
          <p className="mb-2 text-sm text-gray-400">{type}</p>
          <h3 className="h3-normal text-white transition-colors duration-300 group-hover:text-primary-500">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export default FeaturedWorkCard;
