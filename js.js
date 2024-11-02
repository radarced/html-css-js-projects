const BtnEls = document.querySelectorAll('.btn'); // this selects all elements with .btn class otherwise it just picks the first one it sees
const ConatainerEL = document.querySelector('.main-container');

BtnEls.forEach(Element => {
    
    Element.addEventListener("click",()=>{

        if (Element.id === "Add"){
        console.log(Element.id);
        AddColors();
        } else {
        console.log(Element.id);
        RemoveColor();
        }

    })});

    
function RemoveColor(){

    ConatainerEL.innerHTML = ""; // just removes everything nice and easy
    AddColors();

}
function AddColors(){
    for (let index = 0; index < 12; index++) {
    const NewColor = document.createElement("div");
    NewColor.classList.add("Box");
    const NewColorCode = ChooseColor();
    NewColor.style.backgroundColor = "#" + NewColorCode;
    NewColor.innerHTML = "#" + NewColorCode;

    ConatainerEL.appendChild(NewColor);
    } 
}

function ChooseColor(){
    const chars = "0123456789abcdef"
    const MaxLength = 6;
    let ChosenColor = "";


    for (let index = 0;index < MaxLength;index++){
        let randomNum = Math.floor(Math.random() * chars.length) //getting the randomnum
        ChosenColor += chars.substring(randomNum,randomNum + 1); // so what this does is it goes in the string . it goes like this e.g (1,2) this would return the first char of string 
    }
    return ChosenColor
}
