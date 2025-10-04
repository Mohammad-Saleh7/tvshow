"use client";
import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen   bg-[#885E21] ">
      <Image
        src={"/loading.png"}
        width={600}
        height={600}
        className="h-screen flex justify-center items-center"
      />
    </div>
  );
}
