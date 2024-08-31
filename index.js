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
const realNumber= document.querySelectorAll(".realNumber");
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
    

const goBack= document.querySelector(".bacc");
// console.log(goBack)
goBack.addEventListener("click", function(e){
    e.preventDefault()

    monthlyplan.classList.add("hiddens");
    formPalce.classList.remove("hidden");   

    realNumber.forEach(button=> {
         if(button.classList.contains("second")){
                button.classList.remove("color")
            }  
            if(button.classList.contains("return")){
                button.classList.add("first");
            }

    })

})


const firstB= document.querySelector(".firstB");
const secondB= document.querySelector(".secondB");
const thirdB= document.querySelector(".thirdB");
const arcadeMon= document.querySelector(".arcadeMon")


const online= document.querySelector(".online");
const large= document.querySelector(".large");
const profile= document.querySelector(".profile");
 const hFive= document.querySelector("hFive");
 const pmancost= document.querySelector(".pmancost");

 const hFive2= document.querySelector("hFive2");
 const pmancost2= document.querySelector(".pmancost2");

 const hFive3= document.querySelector("hFive3");
 const pmancost3= document.querySelector(".pmancost3");



 const cons= document.querySelector(".cons");
 const amo= document.querySelector(".amo")
 const cons2= document.querySelector(".cons2");
 const amo2= document.querySelector(".amo2")


 const mainName= document.querySelector(".firstB h4");
const mainPara= document.querySelector(".firstB p");

const receiveName= arcadeMon.querySelector("h5");
const amounts= document.querySelector(".amounts");
  const finfirstCont1= document.querySelector(".finfirstCont1")  


  const secondH= document.querySelector(".secondBh4");
  const secondP= document.querySelector(".secondB p");

  
  const thirdH= document.querySelector(".thirdBh4");
  const thirdP =document.querySelector(".thirdB p");
  
function Monthly(){
if(online.checked){
cons.textContent= hFive.textContent;
amo.textContent= pmancost.textContent;
}


if(large.checked){
    cons2.textContent= hFive2.textContent;
    amo2.textContent= pmancost2.textContent;
}

if(profile.checked){
    const divCreation= document.createElement("div");
    divCreation.className="firstContents cons3";
    let pentacoast= document.createElement("p");
    pentacoast.textContent=hFive3.textContent;

    divCreation.appendChild(pentacoast);

    let divCreation2= document.createElement("div");
    divCreation2.className="amount amo3";
    
    let pentacoast2= document.createElement("p");
    pentacoast2.textContent=pmancost3.textContent
    divCreation2.appendChild(pentacoast2);
    finfirstCont1.appendChild(divCreation)
    finfirstCont1.appendChild(divCreation2)
}
}



    Monthly()

    firstB.addEventListener("click",function(e){
        e.preventDefault();
        receiveName.textContent=mainName.textContent;
            amounts.textContent=mainPara.textContent;
            })
        
            secondB.addEventListener("click",function(e){
                e.preventDefault()
                receiveName.textContent= secondH.textContent;
        amounts.textContent= secondP.textContent;
            })
        
            thirdB.addEventListener("click",function(e){
                e.preventDefault();
                receiveName.textContent= thirdH.textContent;
                amounts.textContent= thirdP.textContent;
            })

 
    
    
    
    
   
const nexx=document.querySelector(".nexx");
const holl= document.querySelector(".holl");
const fish= document.querySelector(".fish")
nexx.addEventListener("click",function(e){
e.preventDefault();
monthlyplan.classList.add("hiddens");
holl.classList.remove("hiddenes");


realNumber.forEach(button=> {
    console.log(button)
    if(button.classList.contains("third")){
        button.classList.add("first");
    }
     if(button.classList.contains("second")){
            button.classList.remove("color")
        }  
})
})

const bacck= document.querySelector(".bacck");

bacck.addEventListener("click",function(e){
    monthlyplan.classList.remove("hiddens");
holl.classList.add("hiddenes");


realNumber.forEach(button=> {
    console.log(button)
    if(button.classList.contains("third")){
        button.classList.remove("first");
    }
     if(button.classList.contains("second")){
            button.classList.add("color")
        }  
})
})






const net= document.querySelector(".net")


net.addEventListener("click",function(e){
    e.preventDefault();
    fish.classList.remove("finishHide");
    holl.classList.add("hiddenes");
    
    
    realNumber.forEach(button=> {
        console.log(button)
        if(button.classList.contains("fouth")){
            button.classList.add("first");
        }
        
         if(button.classList.contains("third")){
                button.classList.remove("first")
            }  
    })
    })
    
   const bark= document.querySelector(".bark");

   bark.addEventListener("click",function(e){
  
e.preventDefault();
fish.classList.add("finishHide");
    holl.classList.remove("hiddenes");

realNumber.forEach(button=> {
    console.log(button)
    if(button.classList.contains("fouth")){
        button.classList.remove("first");
    }
     if(button.classList.contains("third")){
            button.classList.add("color")
        }  
})
})
