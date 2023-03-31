function contaVogais(frase){
  const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  fraseSplit = frase.split('')
  let qtdVogais = 0
  fraseSplit.forEach((letra) => {
    if(vogais.includes(letra)){
      qtdVogais++
    }
  })
  return qtdVogais
}

console.log(contaVogais("Amo voce"))