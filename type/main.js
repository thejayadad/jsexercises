
const text = "Peace.............."
const el = document.getElementById("typewritter")
let index = 0;

function type(){
    if(index <text.length){
        el.textContent += text.charAt(index)
        index++;
        setTimeout(type, 100)
    }
}
type()