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
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { GITHUB } from "@/constants";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

// Kinde Auth Imports
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const getStartedItems = [
  {
    title: "Create a account",
    href: "/sign-up",
    desc: "Create a account to shorten your URLs and use exclusive services.",
  },
  {
    title: "Shorten a URL",
    href: "#shorten-form",
    desc: "Shorten your URLs with URL Trailed",
  },
  {
    title: "Pricing",
    href: "/pricing",
    desc: "Check out our pricing plans and choose the best one for you.",
  },
];

function Navbar() {
  const { user, isLoading, isAuthenticated } = useKindeBrowserClient();
  return (
    <div className="fixed w-full  px-2 lg:px-0 text-[#343A40] border-b border-black/10 bg-white/60 backdrop-blur-lg dark:border-white/10 dark:bg-black/75 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex justify-start items-center space-x-8">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.jpeg"}
              alt="logo"
              height={50}
              width={50}
              className="rounded-lg md:rounded-xl shadow-lg my-2 cursor-pointer"
              priority
            />
          </Link>
          {/* Menu Buttons */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Get started */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Get Started
                </NavigationMenuTrigger>
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

              {/* Pricing */}
              <NavigationMenuItem className="hidden md:flex">
                <Link
                  href={"/pricing"}
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Pricing
                </Link>
              </NavigationMenuItem>

              {isAuthenticated && user ? (
                <>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                      Account
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] ">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href={"/account"}
                              className="text-sm font-medium leading-none"
                            >
                              <div className="flex flex-col items-start space-y-1">
                                <span className="font-medium text-gray-400 text-xs">
                                  Logged In as
                                </span>
                                <span>
                                  {user.given_name} {user.family_name}
                                </span>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href={"/dashboard"}
                              className="text-sm font-medium leading-none"
                            >
                              Dashboard
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <LogoutLink className="text-sm font-medium leading-none">
                              Log Out
                            </LogoutLink>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </>
              ) : (
                <>
                  {/* Sign Up */}
                  <NavigationMenuItem>
                    <RegisterLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent"
                      )}
                    >
                      Sign Up
                    </RegisterLink>
                  </NavigationMenuItem>

                  {/* Sign In */}
                  <NavigationMenuItem>
                    <LoginLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent"
                      )}
                    >
                      Sign In
                    </LoginLink>
                  </NavigationMenuItem>
                </>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Navbar */}
        <Button
          variant={"link"}
          className="text-white bg-green-500 hidden md:flex"
          asChild
        >
          <Link href={GITHUB.REPO_URL} target="_blank">
            <span>Contribute on Github</span>
            <GitHubLogoIcon className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
