let salary = 1580
const inssEightPercent = (salary / 100) * 8
const inssNinePercent = (salary / 100) * 9
const inssElevenPercent = (salary / 100) * 11

const incomeTaxSevenPointFivePercent = (salary / 100) * 7.5
const incomeTaxFifteenPercent = (salary / 100) * 15
const incomeTaxTwentyTwoPointFivePercent = (salary / 100) * 22.5


if (salary <= 1556.94) {
  salary = salary - inssEightPercent
  console.log('Liquid receivable: ' + salary)
} else if (salary >= 1556.95 && salary <= 2594.92) {
  salary = salary - inssNinePercent
  console.log('Liquid receivable: ' + salary)
} else if (salary >= 2594.93 && salary <= 5189.82) {
  salary = salary - inssElevenPercent
  console.log('Liquid receivable: ' + salary)
} else {
  salary = salary - 570.88
  console.log('Liquid receivable: ' + salary)
}

// SALARIO DEPOIS DO INSS

if (salary >= 1903.99 && salary <= 2826.65) {
  salary = salary - incomeTaxSevenPointFivePercent
  console.log(salary)
}

/* function percentage(num, per) {
  return (num / 100) * per;
}

console.log(percentage(1500, 8)); */