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
    { href: "mailto:abbasisaleh895@gmail.com", title: "Email" },
  ];

  const path = usePathname();

  return (
    <footer className=" bg-indigo-50   mb-5">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-indigo-50">
        <p className="text-sm text-muted-foreground">
          © {year} <span className="font-semibold">TV SHOW</span>.
        </p>

        <nav className="flex items-center gap-5 text-sm">
          {Links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.href}
                className={`${path === link.href ? "font-bold" : ""} ${
                  path === link.href ? "bg-indigo-200" : ""
                } hover:bg-indigo-200 py-1 px-3 rounded-2xl transition-all hover:scale-150 duration-300 `}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
