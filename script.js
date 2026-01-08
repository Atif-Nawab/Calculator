let btns = document.querySelectorAll(".btn");
console.log(btns);
let display = document.querySelector(".display");
let allClear=false;

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    console.log("hi");
    if(e.target.classList.contains("num-btn")&& allClear==true){
       display.innerText="";
       allClear=false;
    }
    else{
      allClear=false;
    }
     
    if (e.target.classList.contains("num-btn"))
      display.innerText += e.target.innerText;

    else if (e.target.classList.contains("plus") || e.target.classList.contains("fa-plus"))
      display.innerText += "+";

    else if (e.target.classList.contains("minus") || e.target.classList.contains("fa-minus"))
      display.innerText += "-";

    else if (e.target.classList.contains("multiply") || e.target.classList.contains("fa-xmark"))
      display.innerText += "×";

    else if (e.target.classList.contains("divide") || e.target.classList.contains("fa-divide"))
      display.innerText += "÷";

    else if (e.target.classList.contains("percent") || e.target.classList.contains("fa-percent"))
      display.innerText += "%";

    else if (e.target.classList.contains("eq") || e.target.classList.contains("fa-equals")) {
      allClear=true;
      display.innerText = display.innerText.replace("×", "*");
      display.innerText = display.innerText.replace("÷", "/");
      if (display.innerText.includes("%")&& (display.innerText.indexOf("%")==display.innerText.length-1)) {
        display.innerText=display.innerText.replace("%", "");
        display.innerText = display.innerText * 0.01;
      }
      display.innerText = eval(display.innerText);
    }
    else if (e.target.classList.contains("ac"))
      display.innerText = "";
    else if (e.target.classList.contains("del") || e.target.classList.contains("fa-delete-left"))
      display.innerText = display.innerText.slice(0, -1);
    console.log(e.target)

    toggleBlink();
  })

  
});

function toggleBlink() {
  if (display.innerText != "") {
    display.classList.add("show-blink");
    console.log("yes");
  } else {
    display.classList.remove("show-blink");
  }
}

