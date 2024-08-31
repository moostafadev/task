"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="h-16 flex items-center bg-main text-white">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold">Logo</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="gap-4 md:gap-6 sm:flex hidden">
              <li className="hover:text-gray-300 duration-300 text-sm">
                <a href="#">Go to Intercom</a>
              </li>
              <li className="hover:text-gray-300 duration-300 text-sm">
                <a href="#">Community</a>
              </li>
              <li className="hover:text-gray-300 duration-300 text-sm">
                <a href="#">Academy</a>
              </li>
              <li className="hover:text-gray-300 duration-300 text-sm">
                <a href="#">Developer Hub</a>
              </li>
            </ul>

            {/* Navbar To Phones */}
            <Button
              variant={"outline"}
              size={"icon"}
              className="rounded-[4px] h-8 w-9 sm:hidden"
              onClick={() =>
                setIsOpen((prev) =>
                  prev === false ? (prev = true) : (prev = false)
                )
              }
            >
              {isOpen === false ? (
                <Menu className="text-main" size={34} />
              ) : (
                <X className="text-main" size={34} />
              )}
            </Button>
            <div
              className={`sm:hidden fixed w-full left-0 top-16 bg-main text-white duration-300 overflow-hidden z-10 ${
                isOpen === false ? "h-0" : "h-[calc(100vh-64px)]"
              }`}
            >
              <ul className="gap-4 md:gap-6 flex flex-col p-4">
                <li
                  className="hover:text-gray-300 duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#">Go to Intercom</a>
                </li>
                <li
                  className="hover:text-gray-300 duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#">Community</a>
                </li>
                <li
                  className="hover:text-gray-300 duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#">Academy</a>
                </li>
                <li
                  className="hover:text-gray-300 duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#">Developer Hub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
