let cities = []
let lastCity = false
<<<<<<< HEAD

=======
>>>>>>> 4b56826592d044c8a117bc085788cc3c63ea890b
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