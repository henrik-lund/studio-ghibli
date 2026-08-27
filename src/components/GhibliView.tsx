import { type Movie, type FavoriteMovie } from "../Types/movieTypes";
import MovieCard from "./MovieCard";

type Props = {
	data: Movie[]
	favorites: FavoriteMovie[]
	onToggleFavorite: (movie: Movie) => void 
}

const GhibliView = ({ data, favorites, onToggleFavorite }: Props) => {
	return (
		<div className="movie-list">
			{data.map(m => (
				<MovieCard key={m.id}
				movie={m}
				isFavorite={favorites.some(f => f.id === m.id)}
				onToggleFavorite={onToggleFavorite} />
			))}
		</div>
	)
}

export default GhibliView
