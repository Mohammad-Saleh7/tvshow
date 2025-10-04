"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonComp = dynamic(() => import("../components/MyButton"), {
  ssr: false,
  loading: () => <h3>Loading...</h3>,
});

export default function HomeClient() {
  const router = useRouter();
  return (
    <div className="h-screen flex justify-center items-center gap-5 flex-col  ">
      <div className="flex gap-5  ">
        <ButtonComp onClick={() => router.push("/series")}>Series</ButtonComp>
        <ButtonComp onClick={() => router.push("/films")}>Films</ButtonComp>
        <ButtonComp onClick={() => router.push("/person")}>Person</ButtonComp>
      </div>
      <Image
        src={"/banner.png"}
        width={500}
        height={500}
        className="rounded-2xl"
      />
    </div>
  );
}
