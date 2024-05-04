"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { data } from "@/constants";

const getStartedItems = [
  {
    title: "Create a account",
    href: "/register",
    desc: "Create a account to shorten your URLs and use exclusive services.",
  },
  {
    title: "Short URL",
    href: "/shorten",
    desc: "Shorten your URLs with URL Trailed",
  },
];

function Navbar() {
  return (
    <div className="mt-5 w-full flex justify-between items-center">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/logo.jpeg"}
          alt="logo"
          height={60}
          width={60}
          className="rounded-xl shadow-lg"
        />
      </Link>

      {/* Center Navbar */}
      <NavigationMenu>
        <NavigationMenuList>
          {/* Get started */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] ">
                {getStartedItems.map(({ title, href, desc }) => (
                  <li key={title}>
                    <NavigationMenuLink asChild>
                      <Link href={href}>
                        <div
                          className={
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          }
                        >
                          <div className="text-sm font-medium leading-none">
                            {title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-gray-500">
                            {desc}
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Sign Up */}
          <NavigationMenuItem>
            <Link href={"/register"} className={navigationMenuTriggerStyle()}>
              Sign Up
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right Navbar */}
      {/* <div className="flex justify-between items-center space-x-4"> */}
      <Button variant={"link"} className="text-white bg-green-500">
        <Link
          href={data.github_repo_url}
          className=" flex items-center justify-around space-x-2"
        >
          <span>Contribute on Github</span>
          <AiFillGithub className="h-5 w-5" />
        </Link>
      </Button>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
