"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  const Links = [
    { href: "/", title: "Home" },
    { href: "/series", title: "Series" },
    { href: "/person", title: "Person" },
    { href: "/films", title: "Films" },
    { href: "/likes", title: "Likes" },
    { href: "mailto:abbasisaleh895@gmail.com", title: "Email" },
  ];

  const path = usePathname();

  return (
    <footer className="bg-indigo-50 dark:bg-neutral-900 px-4">
      <div className="mx-auto max-w-6xl py-5 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {year} <span className="font-semibold">TV SHOW</span>.
        </p>

        <nav className="w-full sm:w-auto">
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:flex sm:flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3">
            {Links.map((link, i) => {
              const active = path === link.href;
              return (
                <Link
                  key={i}
                  href={link.href}
                  className={[
                    "text-sm rounded-2xl py-2 px-3 transition-all duration-200",
                    "w-full sm:w-auto text-center",
                    "bg-white/40 dark:bg-neutral-800/70 hover:bg-indigo-200 dark:hover:bg-neutral-950",
                    "border border-black/5 dark:border-white/10",
                    "hover:scale-105 active:scale-95",
                    active ? "font-bold bg-indigo-200 dark:bg-neutral-950" : "",
                  ].join(" ")}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </footer>
  );
}
