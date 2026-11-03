const pokemon = [
    { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
    { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
    { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
    { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
];

document.getElementById("maxHP").innerHTML = pokemon.reduce((sum, item) => sum + item.maxHp, 0);
document.getElementById("avgATK").innerHTML = pokemon.reduce((sum, item) => sum + item.attack, 0)/ pokemon.length;

function filterPokemon(fil){
    if(fil.type == "fire"){
        pokemon.forEach(item => {
            document.getElementById("pokeList").appendChild(item)
        })
        return pokemon.map(itm => itm.name);
    }else if(fil.type == "water"){
        return pokemon.map(itm => itm.name);
    }else if(fil.type == "electric"){
        return pokemon.map(itm => itm.name);
    }else if(fil.type == "grass"){
        return pokemon.map(itm => itm.name);
    }

}

document.getElementById("pokeSelect").addEventListener("change", (event) => {
    console.log(event.target.value);
    filterPokemon(event.target.value);
})


function renderPoke(pokemon) {
    document.getElementById("pokemons").innerHTML = "";
    pokemon.forEach((item) => {
        document.getElementById("pokeList").appendChild(item)
    })
}

