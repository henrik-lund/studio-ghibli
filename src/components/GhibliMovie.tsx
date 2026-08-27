import { useEffect, useState } from "react"
import { type ApiState, type FavoriteMovie, type Movie } from "../Types/movieTypes.ts"
import GhibliMoviesView from "./GhibliView.tsx"
import { getApiData } from "../API/ghibliApi.ts"

type Props ={
	favorites: FavoriteMovie[]
	onToggleFavorite: (moive: Movie) => void
}
const GhibliMovies = ({favorites, onToggleFavorite}: Props) => {
	const [apiState, setApiState] = useState<ApiState>({ status: 'idle' })

	useEffect(() => {
		getApiData(setApiState)
	}, [])

	return (
		<section className="ghibli">
			<div className="content">
				{apiState.status === "success" && (
					<GhibliMoviesView data={apiState.data}
					favorites={favorites}
					onToggleFavorite={onToggleFavorite} />
				)}
			</div>
		</section>
	)
}

export default GhibliMovies