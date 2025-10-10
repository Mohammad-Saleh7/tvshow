import { getData } from "../../../utils/dataServices";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const API_KEY = process.env.TMDB_API_KEY;
  const data = await getData(
    `https://api.themoviedb.org/3/person/${params.id}?api_key=${API_KEY}`
  );
  return {
    title: `actors-${data?.name || params.id}`,
  };
}

const Persons = dynamic(
  () => import("../../../components/dynamicComp/Person"),
  {
    ssr: false,
    loading: () => <h3>Loading Persons</h3>,
  }
);

export default async function Page({ params }) {
  const API_KEY = process.env.TMDB_API_KEY;
  const data = await getData(
    `https://api.themoviedb.org/3/person/${params.id}?api_key=${API_KEY}`
  );
  if (!data?.id) notFound();

  const person = data || {};

  return (
    <div>
      <Persons
        key={person.id}
        profile_path={person.profile_path}
        name={person.name}
        overview={person.known_for?.[0]?.overview || "No overview available"}
        vote_average={person.popularity ?? "N/A"}
        href={`/person/${person.id}`}
      />
    </div>
  );
}
