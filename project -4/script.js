var input = document.getElementById("input");
var button = document.getElementById("submit");
var button1 = document.getElementById("restore");
var output = document.getElementById("out");
var count = 0;

// button.addEventListener('click',() => {
    
    
// });


function clicke(){

    var initialInput = input.value;
    if(initialInput!=""){
        //output.insertAdjacentHTML('beforeend',`<li>${ans}</li>`);
        var li = document.createElement("li");
        li.textContent = initialInput;
        output.appendChild(li);
        count++;
        saveToLocal();
    
        if(count==10){
            button.disabled =true;
    }
    }
      input.value ='';

}
function saveToLocal(){

    //var storage = output.innerHTML;
    const item = [];
    const itemelement = document.getElementsByTagName("li");
    for(let i= 0;i< itemelement.length;i++){
        item.push(itemelement[i].textContent);  
    }
    localStorage.setItem("autosave",JSON.stringify(item));
    
    

}
function restore(){
    
    var saved = JSON.parse(localStorage.getItem("autosave"));
    if(saved == null ){
        var s = output.textContent =""; 
        return s;
    }
    
    if (saved && saved.length >0){
        
        saved.forEach(item => {
        var li = document.createElement("li");
        li.textContent = item;
        output.appendChild(li);
        });
        
        count =count + (saved.length);
        count++;
        
    }
    if(count >= 9){
        button1.disabled=true;
    }
    
    
    

    
}
function reset(){
    
    count =0;
    button.disabled =false;
    button1.disabled=false;
    localStorage.clear();
    output.innerHTML =" ";
    input.value ='';

}



    


