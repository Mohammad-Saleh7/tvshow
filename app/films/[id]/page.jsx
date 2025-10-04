import { getData } from "../../../utils/dataServices";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
  const API_KEY = process.env.TMDB_API_KEY;
  const data = await getData(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`
  );
  return {
    title: `film-${data?.original_title || params.id}`,
  };
}

const Films = dynamic(() => import("../../../components/dynamicComp/Film"), {
  ssr: false,
  loading: () => <h3>Loading Films</h3>,
});

export default async function page({ params }) {
  const API_KEY = process.env.TMDB_API_KEY;
  const data = await getData(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`
  );
  const films = data || {};
  if (!data.id) {
    return notFound();
  }

  return (
    <div>
      <Films
        //   key={item.id}
        overview={films.overview}
        poster_path={films.poster_path}
        vote_average={films.vote_average}
        original_title={films.original_title}
      />
    </div>
  );
}
