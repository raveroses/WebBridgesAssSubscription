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

const yeeah= document.querySelector(".plans");


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
    message3.textContent="This field is required";
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
    














const hid= document.querySelector(".hiddens")
const year= document.querySelector(".year")







const toggleOff= document.querySelector(".ToggleOff");
const toggleOn= document.querySelector(".ToggleOn");
const toggleOfff= document.querySelector(".ToggleOfff");
const toggleOnn= document.querySelector(".ToggleOnn");



const goBackk= document.querySelector(".baks");

  
goBackk.addEventListener("click", function(e){
    e.preventDefault()

    yeeah.classList.add("year");
    hid.classList.remove("hiddens");   
})




toggleOn.addEventListener("click",function(){
    toggleOff.style.display="none";
    toggleOn.style.display="block";
  
    hid.classList.remove("hiddens");
    year.classList.add("year");
})





// const formPalce= document.querySelector(".formPalce");
// const textName= document.querySelector(".textName");
// const nexStep= document.querySelector(".nexStep");
// const monthlyplan= document.querySelector(".monthlyplan");
// const message=document.querySelector(".message")
// const message2=document.querySelector(".message2");
// const message3=document.querySelector(".message3")
// const mail= document.querySelector(".mail");
// const number=document.querySelector(".number");
// const realNumber= document.querySelectorAll(".realNumber");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



toggleOfff.addEventListener("click",function(){
    toggleOfff.style.display="block";
    toggleOnn.style.display="none";

    hid.classList.add("hiddens");
    yeeah.classList.remove("year");

})    
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

/////////////////////////////////////////////
const mainName= document.querySelector(".firstB h4");
const mainPara= document.querySelector(".firstB p");
const receiveName= arcadeMon.querySelector("h5");
const amounts= document.querySelector(".amounts h6");
 const secondH= document.querySelector(".secondB h4");
 const secondP= document.querySelector(".secondB p");
 const thirdH= document.querySelector(".thirdB h4");
 const thirdP =document.querySelector(".thirdB p");



 let newArray= [];

console.log(newArray)


firstB.addEventListener("click",function(e){
    e.preventDefault();
    receiveName.textContent=`${mainName.textContent}(Monthly)`;
    const numericValue = Number(mainPara.textContent);
    amounts.textContent = `$${numericValue}`;
    newArray.push(numericValue)
    console.log(typeof numericValue)
        })
    
        secondB.addEventListener("click",function(e){
            e.preventDefault()
            receiveName.textContent= `${secondH.textContent}(Monthly)`;
            const numericValue = Number(secondP.textContent);
            amounts.textContent = `$${numericValue}`;
            newArray.push(numericValue);
            console.log(typeof numericValue)
        })
    
        thirdB.addEventListener("click",function(e){
            e.preventDefault();
            receiveName.textContent= `${thirdH.textContent}(Monthly)`;
            const numericValue = Number(thirdP.textContent);
    amounts.textContent = `$${numericValue}`;
    newArray.push(numericValue);
    console.log(typeof numericValue)
        })

        

/////////////////////////////////////////////////////////



// 170, 174, 178,180


const online= document.querySelector(".online");
const large= document.querySelector(".large");
const profile= document.querySelector(".profile");


 const hFive= document.querySelector(".hFive");
 const pmancost= document.querySelector(".pmancost");

 const hFive2= document.querySelector(".hFive2");
 const pmancost2= document.querySelector(".pmancost2");

 const hFive3= document.querySelector(".hFive3");
 const pmancost3= document.querySelector(".pmancost3");



 const cons= document.querySelector(".cons p");
 const amo= document.querySelector(".amo p")
 const cons2= document.querySelector(".cons2 p");
 const amo2= document.querySelector(".amo2 p")
 const finfirstCont1= document.querySelector(".finfirstCont1")

 function OnlineContent() {
if(online.checked){
cons.textContent= hFive.textContent;
const numericValue = Number(pmancost.textContent);
        amo.textContent = `$${numericValue}`;
        newArray.push(numericValue);
        console.log(typeof numericValue)
        console.log(amo.textContent);
}else{
    cons.textContent="";
    amo.textContent="";
}

 }
 OnlineContent() 

 function LargeContent(){
if(large.checked){
    cons2.textContent= hFive2.textContent;
    const numericValue = Number(pmancost2.textContent);
    amo2.textContent = `$${numericValue}`;
    newArray.push(numericValue); 
    console.log(typeof numericValue)
    console.log(amo2.textContent)

}else{
    cons2.textContent="";
    amo2.textContent="";
}

 }

 LargeContent()
 function profileContent(){
if(profile.checked){
    if (!document.querySelector(".cons3")) {
    const divCreation= document.createElement("div");
    divCreation.className="firstContents cons3";
    let pentacoast= document.createElement("p");
    pentacoast.textContent=hFive3.textContent;

    divCreation.appendChild(pentacoast);

    let divCreation2= document.createElement("div");
    divCreation2.className="amount amo3";
    
    const numericValue = Number(pmancost3.textContent)
    let pentacoast2= document.createElement("p");
     pentacoast2.textContent = `$${numericValue}`
    
    divCreation2.appendChild(pentacoast2);

    finfirstCont1.appendChild(divCreation)
    finfirstCont1.appendChild(divCreation2)
    newArray.push(numericValue);
    console.log(typeof numericValue)
    console.log(pentacoast2.textContent)
}

}else{
    const cons3Element = document.querySelector(".cons3");
    const amo3Element = document.querySelector(".amo3");

    if (cons3Element) {
        cons3Element.innerHTML = "";
    }
    if (amo3Element) {
        amo3Element.innerHTML = "";
    }
    }
}
profileContent()

const tot= document.querySelector(".tot");


function FindTotal(arr) {
    return arr.reduce((acumm, num) => acumm + num, 0);
}
const result = FindTotal(newArray);
// console.log(result)
tot.textContent = `$${result.toFixed(2)}`;




online.addEventListener("change", OnlineContent);
large.addEventListener("change", LargeContent);
profile.addEventListener("change",profileContent);


   
///////////////////////////////////////////////////////////
///total


 ///////////////////////////////////////////////////
    
    
    
    
   
const nexx=document.querySelector(".nexx");
const holl= document.querySelector(".holl");
const fish= document.querySelector(".fish")
nexx.addEventListener("click",function(e){
e.preventDefault();
monthlyplan.classList.add("hiddens");
holl.classList.remove("hiddenes");


realNumber.forEach(button=> {
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
    if(button.classList.contains("fouth")){
        button.classList.remove("first");
    }
     if(button.classList.contains("third")){
            button.classList.remove("color");
            button.classList.add("first")
        }
})
})







/////////////////////////////////////////////////////////////////////////////////



// const firstBs= document.querySelector(".firstBs");
// const secondBs= document.querySelector(".secondBs");
// const thirdBs= document.querySelector(".thirdBs");
// const arcadeMons= document.querySelector(".arcadeMons")




// // /////////////////////////////////////////////
// const mainNames= document.querySelector(".firstBs h4");
// const mainParas= document.querySelector(".firstBs p");
// const receiveNames= arcadeMons.querySelector("h5");
// const amountss= document.querySelector(".amountss h6");
//  const secondHs= document.querySelector(".secondBs h4");
//  const secondPs= document.querySelector(".secondBs p");
//  const thirdHs= document.querySelector(".thirdBs h4");
//  const thirdPs=document.querySelector(".thirdBs p");



//  let newArrays= [];




// firstBs.addEventListener("click",function(e){
//     e.preventDefault();
//     receiveNames.textContent=`${mainNames.textContent}(Monthly)`;
//     const numericValue = Number(mainParas.textContent);
//     amountss.textContent = `$${numericValue}`;
//     newArrays.push(numericValue)
//     // console.log(typeof numericValue)
//         })
    
//         secondBs.addEventListener("click",function(e){
//             e.preventDefault()
//             receiveNames.textContent= `${secondHs.textContent}(Monthly)`;
//             const numericValue = Number(secondPs.textContent);
//             amountss.textContent = `$${numericValue}`;
//             newArrays.push(numericValue);
//             // console.log(typeof numericValue)
//         })
    
//         thirdBs.addEventListener("click",function(e){
//             e.preventDefault();
//             receiveNames.textContent= `${thirdHs.textContent}(Monthly)`;
//             const numericValue = Number(thirdPs.textContent);
//     amountss.textContent = `$${numericValue}`;
//     newArrays.push(numericValue);
//     // console.log(typeof numericValue)
//         })

        

// // /////////////////////////////////////////////////////////



// // // 170, 174, 178,180


// const onlines= document.querySelector(".onlines");
// const larges= document.querySelector(".larges");
// const profiles= document.querySelector(".profiles");


//  const hFives= document.querySelector(".hFives");
//  const pmancosts= document.querySelector(".pmancosts");

//  const hFive2s= document.querySelector(".hFive2s");
//  const pmancost2s= document.querySelector(".pmancost2s");

//  const hFive3s= document.querySelector(".hFive3s");
//  const pmancost3s= document.querySelector(".pmancost3s");



//  const conss= document.querySelector(".conss p");
//  const amos= document.querySelector(".amos p")
//  const cons2s= document.querySelector(".cons2s p");
//  const amo2s= document.querySelector(".amo2s p")
//  const finfirstCont1s= document.querySelector(".finfirstCont1s")

//  function OnlineContents() {
// if(onlines.checked){
// conss.textContent= hFives.textContent;
// const numericValue = Number(pmancosts.textContent);
//         amos.textContent = `$${numericValue}`;
//         newArrays.push(numericValue);
//         // console.log(typeof numericValue)
//         // console.log(amo.textContent);
// }

//  }
//  OnlineContents() 

//  function LargeContents(){
// if(larges.checked){
//     cons2s.textContent= hFive2s.textContent;
//     const numericValue = Number(pmancost2s.textContent);
//     amo2s.textContent = `$${numericValue}`;
//     newArrays.push(numericValue); 
//     // console.log(typeof numericValue)
//     // console.log(amo2.textContent)

// }

//  }

//  LargeContents()
//  function profileContents(){
// if(profiles.checked){
//     if (!document.querySelector(".cons3s")) {
//     const divCreations= document.createElement("div");
//     divCreations.className="firstContentss cons3s";
//     let pentacoasts= document.createElement("p");
//     pentacoasts.textContent=hFive3s.textContent;

//     divCreations.appendChild(pentacoasts);

//     let divCreation2s= document.createElement("div");
//     divCreation2s.className="amounts amo3s";
    
//     const numericValue = Number(pmancost3s.textContent)
//     let pentacoast2s= document.createElement("p");
//      pentacoast2s.textContent = `$${numericValue}`
    
//     divCreation2s.appendChild(pentacoast2s);

//     finfirstCont1s.appendChild(divCreations)
//     finfirstCont1s.appendChild(divCreation2s)
//     newArrays.push(numericValue);
//     // console.log(typeof numericValue)
//     // console.log(pentacoast2.textContent)
// }
// }

// }
// profileContents()

// const tots= document.querySelector(".tots");


// function FindTotals(arrs) {
//     return arrs.reduce((acumm, num) => acumm + num, 0);
// }
// const results = FindTotals(newArrays);
// // console.log(result)
// tots.textContent = `$${results.toFixed(2)}`;




// onlines.addEventListener("change", OnlineContents);
// larges.addEventListener("change", LargeContents);
// profiles.addEventListener("change",profileContents);


   
// // ///////////////////////////////////////////////////////////
// // ///total


// //  ///////////////////////////////////////////////////
    
    
    
//     const plans= document.querySelector(".plans")

// const nexxs=document.querySelector(".nexxs");
// const holls= document.querySelector(".holls");
// const fishs= document.querySelector(".fishs")
// nexxs.addEventListener("click",function(e){
// e.preventDefault();
// plans.classList.add("year");
// holls.classList.remove("hiddenes");


// realNumber.forEach(button=> {
//     if(button.classList.contains("third")){
//         button.classList.add("first");
//     }
//      if(button.classList.contains("second")){
//             button.classList.remove("color")
//         }  
// })
// })

// const baccks= document.querySelector(".baccks");

// baccks.addEventListener("click",function(e){
//     plans.classList.remove("year");
// holls.classList.add("hiddenes");


// realNumber.forEach(button=> {
//     console.log(button)
//     if(button.classList.contains("third")){
//         button.classList.remove("first");
//     }
//      if(button.classList.contains("second")){
//             button.classList.add("color")
//         }  
// })
// })






// const nets= document.querySelector(".nets")


// nets.addEventListener("click",function(e){
//     e.preventDefault();
//     fishs.classList.remove("finishHide");
//     holls.classList.add("hiddenes");
    
    
//     realNumber.forEach(button=> {
//         if(button.classList.contains("fouth")){
//             button.classList.add("first");
//         }
        
//          if(button.classList.contains("third")){
//                 button.classList.remove("first")
//             }  
//     })

//     })
    
//    const barks= document.querySelector(".barks");

//    barks.addEventListener("click",function(e){
  
// e.preventDefault();
// fishs.classList.add("finishHide");
//     holls.classList.remove("hiddenes");

// realNumber.forEach(button=> {
//     if(button.classList.contains("fouth")){
//         button.classList.remove("first");
//     }
//      if(button.classList.contains("third")){
//             button.classList.remove("color");
//             button.classList.add("first")
//         }
// })
// })



// const thankYou = document.querySelector(".thankYou");
// const confirm= document.querySelectorAll(".confirm")

// confirm.forEach(btn=> {
//     btn.addEventListener("click", function(e){
//         e.preventDefault();
//         thankYou.classList.remove("hidy");
//         fishs.classList.add("finishHide");
//         fish.classList.add("finishHide")
//     })
// })