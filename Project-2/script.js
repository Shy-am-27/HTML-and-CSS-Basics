var number= 0;
function increase(){
    
    var num = document.querySelector("#number");
    num.innerHTML = number+=1;
}
function decrease(){
    
    var num = document.querySelector("#number");
    num.innerHTML = number-=1;
}
function reset(){
    var num = document.querySelector("#number");
    num.innerHTML = number-=number;
}