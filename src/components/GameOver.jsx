import "../styles/GameOver.css";

export default function GameOver({ score, maxScore, setGamesPlayed }) {
	function newGame() {
		setGamesPlayed((prev) => prev + 1);
	}

	return (
		<div className="gameOverContainer">
			<h2>Game Over</h2>
			<p>Final Score: {score}</p>
			<p>
				{score === maxScore
					? "Nice, that is your highest score!"
					: "Your Best Score: " + maxScore}
			</p>
			<button id="newGameBtn" type="button" onClick={newGame}>
				New Game
			</button>
		</div>
	);
}
