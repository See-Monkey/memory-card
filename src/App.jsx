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
		async function getData() {
			const data = await getPokemon(10);
			setPokemon(data);
			setLoading(false);
		}
		getData();
	}, [gamesPlayed]);
}
