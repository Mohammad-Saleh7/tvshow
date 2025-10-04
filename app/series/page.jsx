import dynamic from "next/dynamic";
import { getData } from "../../utils/dataServices";

export const metadata = {
  title: "series",
  description: "some popular series",
};

const SeriesCard = dynamic(() => import("../../components/SeriesCard"), {
  ssr: false,
  loading: () => <h3>Series is loading...</h3>,
});

export default async function page() {
  const API_KEY = process.env.TMDB_API_KEY;

  const data = await getData(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
  );

  const series = Array.isArray(data?.results) ? data.results : [];

  return (
    <div>
      {series.map((item) => (
        <SeriesCard
          key={item.id}
          poster_path={item.poster_path}
          original_name={item.original_name}
          overview={item.overview}
          vote_average={item.vote_average}
          href={`/series/${item.id}`}
        />
      ))}
    </div>
  );
}
