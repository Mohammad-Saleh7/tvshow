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
import { filmBtn } from "@/redux/cardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FilmsCard({
  poster_path,
  original_title,
  overview,
  vote_average,
  href,
  id,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cardSelector = useSelector((state) => state.cards);
  return (
    <Card className="bg-indigo-200 mx-4 sm:mx-6 md:mx-10 my-5 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-4 min-h-[150px] transition-all hover:bg-indigo-300 duration-500 border-none dark:bg-neutral-800 dark:hover:bg-neutral-950">
      <div className="flex-shrink-0 self-center sm:self-start">
        <div className="relative w-[120px] h-[180px] sm:w-[100px] sm:h-[150px] overflow-hidden rounded-lg hover:scale-150 duration-1000 transition-all">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 w-full">
        <CardHeader className="p-0">
          <CardTitle className="text-lg sm:text-xl font-bold break-words">
            {original_title}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-sm sm:text-base">
            {overview}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 mt-3 sm:mt-0">
          <p className="font-medium text-sm sm:text-base">
            IMDB: {vote_average?.toFixed(1)}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mt-2">
            <div className="flex gap-2 justify-center sm:justify-start">
              <button
                className="dark:bg-neutral-900 hover:font-semibold dark:text-indigo-50 py-1.5 px-3 rounded-2xl bg-indigo-100 text-black hover:scale-110 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                onClick={() => router.push(href)}
              >
                View Details
              </button>
              <button
                className="dark:bg-neutral-900 hover:font-semibold dark:text-indigo-50 py-1.5 px-3 rounded-2xl bg-indigo-100 text-black cursor-pointer hover:scale-110 transition-all duration-300 text-sm sm:text-base"
                onClick={() =>
                  dispatch(
                    filmBtn({
                      poster_path,
                      original_title,
                      overview,
                      vote_average,
                      href,
                      id,
                    })
                  )
                }
              >
                {cardSelector.find((item) => item.id === id)
                  ? "dislike"
                  : "like"}
              </button>
            </div>
            <div className="flex justify-center sm:justify-end">
              <button
                className="dark:bg-neutral-900 hover:font-semibold dark:text-indigo-50 py-1.5 px-3 rounded-2xl bg-indigo-100 text-black hover:text-white cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-red-700 text-sm sm:text-base"
                onClick={() => router.back()}
              >
                Back
              </button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
