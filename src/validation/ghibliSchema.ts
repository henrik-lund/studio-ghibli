import * as z from 'zod'

const MovieSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	director: z.string(),
	release_date: z.string(),
	rt_score: z.string(),
	image: z.string()
})

export type Movie = z.infer<typeof MovieSchema>

export const MovieListSchema = z.array(MovieSchema)