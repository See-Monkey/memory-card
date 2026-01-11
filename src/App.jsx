import { useState } from "react";

import getPokemon from "./functions/getPokemon.js";

export default function App() {
	const data = getPokemon(2);
	console.log(data);
}
