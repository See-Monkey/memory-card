import "../styles/Header.css";

export default function Header({ loading, score, maxScore, gameOver }) {
	return (
		<header>
			<h1>Pokemon Memory Card Game</h1>
			<div id="scoreContainer" className={!gameOver ? "visible" : "hidden"}>
				<h3>Score: {loading ? "" : score}</h3>
				<h3>High Score: {loading ? "" : maxScore}</h3>
			</div>
			<p
				id="headerMsg"
				className={!loading && !gameOver ? "visible" : "hidden"}
			>
				Try to select all the Pokemon without picking the same one twice
			</p>
		</header>
	);
}
