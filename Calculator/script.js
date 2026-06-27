const display = document.getElementById("display");
const history = document.getElementById("history");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
history.textContent = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){
try{
let exp = display.value.replace(/%/g,"/100");
let result = Function('"use strict"; return (' + exp + ')')();

history.textContent = display.value + " =";
display.value = result;
}
catch{
display.value = "Error";
}
}

document.addEventListener("keydown",(e)=>{
if("0123456789+-*/.%".includes(e.key)) append(e.key);
if(e.key==="Enter") calculate();
if(e.key==="Backspace") deleteLast();
if(e.key==="Escape") clearDisplay();
});
