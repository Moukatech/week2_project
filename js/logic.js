const maleNames =["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"]

function century(CC){
    return ((CC / 4) - 2* CC-1);
}

function year(YY){
    return (5*YY/4);
}

function month (MM){
    return (26*(MM+1)/10);
}
var enterCentury  = Number(prompt("Which centruy were you born"))
var enterYear  = Number(prompt("Which Year were you born"))
var enterMonth  = Number(prompt("Which Month were you born"))
var enterDate  = Number(prompt("Which Date were you born"))
var gender = prompt("What is your gender?")

const birthCentury = century(enterCentury)
const birthYear = year(enterYear)
const birthMonth = month(enterMonth)

var calculationResults = (birthCentury + birthYear + birthMonth + enterDate) % 7
const wholeNumber = calculationResults.toFixed(0);
alert(wholeNumber)
let result;
if (gender == "male"){
    result = maleNames[wholeNumber]
}else if (gender == "female"){
    result = femaleNames[wholeNumber]
}else{
    alert("Enter Correct genter")
}
alert(result)