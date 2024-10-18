var number = 0;
    

function increase(){
    var shyam = document.querySelector("#reset");
    shyam.disabled=false;
    shyam.style.backgroundColor = "";
    var num = document.querySelector("#number");
    num.innerHTML = number+=1;

}
function decrease(){
    var shyam = document.querySelector("#reset");
    shyam.disabled=false;
    shyam.style.backgroundColor = "";
    var num = document.querySelector("#number");
    if(number>0){
        number-=1;
        num.innerHTML = number;
    }
    
}
function reset(){
    
    if(number!=0){
    var num = document.querySelector("#number");
    num.innerHTML = number-=number;   
    }
    else{
        var shyam = document.querySelector("#reset");
        var back = "#ff0000";
        shyam.style.backgroundColor = back;
       alert("Value already reached its default value");
        shyam.disabled =true;
    }
    



}
