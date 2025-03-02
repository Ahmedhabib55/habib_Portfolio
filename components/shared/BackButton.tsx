"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function BackButton() {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean); // Remove empty strings
  const parentPath = `/${pathSegments.slice(0, -1).join("/")}` || "/";
  return (
    <Link href={parentPath}>
      <button className="group flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 size-5 text-light-gray transition-all duration-300 group-hover:text-primary-100 "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-light-gray transition-all duration-300 group-hover:pl-1 group-hover:text-primary-100">
          Back
        </span>
      </button>
    </Link>
  );
}

export default BackButton;
