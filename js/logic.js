const maleNames =["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"]

function user_Action(){
    document.user_form.action = "index.html";
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
		if(user_form.user_DOB.value != '') {
			if(regs = user_form.user_DOB.value.match(re)) {
				// day value between 1 and 31
				if(regs[1] < 1 || regs[1] > 31) {
					alert("Please enter a valid day: " + regs[1]);
					user_form.user_DOB.focus();
					return false;
				}
				// month value between 1 and 12
				if(regs[2] < 1 || regs[2] > 12) {
					alert("Please enter a valid month: " + regs[2]);
					form.dob.focus();
					return false;
				}
				// year value between 1902 and 2021
				if(regs[3] > (new Date()).getFullYear()) {
					alert("Invalid value for year, please enter a valid year: " + regs[3] + " - must be less than or equal to  " + (new Date()).getFullYear());
					form.dob.focus();
					return false;
				}
			} else {
				alert("Invalid date format use dd/mm/yyyy: " + form.dob.value);
				form.dob.focus();
				return false;
			}

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
}
