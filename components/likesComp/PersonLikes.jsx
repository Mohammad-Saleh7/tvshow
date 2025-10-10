import { useSelector } from "react-redux";
import PersonCard from "../PersonCards";

export default function PersonLikes() {
  const personLikes = useSelector((state) =>
    state.cards.filter((item) => item.type === "person")
  );

  return (
    <div>
      {personLikes.map((person) => (
        <PersonCard
          id={person.id}
          key={person.id}
          profile_path={person.profile_path}
          name={person.name}
          overview={person.overview}
          vote_average={person.vote_average}
          href={`/person/${person.id}`}
        />
      ))}
    </div>
  );
}
