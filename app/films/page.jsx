import { getData } from "@/utils/dataServices";
import dynamic from "next/dynamic";
import React from "react";

export const metadata = {
  title: "Films",
  description: "Some popular films",
};

const Films = dynamic(() => import("../../components/FilmCards"), {
  ssr: false,
  loading: () => <h3>Loading Films</h3>,
});

export default async function page() {
  const API_KEY = process.env.TMDB_API_KEY;
  const data = await getData(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  );
  const films = Array.isArray(data?.results) ? data.results : [];

  return (
    <div>
      {films.map((item) => (
        <Films
          id={item.id}
          key={item.id}
          overview={item.overview}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          original_title={item.original_title}
          href={`/films/${item.id}`}
        />
      ))}
    </div>
  );
}
