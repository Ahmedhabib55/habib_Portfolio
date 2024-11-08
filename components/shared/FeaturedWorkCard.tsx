import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedWorkCardProps {
  id: string;
  title: string;
  type: string;
  img: string;
}

function FeaturedWorkCard({ id, title, type, img }: FeaturedWorkCardProps) {
  return (
    <Link href={`/work/${title}`}>
      <article className="group w-[270px]overflow-hidden">
        <div className="overflow-hidden rounded-md w-full h-[220px]">
          <Image
            src={img}
            alt={title}
            width={300}
            height={200}
            className="rounded-md group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="my-4">
          <p className="text-sm text-gray-400 mb-2">{type}</p>
          <h3 className="h3-normal text-white transition-colors duration-300 group-hover:text-primary-500">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export default FeaturedWorkCard;
