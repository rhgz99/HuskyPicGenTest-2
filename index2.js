const dateEl = document.getElementById("date");
const submitBtn = document.getElementById("submit-btn");
const containerEl = document.querySelector(".container");
const resultEl = document.getElementById("result")

submitBtn.addEventListener("click", calculateDate);


function calculateDate(){
    
    const dateValue = dateEl.value;
    
    if(dateValue === ""){
        alert("Please enter your birthday")
    } else{
        let actualAge = getAge(dateValue)
        resultEl.innerText = `Your age is ${actualAge} ${actualAge > 1 ? "years" : "year"} old`; 
    }
 
    
}

function getAge(dateValue){
    const now = new Date();
    const date = new Date(dateValue);

    let = actualAge = now.getFullYear() - date.getFullYear();
    const month = now.getMonth() - date.getMonth();

    if(month<0 || month === 0 && now.getDate() < date.getDate()){
        actualAge--;
    }

    return actualAge;
    
}