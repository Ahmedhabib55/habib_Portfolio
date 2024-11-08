"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import Sidebar from "./Sidebar";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLinkClick = useCallback((e: MouseEvent<Element>): void => {
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
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleNav}
        className="fixed right-6 top-[0.8rem]  z-50  p-2 text-gray-200 shadow-lg"
        aria-label="Toggle navigation"
        type="button"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40"
          aria-hidden="true"
        />
      )}

      {/* Navigation Menu */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={`fixed left-0 top-0 z-40 h-full w-[270px]shadow-lg transition-transform duration-300 ease-in-out${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:block ${
          typeof window !== "undefined" && window.innerWidth >= 640
            ? "hidden"
            : ""
        }`}
      >
        {isOpen && (
          <nav className="p-6 pt-16 size-10 backdrop-blur-0">
            {/* <Sidebar handelCloseNav={handleLinkClick} /> */}
          </nav>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
