"use client";

import { useSelector } from "react-redux";
import SeriesCard from "../../components/SeriesCard";

export default function SeriesLikes() {
  const likedSeries = useSelector((state) =>
    state.cards.filter((item) => item.type === "series")
  );
  return (
    <div>
      {likedSeries.map((series) => (
        <div>
          <SeriesCard
            id={series.id}
            key={series.id}
            poster_path={series.poster_path}
            overview={series.overview}
            original_name={series.original_name}
            vote_average={series.vote_average}
            href={`/series/${series.id}`}
          />
        </div>
      ))}
    </div>
  );
}
