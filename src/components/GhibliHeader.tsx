			
			type Props ={
				search: string
				onSearchChange: (value: string) => void
			}
			const Hero = ({search, onSearchChange}: Props) => {
				return (
					<div className="hero">
						<h1>Studio Ghibli Arkivet</h1>
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