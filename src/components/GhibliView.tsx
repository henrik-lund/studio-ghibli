import { type Movie } from "../Types/movieTypes";
import MovieCard from "./MovieCard";

type Props = {
	data: Movie[]
}

const GhibliView = ({ data }: Props) => {
	return (
		<div className="movie-list">
			{data.map(m => (
				<MovieCard key={m.id} movie={m} />
			))}
		</div>
	)
}

export default GhibliView
