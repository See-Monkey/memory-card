import "../styles/DisplayCards.css";

export default function DisplayCards({
	pokemonArray,
	selected,
	setSelected,
	score,
	setScore,
	maxScore,
	setMaxScore,
	setGameOver,
}) {
	function handleClick(id) {
		//
	}

	return (
		<section className="pokemonCards">
			{pokemonArray.map((pokemon) => (
				<button
					key={pokemon.id}
					className="pokemonCard"
					type="button"
					onClick={handleClick(pokemon.id)}
				>
					<img src={pokemon.sprite} alt={pokemon.name} />
					<h4>{pokemon.name.toUpperCase()}</h4>
				</button>
			))}
		</section>
	);
}
