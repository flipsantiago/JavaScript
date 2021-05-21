
function getChessPieceMovement(name) {
  const lowerCaseName = name.toLocaleLowerCase()
  const diagonals = 'diagonals'

  if (lowerCaseName === 'bishop') {
    return diagonals;
  }
  // ...
}

console.log(getChessPieceMovement('BISHOP'))
