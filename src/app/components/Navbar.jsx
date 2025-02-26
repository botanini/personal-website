"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "about me",
    path: "#about"
  },
  {
    title: "resume",
    path: "/resume_217.pdf"
  },
  {
    title: "projects",
    path: "/projects"
  },
  {
    title: "contact me!",
    path: "#contact"
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#5399FD] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-icon.svg" // Replace with your logo path
            alt="logo-icon"
            width={263}
            height={61}
            className="responsive w-32"
          />
          <span className="sr-only">Liy Home</span> {/* Accessibility label */}
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-[#070042] hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-[#070042] hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
