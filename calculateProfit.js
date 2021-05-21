const saleValueProduct = 2500;
const costProduct = 800;
const tax = costProduct / 5;
const productsSold = 1000;

const costWithTaxes = costProduct + tax;
const singleProductProfit = saleValueProduct - costWithTaxes;
const totalProfit = saleValueProduct * productsSold;

if (saleValueProduct < 0 || costProduct < 0) {
  console.log("Error");
} else {
  console.log('Profit is: ' + totalProfit)
}

