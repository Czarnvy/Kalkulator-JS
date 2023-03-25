var button = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");
const buttonsArray = [...button];

const buttons = buttonsArray.map(btn => {
    btn.addEventListener("click", () => type(btn.textContent)) 
});

function type(content){
    if(content == "CE")
        screen.textContent = "";
    else if(content == "=")
        result();
    else
        screen.textContent += content;
}

