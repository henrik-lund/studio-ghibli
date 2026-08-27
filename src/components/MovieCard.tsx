import { useState } from "react"
import { type Movie } from "../Types/movieTypes"

type Props = {
	movie: Movie
	isFavorite: boolean
	onToggleFavorite: (movie: Movie) => void
}

const MovieCard = ({ movie,isFavorite, onToggleFavorite }: Props) => {
	const [expanded, setExpanded] = useState(false)

	return (
				<div className="movie" onClick={() => setExpanded(!expanded)}>
			<div className="image-wrapper">
				<img src={movie.image} alt={movie.title} />
				<button
					className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
					onClick={(e) => {
						e.stopPropagation()
						onToggleFavorite(movie)
					}}
					aria-label={isFavorite ? "Ta bort favorit" : "Lägg till favorit"}
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
						<path d="M12 21s-6.7-4.35-9.3-8.1C.8 9.8 1.8 6 5 5c1.9-.6 3.7.2 5 1.8C11.3 5.2 13.1 4.4 15 5c3.2 1 4.2 4.8 2.3 7.9C18.7 16.65 12 21 12 21z" />
					</svg>
				</button>
			</div>
			<h3>{movie.title}</h3>
			<div className="meta">
				<span className="year-pill">{movie.release_date}</span>
				<span className="rating">
					⭐{movie.rt_score}%
				</span>
			</div>
			<p className={expanded ? "" : "description-clamped"}>
				{movie.description}
			</p>
		</div>
	)
}

export default MovieCard