import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/images/habib_logo.png"
        alt="habib"
        width={75}
        height={75}
        className="object-cover"
      />
    </Link>
  );
}

export default Logo;
