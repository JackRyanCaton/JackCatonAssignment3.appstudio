function Compare (password1, password2) {
  pass = password1
  confPass = password2
  if (pass == confPass) {
    console.log("The passwords are the same.") }
  else {
    console.log("The passwords are not the same") }
  }
  
let password = prompt("Enter your password.")
let confirmPassword = prompt("Enter your password.")
let passCompare = Compare(password, confirmPassword)