"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "flex-col",
        "bg-topbar",
        "absolute",
        "w-full",
        "top-[60px]",
        "left-0",
        "p-6",
        "gap-10",
        "z-20",
      ];
    } else {
      menuClasses = ["hidden", "md:flex"];
    }
    return menuClasses.join(" ");
  }

  //DYNAMIC DARK/LIGHT MODE LOGO UPDATE
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <nav className="px-4 sm:px-6 md:flex md:justify-between md:items-center">
      <div className="container flex justify-between items-center">
        <Image
          className="topbar-logo"
          src={isDarkMode ? "7dshub-logo-white.svg" : "7dshub-logo-dark.svg"}
          alt="logo 7dshub"
          width={186}
          height={60}
        />
        <div className={getMenuClasses()}>
          <Link href="/" className="topbar-link">
            Teams
          </Link>
          <Link href="/tierlist" className="topbar-link">
            Tier List
          </Link>
          <Link href="/randomizer" className="topbar-link">
            Randomizer
          </Link>
          <Link href="/calculator" className="topbar-link">
            Calculator
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          {isOpen ? (
            <X
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            ></X>
          ) : (
            <Menu
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            ></Menu>
          )}
        </div>
      </div>
    </nav>
  );
};
