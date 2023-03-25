var button = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");
const buttonsArray = [...button];
var operation = "";

const buttons = buttonsArray.map(btn => {
    btn.addEventListener("click", () => type(btn.textContent)) 
});

function type(content){
    if(content != "CE" && content != "="){
        screen.textContent += content;
        operation += content;
    }
    else if(content == "=")
        result(operation);
    else
        location.reload();
}   


function result(operation){

    var wynik = eval(operation);
    screen.textContent = wynik;

    console.log(operation);
}
