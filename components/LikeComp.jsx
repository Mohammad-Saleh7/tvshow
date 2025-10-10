"use client";

import { useDispatch, useSelector } from "react-redux";
import { clearBtns } from "@/redux/cardSlice";
import SeriesLikes from "@/components/likesComp/SeriesLikes";
import FilmLikes from "@/components/likesComp/FilmLikes";
import PersonLikes from "@/components/likesComp/PersonLikes";

export default function LikeComp() {
  const likedSeries = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-center mt-10">
        {likedSeries.length !== 0 ? (
          <button
            className="bg-red-500 px-1.5 py-2 cursor-pointer text-white rounded-2xl hover:bg-red-600 transition-all duration-300 hover:scale-105"
            onClick={() => dispatch(clearBtns())}
          >
            Delete all
          </button>
        ) : (
          ""
        )}
      </div>
      {likedSeries.length === 0 ? (
        <p className="text-center col-span-full text-gray-500">
          Nothing has been liked yet!
        </p>
      ) : (
        <div>
          <FilmLikes />
          <SeriesLikes />
          <PersonLikes />
        </div>
      )}
    </div>
  );
}
