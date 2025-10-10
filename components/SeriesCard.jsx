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
    <Card className="bg-indigo-200 mx-10 my-5 flex gap-6 items-start p-4 min-h-[150px]  transition-all hover:bg-indigo-300  duration-500 border-none  dark:bg-neutral-800 dark:hover:bg-neutral-950 ">
      <div className="flex-shrink-0">
        <div className="relative w-[100px] h-[150px] overflow-hidden rounded-lg hover:scale-150 duration-1000 transition-all  ">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_name}
            fill
            className="object-cover "
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <CardHeader className="p-0">
          <CardTitle className="text-lg font-bold">{original_name}</CardTitle>
          <CardDescription className="line-clamp-3  ">
            {overview}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 ">
          <p className="font-medium">IMDB: {vote_average?.toFixed(1)}</p>
          <div className="flex items-center justify-between ">
            <div className="mt-2 flex gap-2">
              <button
                className="  dark:bg-neutral-900 dark:text-indigo-50 py-1.5 px-2 rounded-2xl bg-indigo-100  text-black hover:scale-110 transition-all duration-300 cursor-pointer"
                onClick={() => router.push(href)}
              >
                View Details
              </button>
              <button
                className=" dark:bg-neutral-900 dark:text-indigo-50 py-1.5 px-2 rounded-2xl bg-indigo-100  text-black cursor-pointer hover:scale-110 transition-all duration-300"
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
            <div className="mt-2">
              <button
                className=" dark:bg-neutral-900 dark:text-indigo-50 py-1.5 px-2 rounded-2xl bg-indigo-100  text-black  hover:text-white  cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-red-700"
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
