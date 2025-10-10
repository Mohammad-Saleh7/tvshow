import { useSelector } from "react-redux";
import FilmsCard from "../FilmCards";

export default function FilmLikes() {
  const likedFilms = useSelector((state) =>
    state.cards.filter((item) => item.type === "film")
  );

  return (
    <div>
      {likedFilms.map((films) => (
        <FilmsCard
          id={films.id}
          key={films.id}
          original_title={films.original_title}
          poster_path={films.poster_path}
          overview={films.overview}
          vote_average={films.vote_average}
          href={`/films/${films.id}`}
        />
      ))}
    </div>
  );
}
