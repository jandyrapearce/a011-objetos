const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
//a)
console.log(`Primeiro ator do elenco: ${filme.elenco[0]}`)

//b)
console.log(`Ultimo ator do elenco: ${filme.elenco[3]}`)

//c)
const transmissoes = filme.transmissoesHoje
console.log(transmissoes)

//d) horário de transmissão do filme no Canal Brasil
const canal = filme.transmissoesHoje[1].horario

console.log(`horário de transmissão do filme no Canal Brasil: ${canal}`)