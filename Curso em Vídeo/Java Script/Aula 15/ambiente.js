let num = [5,8,2,9,3]

num.push(1)                                             // Adiciona um item na ultima posição.
num.sort()                                              // Coloca em ordem A -> Z.
console.log(num)                                        // Exibi o vetor.
console.log(`O valor tem ${num.length} posições`)       // Quantidade de posições. 
console.log(`O primeiro valor do vetor é ${num[0]}`)    // Exibi o valor do vetor de acordo com a posição [].

let pos = num.indexOf(8)                                // Busca a posição do valor se existir.
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos}`)
}