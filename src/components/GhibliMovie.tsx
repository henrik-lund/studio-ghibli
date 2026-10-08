import { useEffect, useState } from "react"
import { type ApiState, type FavoriteMovie, type Movie } from "../Types/movieTypes.ts"
import GhibliMoviesView from "./GhibliView.tsx"
import { getApiData } from "../API/ghibliApi.ts"

type Props ={
	favorites: FavoriteMovie[]
	onToggleFavorite: (moive: Movie) => void
	search: string
}
const GhibliMovies = ({favorites, onToggleFavorite, search}: Props) => {
	const [apiState, setApiState] = useState<ApiState>({ status: 'idle' })

	useEffect(() => {
		getApiData(setApiState)
	}, [])

	const filteredMovies: Movie[] = apiState.status === "success" ?
		apiState.data.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())) : []

	return (
		<section className="ghibli">
			<div className="content">
				{apiState.status === "success" && (
					<GhibliMoviesView data={filteredMovies}
					favorites={favorites}
					onToggleFavorite={onToggleFavorite} />
				)}
			</div>
		</section>
	)
}

export default GhibliMovies