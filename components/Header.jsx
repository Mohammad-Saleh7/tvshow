"use client";

import React, { useState } from "react";
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

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: "/", title: "Home" },
    { href: "/series", title: "Series" },
    { href: "/films", title: "Films" },
    { href: "/person", title: "Person" },
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
      bg-indigo-50 hover:bg-indigo-200
      data-[state=open]:bg-indigo-200 data-[state=open]:text-indigo-900
    "
              >
                Movies
              </NavigationMenuTrigger>

              <NavigationMenuContent className="p-0">
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
                  ${active ? "bg-indigo-200 font-semibold" : ""}
                `}
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

            <NavigationMenuItem>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </NavigationMenuItem>
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

      {open && (
        <div className="mt-3 grid gap-3 md:hidden">
          <NavigationMenuItem>
            <div className="relative w-full">
              <Input
                placeholder="search movie"
                className="h-10 w-full rounded-2xl border-2 border-black pr-10"
              />
              <Search className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 opacity-70" />
            </div>
          </NavigationMenuItem>

          <div className="flex items-center justify-between">
            <NavigationMenuItem>
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 px-3">
                Simple
              </NavigationMenuTrigger>
              <NavigationMenuContent />
            </NavigationMenuItem>
          </div>

          <ul className="grid gap-2">
            <ListItem href="#" title="Home">
              Go to homepage
            </ListItem>
            <ListItem href="#" title="Movies">
              Browse movies
            </ListItem>
            <ListItem href="#" title="Blog">
              Latest posts
            </ListItem>
          </ul>
        </div>
      )}
    </div>
  );
}

function ListItem({ title, children, href = "#", ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block rounded-md p-2 hover:bg-gray-100">
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
