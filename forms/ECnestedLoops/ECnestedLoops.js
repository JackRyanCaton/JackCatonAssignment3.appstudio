let numCols = parseInt(prompt("how many columns do you want (between 1 and 10, inclusive)"))
let numRows = parseInt(prompt("how many rows do you want (between 1 and 10, inclusive)"))

console.log(numCols)
console.log(numRows)

for (i = 0; i < numRows; i++) {
 for (j = 0; j < numCols; j++) {
    document.write("*")
    }
    document.write("<br />")
  }
  