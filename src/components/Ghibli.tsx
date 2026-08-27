import { useState } from "react"
import { type FavoriteMovie, type Movie } from "../Types/movieTypes"
import GhibliMovie from "./GhibliMovie"
import FavoriteView from "./FavoriteView"
import Hero from "./GhibliHeader"

function Ghibli() {
	const [favorites, setFavorites] = useState<FavoriteMovie[]>([])
	const [view, setView] = useState<"all" | "favorites">("all")

	function toggleFavorite(movie: Movie): void {
		setFavorites(prev => {
			const exists = prev.some(f => f.id === movie.id)
			if (exists) return prev.filter(f => f.id !== movie.id)
			return [...prev, { ...movie, seen: false }]
		})
	}

	function toggleSeen(id: string): void {
		setFavorites(prev => prev.map(f => f.id === id ? { ...f, seen: !f.seen } : f))
	}

	function moveFavorite(id: string, direction: "up" | "down"): void {
		setFavorites(prev => {
			const index = prev.findIndex(f => f.id === id)
			const targetIndex = direction === "up" ? index - 1 : index + 1
			if (targetIndex < 0 || targetIndex >= prev.length) return prev
			const updated = [...prev]
			;[updated[index], updated[targetIndex]] = [updated[targetIndex], updated[index]]
			return updated
		})
	}

	return (
		<>
			<Hero />
			<nav className="view-toggle">
				<button className={view === "all" ? "active" : ""} onClick={() => setView("all")}>
					Alla filmer
				</button>
				<button className={view === "favorites" ? "active" : ""} onClick={() => setView("favorites")}>
					Favoriter ({favorites.length})
				</button>
			</nav>

			{view === "all" && (
				<GhibliMovie favorites={favorites} onToggleFavorite={toggleFavorite} />
			)}

			{view === "favorites" && (
				<FavoriteView
					favorites={favorites}
					onToggleFavorite={toggleFavorite}
					onToggleSeen={toggleSeen}
					onMove={moveFavorite}
				/>
			)}
		</>
	)
}

export default Ghibli