"use client";

import React, { act, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { usePathname, useRouter } from "next/navigation";
import DarkMode from "./DarkMode";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: "/", title: "Home" },
    { href: "/series", title: "Series" },
    { href: "/films", title: "Films" },
    { href: "/person", title: "Actors" },
    { href: "/likes", title: "Likes" },
  ];

  const signItem = [
    { href: "/signin", title: "SignIn" },
    { href: "/signup", title: "SignUp" },
  ];

  const path = usePathname();
  return (
    <div className="relative">
      <NavigationMenu className="w-full px-4 py-4 md:px-10">
        <NavigationMenuList className="flex w-full items-center justify-start lg:justify-between lg:gap-96 md:gap-60 ">
          <section className="flex gap-5">
            <NavigationMenuItem>
              <p
                className="font-bold text-2xl cursor-pointer "
                onClick={() => router.push("/")}
              >
                <span className="text-teal-700">TV</span> SHOW
              </p>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="
      bg-indigo-50  cursor-pointer
      data-[state=open]:bg-indigo-200 data-[state=open]:text-indigo-900
     dark:bg-neutral-900  dark:data-[state=open]:bg-neutral-950 dark:data-[state=open]:text-indigo-50 "
              >
                Movies
              </NavigationMenuTrigger>

              <NavigationMenuContent className="p-0 bg-indigo-100 dark:bg-neutral-800">
                <ul className="grid w-[200px] gap-2 p-2">
                  {navItems.map((item, i) => {
                    const active = path === item.href;
                    return (
                      <li key={i}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={`block text-center rounded-md px-3 py-2 text-sm transition
                  hover:bg-indigo-200 hover:font-semibold
                  dark:hover:bg-neutral-900
                  ${active ? "bg-indigo-200 font-semibold" : ""} ${
                              active ? "dark:bg-neutral-900" : ""
                            } ${active ? "dark:font-bold" : ""} `}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </section>

          <section className="hidden md:flex flex-row items-center gap-3">
            <NavigationMenuItem>
              <div className="relative w-56">
                <Input
                  placeholder="search movie"
                  className="w-full rounded-2xl border-2 border-black pr-10"
                />
                <Search className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 opacity-70" />
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem className="flex flex-row gap-2 mr-1.5 ml-1.5">
              {signItem.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-2xl hover:scale-125 hover:bg-indigo-200 transition-all duration-300 hover:font-semibold
                  dark:hover:bg-neutral-800 ${
                    path === item.href ? "bg-indigo-200" : "none"
                  } ${path === item.href ? "font-bold" : "none"} ${
                    path === item.href ? "dark:bg-neutral-950" : "none"
                  } ${path === item.href ? "font-bold" : "none"} `}
                >
                  {item.title}
                </Link>
              ))}
            </NavigationMenuItem>
            <DarkMode />
            <div>
              <p
                className="text-3xl cursor-pointer animate-pulse"
                onClick={() => router.push("/likes")}
              >
                ❤️
              </p>
            </div>
          </section>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}
