import { useState, useEffect } from "react"
import { type ApiState, type Movie } from "../Types/movieTypes.ts"
import GhibliMoviesView from "./GhibliView.tsx"
import { getApiData } from "../API/ghibliApi.ts"

const GhibliMovies = () => {
	const [apiState, setApiState] = useState<ApiState>({ status: 'idle' })

	useEffect(() => {
		getApiData(setApiState)
	}, [])

	return (
		<section className="ghibli">
			<h2>Ghibli-Arkivet</h2>
			{apiState.status === "success" && (
				<GhibliMoviesView data={apiState.data} />
			)}
		</section>
	)
}

export default GhibliMovies