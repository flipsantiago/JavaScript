
function convertSchoolGradesToLetter(numericGrade) {
  if (numericGrade >= 90) {
    return "A";
  }
  else if (numericGrade < 90 && numericGrade > 79) {
    return "B";
  }
  else if (numericGrade < 80 && numericGrade > 69) {
    return "C";
  }
  else if (numericGrade < 70 && numericGrade > 59) {
    return "D"
  }
  else {
    return "F"
  }
}

console.log(convertSchoolGradesToLetter(82))

