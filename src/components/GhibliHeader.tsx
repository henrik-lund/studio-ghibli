			
			type Props ={
				search: string
				onSearchChange: (value: string) => void
			}
			const Hero = ({search, onSearchChange}: Props) => {
				return (
					<div className="hero">
						<span className="eyebrow">✦ Studio Ghibli-arkivet</span>
						<h1>Ghibli-filmer</h1>
						<p className="subtitle">
							En samling stillsamma, magiska filmvärldar — hämtade direkt från Studio Ghibli.
						</p>
						<div className="search-bar">
							<input type="text" 
							placeholder="🔍 Sök efter en film..."
							value={search}
							onChange={(e) => onSearchChange(e.target.value)} />
						</div>
					</div>
				)
			}

			export default Hero