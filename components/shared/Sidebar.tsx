import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../../constants";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <ul>
        {sidebarLinks.map((item) => (
          <li key={item.label}>
            <Link
              href={item.route}
              className=" border_link-gray flex overflow-hidden py-5 text-light-gray hover:bg-hovered hover:text-white max-lg:justify-center lg:items-start lg:gap-3 lg:px-[32px] lg:pl-8"
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
              />
              <p className="md:hidden lg:block"> {item.label} </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
