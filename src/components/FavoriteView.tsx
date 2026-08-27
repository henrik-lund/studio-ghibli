import { type FavoriteMovie } from "../Types/movieTypes"

type Props = {
	favorites: FavoriteMovie[]
	onToggleFavorite: (movie: FavoriteMovie) => void
	onToggleSeen: (id: string) => void
	onMove: (id: string, direction: "up" | "down") => void
}

const FavoritesView = ({ favorites, onToggleFavorite, onToggleSeen, onMove }: Props) => {
	if (favorites.length === 0) {
		return (
			<div className="empty-favorites">
				<svg width="120" height="120" viewBox="0 0 120 120" className="empty-illustration">
					<text x="80" y="26" fontFamily="'Baloo 2', sans-serif" fontWeight="700" fontSize="20" fill="oklch(70% 0.09 145)">Z</text>
					<text x="90" y="16" fontFamily="'Baloo 2', sans-serif" fontWeight="700" fontSize="14" fill="oklch(70% 0.09 145)" opacity="0.7">z</text>
					<text x="96" y="8" fontFamily="'Baloo 2', sans-serif" fontWeight="700" fontSize="10" fill="oklch(70% 0.09 145)" opacity="0.5">z</text>

					<circle cx="30" cy="45" r="12" fill="oklch(78% 0.08 145)" />
					<circle cx="78" cy="45" r="12" fill="oklch(78% 0.08 145)" />
					<ellipse cx="55" cy="75" rx="38" ry="32" fill="oklch(78% 0.08 145)" />
					<ellipse cx="55" cy="85" rx="22" ry="18" fill="oklch(90% 0.03 90)" />

					<path d="M40 68 Q45 64 50 68" stroke="oklch(30% 0.03 150)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
					<path d="M62 68 Q67 64 72 68" stroke="oklch(30% 0.03 150)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
					<ellipse cx="55" cy="76" rx="3" ry="2" fill="oklch(30% 0.03 150)" />
				</svg>
				<p>Din favoritlista tar en tupplur, precis som Totoro en lat eftermiddag. Väck den med ett klick på hjärtat! 💤</p>
			</div>
		)
	}

	return (
		<div className="favorites-list">
			{favorites.map((movie, index) => (
				<div key={movie.id} className={`favorite-row ${movie.seen ? "seen" : ""}`}>
					<img src={movie.image} alt={movie.title} />
					<div className="favorite-info">
						<h3>{movie.title}</h3>
						<span className="year-pill">{movie.release_date}</span>
					</div>
					<div className="favorite-actions">
						<button onClick={() => onMove(movie.id, "up")} disabled={index === 0} aria-label="Flytta upp">↑</button>
						<button onClick={() => onMove(movie.id, "down")} disabled={index === favorites.length - 1} aria-label="Flytta ner">↓</button>
						<label className="seen-toggle">
							<input type="checkbox" checked={movie.seen} onChange={() => onToggleSeen(movie.id)} />
							Sett
						</label>
						<button onClick={() => onToggleFavorite(movie)} aria-label="Ta bort favorit">✕</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default FavoritesView