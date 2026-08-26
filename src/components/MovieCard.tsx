import { useState } from "react"
import { type Movie } from "../Types/movieTypes";

type Props = {
	movie: Movie
}

const MovieCard = ({ movie }: Props) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<div className="movie" onClick={() => setExpanded(!expanded)}>
			<img src={movie.image} alt={movie.title} />
			<h3>{movie.title}</h3>
			<p className={expanded ? "" : "description-clamped"}>
				{movie.description}
			</p>
			<p>{movie.director}</p>
			<p>{movie.release_date}</p>
			<p>⭐{movie.rt_score}</p>
		</div>
	)
}

export default MovieCard