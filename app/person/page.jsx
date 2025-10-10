import { getData } from "@/utils/dataServices";
import dynamic from "next/dynamic";

export const metadata = {
  title: "actors",
  description: "Some popular persons",
};

const Persons = dynamic(() => import("../../components/PersonCards"), {
  ssr: false,
  loading: () => <h3>Loading Persons</h3>,
});

export default async function page() {
  const API_KEY = process.env.TMDB_API_KEY;
  const data = await getData(
    `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`
  );
  const persons = Array.isArray(data?.results) ? data.results : [];

  return (
    <div>
      {persons.map((item) => (
        <Persons
          id={item.id}
          key={item.id}
          profile_path={item.profile_path}
          name={item.name}
          overview={item.known_for?.[0]?.overview || "No overview available"}
          vote_average={item.known_for?.[0]?.vote_average || "N/A"}
          href={`person/${item.id}`}
        />
      ))}
    </div>
  );
}
