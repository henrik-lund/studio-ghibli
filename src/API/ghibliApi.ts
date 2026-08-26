import { isMovie, type ApiState, type Movie } from "../Types/movieTypes";

type ReactSet = (s: ApiState) => void

async function getApiData (setApiState: ReactSet): Promise<void> {

	const baseUrl = 'https://ghibliapi.vercel.app'
	const url =  `${baseUrl}/films`

	try {
		setApiState({status:"loading"})
		const response = await fetch (url)
		if (response.ok) {
			const data: unknown = await response.json()

			if (typeof data !== 'object' || data === null || !(data instanceof Array))
				throw new Error ('Datan är inte en lista.')

			if (!data.every(item => isMovie(item)))
				throw new Error ('Datan är en lista, men alla objekt är inte en Movie-objekt.')

			const parsedData: Movie[] = data

			setApiState({status: "success", data: parsedData})
		}
		else {
			setApiState({ status: "error", message: "Fel från API. Statuskod: " +response.status})
		}
	}
	catch(error) {
		const message: string = (error instanceof Error) ? error.message : 'okänt fel.'
		setApiState({ status: "error", message: "Fel vid hämtning av data: " + message})
	}
}

export { getApiData }