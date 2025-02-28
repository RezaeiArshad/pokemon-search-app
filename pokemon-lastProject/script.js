const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokName = document.getElementById("pokemon-name");
const pokId = document.getElementById("pokemon-id");
const weightTd = document.getElementById("weight");
const heightTd = document.getElementById("height");
const typesTd = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const image = document.getElementById("sprite");
let firstRound = true;

const fetchData = async (name) => {
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`);
        const data = await res.json();
        setOutputs(data);
        console.log(data)
    } catch (err) {
       alert("Pokémon not found")
    }
}

const setOutputs = ({height, id, name, sprites, stats, weight, types}) => {
    pokName.innerText = name.toUpperCase();
    pokId.innerText = "#" + id;
    weightTd.innerText = weight;
    heightTd.innerText = height;
    types.forEach((el) => typesTd.innerHTML += `<p>${el.type.name}</p>`)
    hp.innerText = stats[0].base_stat;
    attack.innerText = stats[1].base_stat;
    defense.innerText = stats[2].base_stat;
    specialAttack.innerText = stats[3].base_stat;
    specialDefense.innerText = stats[4].base_stat;
    speed.innerText = stats[5].base_stat;
    image.src = sprites.front_default;
    image.alt = `a front picture of ${name}`
}

const cleanInput = () => {
   pokName.innerText = "";
   pokId.innerText = "";
   weightTd.innerText = "";
   heightTd.innerText = "";
   typesTd.innerHTML = "";
   hp.innerText = "";
   attack.innerText = "";
   defense.innerText = "";
   specialAttack.innerText = "";
   specialDefense.innerText = "";
   speed.innerText = "";
   image.src = "";
   image.alt = "";
}

const checkInput = () => {
    const preped = input.value.replace(/[^a-z0-9]/ig, "").toLowerCase();
    if (!firstRound) {
        cleanInput();
    }
      firstRound = false;
    fetchData(preped);
}

searchBtn.addEventListener("click", checkInput)