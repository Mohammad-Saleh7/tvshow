"use client";
import React from "react";
// اگر MyButton.jsx داخل پوشه components و فایل ui/button هم داخل components/ui است:
import { Button } from "./ui/button"; // ✅ مسیر درست

export default function MyButton({ children, className = "", ...props }) {
  return (
    <Button
      variant="outline"
      className={`bg-slate-300 hover:bg-black hover:text-[#dbc594] hover:scale-110 duration-500 transition-all ${className}`}
      {...props} // ✅ تمام props مثل onClick اینجا پاس می‌شن
      type={props.type ?? "button"}
    >
      {children}
    </Button>
  );
}
