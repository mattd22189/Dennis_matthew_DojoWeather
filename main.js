
/* I want the selection to store its value to the temperature variable 
and if the value of the selection is equal to the value of the variable 
I want the document to access all the numbers associated with the celsius
selection and convert them to Fahrenheit. using the proper equation */


function converter(){
    let temperature1 = document.getElementById("temp").value
    console.log(temperature1);
            if (temperature1 == "C"){
        console.log("converting to celsius")
        document.querySelector(".today1").innerText = Math.round( (((document.querySelector(".today1").innerText) * 1) - 32) * 5/9)
        document.querySelector(".today2").innerText = Math.round((((document.querySelector(".today2").innerText) * 1) - 32) * 5/9)       
        document.querySelector(".tomorrow1").innerText = Math.round((((document.querySelector(".tomorrow1").innerText) * 1) - 32) * 5/9)
        document.querySelector(".tomorrow2").innerText = Math.round( (((document.querySelector(".tomorrow2").innerText) * 1) - 32) * 5/9)
        document.querySelector(".friday1").innerText = Math.round( (((document.querySelector(".friday1").innerText) * 1) - 32) * 5/9)
        document.querySelector(".friday2").innerText = Math.round((((document.querySelector(".friday2").innerText) * 1) - 32) * 5/9)
        document.querySelector(".saturday1").innerText = Math.round((((document.querySelector(".saturday1").innerText) * 1) - 32) * 5/9)
        document.querySelector(".saturday2").innerText = Math.round((((document.querySelector(".saturday2").innerText) * 1) - 32) * 5/9)
    } else { 
       console.log("converting to f")
        document.querySelector(" .today1 ").innerText = Math.round(( ((document.querySelector(" .today1").innerText) * 1) * 9/5) + 32)
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