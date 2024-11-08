import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href="/"
      className="text-6xl text-white hover:text-primary-100 relative z-50"
    >
      H
    </Link>
  );
}

export default Logo;
