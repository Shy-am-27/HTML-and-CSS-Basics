var input = document.getElementById("input");
var button = document.getElementById("submit");
var output = document.getElementById("out");
var count = 0;

// button.addEventListener('click',() => {
    
    
// });


function clicke(){
    const ans = input.value;
    if(ans!=""){
    output.insertAdjacentHTML('beforeend',`<li>${ans}</li>`);
    count++;
    }
    if(count==10){
        button.disabled =true;
    }
    input.value ='';
}


    


