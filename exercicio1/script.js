const sacolao = []

//criando 3 objetos

const frutasSacolao1 =  {
    nomeProduto: "banana", 
    preco: 10, 
    disponibilidade: true
}

const FrutasSacolao2 = {
    nomeProduto: "morango", 
    preco: 5, 
    disponibilidade: false
}

const FrutasSacolao3 = {
    nomeProduto: "maracuja", 
    preco: 7, 
    disponibilidade: true
}


//inserindo os 3 objetos ao array PUSH()
sacolao.push(frutasSacolao1, FrutasSacolao2, FrutasSacolao3)
console.log(sacolao)