let s = document.querySelector(".switch");
let counter = document.querySelector(".counter");
let reset = document.createElement("button");
let x=1;
let w = 10;
let h = 20;

let test = true;
let f2 = true;

document.body.onclick = () => {
  if(f2) {
    x++;
    counter.textContent = x;
    w+=5;
    h+=5;
    s.style.width = w +"px";
    s.style.height = h +"px";
  }
}

s.onclick = () => {
  if(test) {
    document.body.style.background = "white";
    counter.style.color = "#151515";
    counter.textContent = "wygrywasz za "+x+" razem!";
    test = false;
    f2 = false;
    reset.classList.add("btn");
    reset.textContent = "RESET";
    document.body.appendChild(reset);
  } else {
    document.body.style.background = "#151515";
    counter.style.color = "#ddd";
    test = true;
  }
}

reset.onclick = () => {
  x = 0;
  test = true;
  f2 = true;
  s.style.left = Math.floor(Math.random() * (90)) + "vw" ;
  s.style.top = Math.floor(Math.random() * (90)) + "vh" ;
  document.body.style.background = "#151515";
  counter.style.color = "#ddd";

  reset.remove();
  w = 10;
  h = 20;
}

onload = () => {
  s.style.left = Math.floor(Math.random() * (90)) + "vw" ;
  s.style.top = Math.floor(Math.random() * (90)) + "vh" ;
}