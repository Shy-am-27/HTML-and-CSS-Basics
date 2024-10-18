function value(number){
  return (Math.floor(Math.random()*number));
}

function change(){
  const shyam = document.querySelector("#body");
  const element =`rgb(${value(255)} ${value(255)} ${value(255)})`;
  console.log(element);
  shyam.style.backgroundColor = element;
  var textLine = document.querySelector(".text");
  textLine.innerHTML = element;
}

change();