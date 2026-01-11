import { useState, useEffect } from "react";

import getPokemon from "./functions/getPokemon.js";

export default function App() {
	const [loading, setLoading] = useState(true);
	const [pokemonArray, setPokemon] = useState([]);
	const [selected, setSelected] = useState([]);
	const [score, setScore] = useState(0);
	const [maxScore, setMaxScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [gamesPlayed, setGamesPlayed] = useState(0);

	useEffect(() => {
		async function newGame() {
			setSelected([]);
			setScore(0);
			setGameOver(false);

			const data = await getPokemon(10);
			setPokemon(data);
			setLoading(false);
		}
		newGame();
	}, [gamesPlayed]);

	return (
		<>
			<Header
				loading={loading}
				score={score}
				maxScore={maxScore}
				gameOver={gameOver}
			/>
			<main>
				{loading && <Loading />}
				{!loading && !gameOver && (
					<DisplayCards
						pokemonArray={pokemonArray}
						selected={selected}
						setSelected={setSelected}
						score={score}
						setScore={setScore}
						maxScore={maxScore}
						setMaxScore={setMaxScore}
						setGameOver={setGameOver}
					/>
				)}
				{!loading && gameOver && (
					<GameOver
						score={score}
						maxScore={maxScore}
						setGameOver={setGameOver}
						setGamesPlayed={setGamesPlayed}
					/>
				)}
			</main>
		</>
	);
}
