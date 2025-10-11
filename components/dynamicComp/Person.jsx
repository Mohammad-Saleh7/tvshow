"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PersonCard({
  profile_path,
  name,
  overview,
  vote_average,
  id,
}) {
  const router = useRouter();
  return (
    <Card className="bg-indigo-200 mx-4 sm:mx-6 md:mx-10 my-5 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-4 min-h-[150px] transition-all hover:bg-indigo-300 duration-500 border-none dark:bg-neutral-800 dark:hover:bg-neutral-950">
      <div className="flex-shrink-0 w-full sm:w-[100px]">
        <div className="relative w-full sm:w-[100px] h-[150px] overflow-hidden rounded-lg hover:scale-105 duration-500 transition-all">
          <Image
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 w-full">
        <CardHeader className="p-0">
          <CardTitle className="text-lg font-bold break-words">
            {name}
          </CardTitle>
          <CardDescription className="line-clamp-3">{overview}</CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <p className="font-medium">Vote: {vote_average?.toFixed(1)}</p>
          <div className="mt-2">
            <button
              onClick={() => router.back()}
              className="dark:bg-neutral-900 hover:font-semibold dark:text-indigo-50 py-1.5 px-4 rounded-2xl bg-indigo-100 text-black hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-red-700 hover:text-white"
            >
              Back
            </button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
