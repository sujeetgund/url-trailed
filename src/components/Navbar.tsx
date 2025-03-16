"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Shadcn Imports
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { GITHUB } from "@/constants";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const NavbarItems = [
  {
    title: "Create Account",
    href: "/sign-up",
    desc: "Create a account to shorten your URLs and use exclusive services.",
  },
  {
    title: "Shorten URL",
    href: "#shorten-form",
    desc: "Shorten your URLs with URL Trailed",
  }
];

function Navbar() {
  return (
    <div className="fixed w-full px-2 lg:px-0 backdrop-blur-lg dark:bg-black/75 z-50 hidden md:block">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex justify-start items-center space-x-8">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.jpeg"}
              alt="logo"
              height={48}
              width={48}
              className="rounded-lg md:rounded-xl shadow-lg my-2 cursor-pointer"
              priority
            />
          </Link>
          {/* Menu Buttons */}
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {NavbarItems.map((item) => {
                return (
                  <NavigationMenuItem
                    key={item.title}
                    className="hidden md:flex hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg p-2"
                  >
                    <NavigationMenuLink href={item.href}>
                      {item.title}
                    </NavigationMenuLink>
                    <NavigationMenuContent>{item.desc}</NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Navbar */}
        <Button
          variant={"link"}
          className="bg-green-500 hidden md:flex"
          asChild
        >
          <Link href={GITHUB.REPO_URL} target="_blank">
            <span>Give Star on Github</span>
            <GitHubLogoIcon className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
