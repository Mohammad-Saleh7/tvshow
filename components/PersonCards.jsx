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
  href,
}) {
  const router = useRouter();
  return (
    <Card className="bg-indigo-200 mx-10 my-5 flex gap-6 items-start p-4 min-h-[150px]  transition-all hover:bg-indigo-300 duration-500 ">
      <div className="flex-shrink-0">
        <div className="relative w-[100px] h-[150px] overflow-hidden rounded-lg hover:scale-150 duration-1000 transition-all  ">
          <Image
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
            fill
            className="object-cover "
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <CardHeader className="p-0">
          <CardTitle className="text-lg font-bold">{name}</CardTitle>
          <CardDescription className="line-clamp-3">{overview}</CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <p className="font-medium">Vote: {vote_average?.toFixed(1)}</p>
          <div className="mt-2">
            <button
              className="py-1.5 px-2 rounded-2xl bg-indigo-100  text-black hover:scale-110 transition-all duration-300"
              onClick={() => router.push(href)}
            >
              View Details
            </button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
