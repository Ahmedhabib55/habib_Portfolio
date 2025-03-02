"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLinkClick = useCallback((): void => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent | globalThis.MouseEvent
    ): void => {
      const navbar = document.getElementById("mobile-nav");
      if (isOpen && navbar && !navbar.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleNav = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleNav}
        className="fixed right-6 top-[0.8rem]  z-[41]  p-2 text-gray-200 shadow-lg"
        aria-label="Toggle navigation"
        type="button"
      >
        {isOpen ? (
          <X className="size-6 transition-all duration-[300] ease-in-out hover:rotate-180" />
        ) : (
          <Menu className="size-6 " />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="relative left-0 top-0 z-[41] h-screen w-full rounded-md bg-white bg-clip-padding opacity-10 backdrop-blur-md transition duration-300 ease-in-out"
          aria-hidden="true"
        />
      )}

      {/* Navigation Menu */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={` absolute left-0  top-0 z-[42] h-[600px] w-[270px] border-b border-r border-[#292929] bg-[#121212] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:block ${
          typeof window !== "undefined" && window.innerWidth >= 640
            ? "hidden"
            : ""
        }`}
      >
        <div className="py-4">
          <div className="border_link-gray p-8">
            <Link href="/">
              <h3 className="h1_normal mb-1 whitespace-pre-wrap text-nowrap capitalize text-white delay-75 hover:text-primary-500 ">
                Ahmed Habib
              </h3>
            </Link>
            <span className="whitespace-pre-wrap text-base text-light-gray">
              Frontend Developer
            </span>
          </div>
          {sidebarLinks.map((item) => (
            <Link
              href={item.route}
              onClick={handleLinkClick}
              key={item.id}
              className="group  flex items-center border-y border-[#292929] px-4 py-3 transition hover:bg-hovered"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                />

                <span className="text-light-gray group-hover:text-white">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
