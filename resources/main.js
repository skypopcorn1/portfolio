const text = document.querySelector(".welcome");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 75);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

function projectTileOnHover(t){
  console.log('mouseover func fired');
  t.innerHTML = "";
}

function projectTileOnMouseOut(t){
  t.innerHTML = "<h3>Housing Price Predictive Model</h3>"
}
