const numbers = [10, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let array = []

/* 1.	Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; */
function getArrayData(numbers) {
  for (let number of numbers) {
    number = numbers
    return number
  }
}

/* 2.	Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */
function sumArrayData(numbers) {
  for (var index = 0, sum = 0; index < numbers.length; sum += numbers[index++]);
  return sum;
}

/* 3.	Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
•	A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */
function arithmeticAverageArray(numbers) {
  for (var index = 0, sum = 0; index < numbers.length; sum += numbers[index++]);
  average = sum / numbers.length
  return average;
}

/* 4.	Com o mesmo código do exercício anterior, caso o for seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */
function finalValueArray(numbers) {
  for (var index = 0, sum = 0; index < numbers.length; sum += numbers[index++]);
  average = sum / numbers.length
  if (average > 20) {
    return 'Value greater than 20: ' + average;
  } else {
    return 'Value less than 20: '
  }
}

/* 5.	Utilizando for , descubra qual o maior valor contido no array e imprima-o; */
function highestValueArray(numbers) {
  let highest = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    if (highest < numbers[index])
      highest = numbers[index]
  }
  return highest
}

/* 6.	Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
function oddValuesArray(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 != 0) {
      console.log(numbers[index])
    } else {
      console.log("Not value found")
    }
  }
}

/* 7.	Utilizando for , descubra qual o menor valor contido no array e imprima-o; */
function lowerValueArray(numbers) {
  let highest = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    if (highest > numbers[index])
      highest = numbers[index]
  }
  return highest
}

/* 8.	Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */
function createArray(array) {
  let start = 1
  let final = 25
  for (let index = start; index < final + 1; index++)
    array.push(index)
  return array
}


/* 9.	Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */
function divisionPerTwoeachOfTheElementsArray(array) {
  let start = 1
  let final = 25
  for (let index = start; index < final + 1; index++) {
    array.push(index)
  }
  for (let index = 0; index < array.length; index++) {
    console.log(array[index] / 2)
  }
}


console.log(divisionPerTwoeachOfTheElementsArray(numbers))