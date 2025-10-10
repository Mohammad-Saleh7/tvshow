import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        className="group dark:bg-neutral-800 dark:hover:bg-indigo-300 hover:bg-neutral-900 border-2 hover:text-yellow-400 hover:fill-yellow-400 border-black rounded-[100%] px-2 py-1.5  bg-indigo-50   transition-all duration-500 cursor-pointer animate-bounce"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Moon className="group-hover:fill-yellow-400 group-hover:text-yellow-400 transition-all duration-300" />
        ) : (
          <SunMedium className="dark:text-yellow-300" />
        )}
      </button>
    </div>
  );
}
