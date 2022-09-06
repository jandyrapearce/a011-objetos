//Exercicio 3 
//a)Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {
    ...pokemon1, 
    nome: "Squirtle", 
    tipo: "Agua"}

console.log(pokemon1)
console.log(pokemon2)

//b)

pokemon1.ataques = []

pokemon1.ataques.push({nome: "Investida", dano: 40, tipo: "Normal", precisao: 100})

console.log(pokemon1)

//c)

pokemon2.ataques =[...pokemon1.ataques]

console.log(pokemon2)

//d)

pokemon1.ataques.push({nome: "Folha Navalha", dano: 45, tipo: "Grama", precisao: 100})

//e)

pokemon2.ataques.push({nome: "Jato de Agua", dano: 45, tipo: "Agua", precisao: 100})

//f)

console.log(" ")
console.log("Pokemed 1: ", pokemon1)
console.log("Pokemed 2: ", pokemon2)