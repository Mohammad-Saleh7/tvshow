import dynamic from "next/dynamic";
import { getData } from "../../../utils/dataServices";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const API_KEY = process.env.TMDB_API_KEY;

  const data = await getData(
    `https://api.themoviedb.org/3/tv/${params.id}?api_key=${API_KEY}`
  );

  return {
    title: `series-${data?.name || data?.original_name || params.id}`,
  };
}

const SeriesCard = dynamic(
  () => import("../../../components/dynamicComp/Series"),
  {
    ssr: false,
    loading: () => <h3>Series is loading...</h3>,
  }
);

export default async function Page({ params }) {
  const API_KEY = process.env.TMDB_API_KEY;

  const data = await getData(
    `https://api.themoviedb.org/3/tv/${params.id}?api_key=${API_KEY}`
  );

  if (!data?.id) notFound();

  const series = data || {};

  return (
    <div>
      <SeriesCard
        poster_path={series.poster_path}
        original_name={series.original_name || series.name}
        overview={series.overview}
        vote_average={series.vote_average}
        href={`/series/${series.id}`}
      />
    </div>
  );
}
