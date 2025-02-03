
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


let select = document.querySelectorAll("select");
let button = document.querySelector("button");
let fromcur = document.querySelector(".from select");
let tocur = document.querySelector(".to select");
let msg = document.querySelector(".msg");



button.addEventListener("click",async(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let amt = document.querySelector("input");
    let amtvalue = amt.value;
    if(amtvalue == "" || amtvalue<0){
        amt.value = "1";
        amtvalue ="1";
    }
    let url = `${BASE_URL}/${fromcur.value.toLowerCase()}/${tocur.value.toLowerCase()}.json`;
    let r = await fetch(url);
    let data = await r.json();
    console.log(data);
    let rate = data[tocur.value.toLowerCase()];

    let final = amtvalue*rate;
    msg.innerText = `${amtvalue}${fromcur} = ${final}${tocur}`;

})


select[0].addEventListener("change",(event)=>{
    
    getflag(event.target);
});
select[1].addEventListener("change",(event)=>{
    
    getflag(event.target);
});



    for(currCode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currCode;
        newoption.value = currCode;
        if(currCode === "USD"){
            newoption.selected = "selected";
        }
        select[0].appendChild(newoption);
        
        
    }
    for(currCode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currCode;
        newoption.value = currCode;
        if(currCode === "INR"){
            newoption.selected = "selected";
        }
        select[1].appendChild(newoption);
        
        
    }
   
   let  getflag = (el)=>{
    let curcide = el.value;
       let countrycode = countryList[curcide];
      
       let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
       el.previousElementSibling.src = newsrc;

    }
