fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/pikachu")
.then((res) => res.json())
.then((data) => console.log(data))