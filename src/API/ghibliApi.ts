import { type ApiState, type Movie } from "../Types/movieTypes";
import { MovieListSchema } from "../validation/ghibliSchema";

type ReactSet = (s: ApiState) => void

async function getApiData (setApiState: ReactSet): Promise<void> {

	const baseUrl = 'https://ghibliapi.vercel.app'
	const url =  `${baseUrl}/films`

	try {
		setApiState({status:"loading"})
		const response = await fetch (url)
		if (response.ok) {
			const data: unknown = await response.json()

			const parsedData: Movie[] = MovieListSchema.parse(data)
			parsedData.sort((a ,b) => Number(b.release_date) - Number(a.release_date))
			setApiState({ status: "success", data: parsedData})
		}
		else{
			setApiState({status: "error", message: "Fel från API. Statuskod: " +response.status})
		}
	}
	catch(error) {
		const message: string = (error instanceof Error) ? error.message : 'okänt fel.'
		setApiState({ status: "error", message: "Fel vid hämtning av data: " + message})
	}
}

export { getApiData }