import "../styles/Header.css";

export default function Header({ loading, score, maxScore, gameOver }) {
	return (
		<header>
			<h1>Pokemon Memory Card Game</h1>
			<div id="scoreContainer" className={gameOver ? "hidden" : "visible"}>
				<h2>Score: {loading ? "" : score}</h2>
				<h2>Max Score: {loading ? "" : maxScore}</h2>
			</div>
		</header>
	);
}
