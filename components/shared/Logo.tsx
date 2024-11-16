import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href="/"
      className=" relative text-6xl text-white hover:text-primary-100"
    >
      H
    </Link>
  );
}

export default Logo;
