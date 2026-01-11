const url = "https://pokeapi.co/api/v2/pokemon/";
const spriteUrl =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const fetchData = async function (id) {
	const response = await fetch(url + id);
	if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
	return response.json();
};

const returnData = async function (length) {
	const idSet = new Set();
	const pokemonArray = [];

	while (pokemonArray.length < length) {
		const id = Math.floor(Math.random() * 151) + 1;

		if (idSet.has(id)) continue;
		idSet.add(id);

		try {
			const data = await fetchData(id);

			const newPokemon = {
				id: id,
				name: data.name,
				sprite: `${spriteUrl}${id}.png`,
			};
			pokemonArray.push(newPokemon);
		} catch (err) {
			console.error(err);
		}
	}

	return pokemonArray;
};

export default returnData;
