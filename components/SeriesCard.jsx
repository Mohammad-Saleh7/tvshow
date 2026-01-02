"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { seriesBtn } from "@/redux/cardSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SeriesCard({
  poster_path,
  original_name,
  overview,
  vote_average,
  href,
  id,
}) {
  const cardSelector = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const router = useRouter();
  return (
    <Card className="bg-indigo-200 mx-4 sm:mx-10 my-5 flex flex-col sm:flex-row gap-6 items-start p-4 min-h-[150px] transition-all hover:bg-indigo-300 duration-500 border-none dark:bg-neutral-800 dark:hover:bg-neutral-950">
      <div className="flex-shrink-0 flex justify-center sm:block w-full sm:w-auto">
        <div className="relative w-[180px] h-[260px] sm:w-[100px] sm:h-[150px] overflow-hidden rounded-lg hover:scale-110 duration-700 transition-all">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 w-full">
        <CardHeader className="p-0">
          <CardTitle className="text-lg sm:text-xl font-bold text-center sm:text-left">
            {original_name}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-sm sm:text-base text-center sm:text-left">
            {overview}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 mt-3 sm:mt-0">
          <p className="font-medium text-center sm:text-left text-sm sm:text-base">
            IMDB: {vote_average?.toFixed(1)}
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 mt-2">
            <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
              <button
                className="dark:bg-neutral-900 hover:font-semibold dark:text-indigo-50 py-1.5 px-3 rounded-2xl bg-indigo-100 text-black hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => router.push(href)}
              >
                View Details
              </button>
              <button
                className="dark:bg-neutral-900 hover:font-semibold dark:text-indigo-50 py-1.5 px-3 rounded-2xl bg-indigo-100 text-black cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() =>
                  dispatch(
                    seriesBtn({
                      poster_path,
                      original_name,
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
            <button
              className="dark:bg-neutral-900 hover:font-semibold dark:text-indigo-50 py-1.5 px-3 rounded-2xl bg-indigo-100 text-black hover:text-white cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-red-700"
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
