import "../styles/DisplayCards.css";
import shuffleArray from "../functions/shuffleArray.js";

export default function DisplayCards({
	pokemonArray,
	setPokemon,
	selected,
	setSelected,
	score,
	setScore,
	maxScore,
	setMaxScore,
	setGameOver,
}) {
	function handleClick(id) {
		if (selected.includes(id)) {
			setGameOver(true);
			return;
		}

		const nextScore = score + 1;

		setSelected((prev) => [...prev, id]);
		setScore(nextScore);

		if (nextScore > maxScore) {
			setMaxScore((prev) => Math.max(prev, nextScore));
		}

		if (nextScore === pokemonArray.length) {
			setGameOver(true);
			return;
		}

		setPokemon((prev) => shuffleArray(prev));
	}

	return (
		<section className="pokemonCards">
			{pokemonArray.map((pokemon) => (
				<button
					key={pokemon.id}
					className="pokemonCard"
					type="button"
					onClick={() => handleClick(pokemon.id)}
				>
					<img src={pokemon.sprite} alt={pokemon.name} />
					<h4>{pokemon.name.toUpperCase()}</h4>
				</button>
			))}
		</section>
	);
}
