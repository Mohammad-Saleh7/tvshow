"use client";
import React from "react";
import { Button } from "./ui/button";

export default function MyButton({ children, className = "", ...props }) {
  return (
    <Button
      variant="outline"
      className={`  dark:bg-neutral-800 dark:hover:bg-neutral-950    bg-slate-300 border-none cursor-pointer hover:bg-black hover:text-[#dbc594] hover:scale-110 duration-500 transition-all ${className}`}
      {...props}
      type={props.type ?? "button"}
    >
      {children}
    </Button>
  );
}
