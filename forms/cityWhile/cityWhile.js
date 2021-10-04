let cities = []
let lastCity = false
// let userAnswer = ""

while (lastCity == false) {
  userAnswer = prompt("Enter another city or say No")
  if (userAnswer == "No")
    lastCity = true
  else
    cities.push(userAnswer)
  }
  
let i = 0

while (i < cities.length) {
  console.log(cities[i].toLowerCase())
  i++; }