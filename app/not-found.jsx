"use client";

import Image from "next/image";

export default function notFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#050e10] ">
      <Image src={"/404.png"} width={600} height={400} className="rounded-xl" />
    </div>
  );
}
