'use strict'
const formPalce= document.querySelector(".formPalce");
const textName= document.querySelector(".textName");
const nexStep= document.querySelector(".nexStep");
const monthlyplan= document.querySelector(".monthlyplan");
const message=document.querySelector(".message")
const message2=document.querySelector(".message2");
const message3=document.querySelector(".message3")
const mail= document.querySelector(".mail");
const number=document.querySelector(".number");
// const first= document.getElementById("first");
// const second= document.getElementById("second");



if(nexStep.classList.contains("firstt")){
    nexStep.addEventListener("click",function(e){
e.preventDefault()
        const input= textName.value.trim();
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mailInput= mail.value.trim();
        const numberInput= number.value.trim()
        const phonePattern = /^\+\d+/;
if(input === ""){
message.textContent="This field is required";
message.style.color="red";
message.style.fontSize="13px"
return;
}else if(input.charAt(0) !== input.charAt(0).toUpperCase()){
    message.textContent="Start with UpperCase";
    message.style.paddingBottom="15px";
    message.style.color="red";
    message.style.fontSize="13px";
    return
}

if(mailInput === ""){
 message2.textContent="This field is required";
message2.style.paddingBottom="0px";
message2.style.color="red";
message2.style.fontSize="13px"
return;
}else if(!emailRegEx.test(mailInput)){
    message2.textContent="Include @ char";
    message2.style.paddingBottom="0px";
    message2.style.color="red";
    message2.style.fontSize="13px"
    return;
}


if(numberInput === ""){
    message.textContent="This field is required";
message3.style.paddingBottom="0px";
message3.style.color="red";
message3.style.fontSize="13px";
return; 
}else if(isNaN(Number(numberInput))){
    message3.textContent="Invalid Input";
    message3.style.paddingBottom="0px";
    message3.style.color="red";
    message3.style.fontSize="13px";
    return; 
}else if(!phonePattern.test(numberInput)){
    message3.textContent="Input must start with + char";
    message3.style.paddingBottom="0px";
    message3.style.color="red";
    message3.style.fontSize="13px";
    return; 
}


        const realNumber= document.querySelectorAll(".realNumber");

if(monthlyplan.classList.contains("hiddens")){
    monthlyplan.classList.remove("hiddens");
    formPalce.classList.add("hidden");    
}


realNumber.forEach(button=> {
    if(button.classList.contains("first")){
        button.classList.remove("first");
    }
     if(button.classList.contains("second")){
            button.classList.add("color")
        }  
})



    })
}
    

