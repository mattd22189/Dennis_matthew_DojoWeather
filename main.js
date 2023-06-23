
/* I want the selection to store its value to the temperature variable 
and if the value of the selection is equal to the value of the variable 
I want the document to access all the numbers associated with the celsius
selection and convert them to Fahrenheit. using the proper equation */

let temperature1 = document.getElementById("temp").value

function converter(){
            if (temperature1 == "C"){
        (document.querySelector(" .today1").innerText) = Math.round( (((document.querySelector(" .today1 ").innerText) * 1) - 32) * 5/9)
    } else if (temperature1 == "F") { 
        (document.querySelector(" .today1 ").innerText) = Math.round(( ((document.querySelector(" .today1").innerText) * 1) * 5/9) + 32)
    }
}

converter()

console.log(typeof converter())

function accept(){
    document.querySelector("#popUp1").remove();
}

/* let temper = (document.getElementsByClassName(".red, .blue").innerText);
console.log(temper); 

num = (document.querySelector(".today1 ").innerText) * 1
console.log(num) 


*/ //