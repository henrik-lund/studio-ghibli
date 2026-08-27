
export type ApiState =
| { status: "idle"}
| { status: "loading"}
| { status: "error", message: string}
| { status: "success", data: Movie []}

export type Movie = {
	id: string;
	title: string;
	description: string;
	director: string; 
	release_date: string;
	rt_score: string;
	image: string;
}

export function isMovie(maybe: unknown): maybe is Movie{
	if( typeof maybe !== 'object' || maybe === null ) return false

	const obj = maybe as Record<string, unknown> 

	return (
		typeof obj.id === 'string' &&
		typeof obj.title === 'string' &&
		typeof obj.description === 'string' &&
		typeof obj.director === 'string' &&
		typeof obj.release_date === 'string' &&
		typeof obj.rt_score === 'string' &&
		typeof obj.image === 'string'
	)
}

export type FavoriteMovie = Movie & {
	seen: boolean
}