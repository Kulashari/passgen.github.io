const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}<>?";
const all = upper+lower+number+symbol
let length = 12;
let password = "";

let passwordValue = document.getElementById("password")
let lengthValue = document.getElementById("characters")
let generateButton = document.getElementById("generate")
let copyButton = document.getElementById("copy")
let incButton = document.getElementById("increase")
let decButton = document.getElementById("decrease")

incButton.addEventListener("click",function(){
    length+=1
    lengthValue.value = length +" characters"

})

decButton.addEventListener("click",function(){
    if (length>1){
        length-=1
    }
    lengthValue.value = length +" characters"
})

generateButton.addEventListener("click",function(){
    if (length<=4){
        if (length==0){
            password =""
        }
        if (length==1){
            password+=upper[Math.floor(Math.random()*upper.length)];
        }
        else if (length ==2){
            password+=upper[Math.floor(Math.random()*upper.length)];
            password+=lower[Math.floor(Math.random()*lower.length)];  
        }
        else if (length ==3){
            password+=upper[Math.floor(Math.random()*upper.length)];
            password+=lower[Math.floor(Math.random()*lower.length)];
            password+=number[Math.floor(Math.random()*number.length)];
        }
        else{
            password+=upper[Math.floor(Math.random()*upper.length)];
            password+=lower[Math.floor(Math.random()*lower.length)];
            password+=number[Math.floor(Math.random()*number.length)];
            password+=symbol[Math.floor(Math.random()*symbol.length)];
        }
    }
    
    else{
        password+=upper[Math.floor(Math.random()*upper.length)];
        password+=lower[Math.floor(Math.random()*lower.length)];
        password+=number[Math.floor(Math.random()*number.length)];
        password+=symbol[Math.floor(Math.random()*symbol.length)];
    
        for (i = 0;i<length-4;i++){
            password+=all[Math.floor(Math.random()*all.length)];
        }
    }
    passwordValue.value = password;
    password = "";
})

copyButton.addEventListener("click",function(){
    if (passwordValue.value){
        navigator.clipboard.writeText(passwordValue.value)
    }
    else{
        alert("Nothing to copy!")
    }
})