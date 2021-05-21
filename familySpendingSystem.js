let family = {
  incomes: [3000, 25],
  expenses: [2000, 250]
}

function sumBalance(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calculateSpending(family) {
  const calculatedIncomes = sumBalance(family.incomes)
  const calculatedExpenses = sumBalance(family.expenses)

  const total = calculatedIncomes - calculatedExpenses
  console.log('Your balance is: ' + '$ ' + total)

  if (total < 0) return "Balance Negative"

  return "Balance Positive"
}

console.log(calculateSpending(family))



