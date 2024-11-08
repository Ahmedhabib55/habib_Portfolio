import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../../constants";
import { MouseEventHandler } from "react";

interface SidebarProps {
  handelCloseNav?: (e: React.MouseEvent<Element>) => void;
}

const Sidebar = ({ handelCloseNav }: SidebarProps) => {
  return (
    <div>
      <ul>
        {sidebarLinks.map((item) => (
          <li key={item.label} onClick={handelCloseNav && handelCloseNav}>
            <Link
              href={item.route}
              className=" border_link-gray flex items-start gap-3 overflow-hidden px-[32px] py-5 pl-8 text-light-gray hover:bg-hovered hover:text-white"
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
              />
              <p> {item.label} </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
