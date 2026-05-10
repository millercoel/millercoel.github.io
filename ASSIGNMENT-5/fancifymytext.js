
const button = document.querySelector('input[activate="onAlert"]');
const radioA = document.querySelector('input[id="Fancy"]');
const radioB = document.querySelector('input[id="Boring"]');
const moo = document.querySelector('input[activate="onMoo"]');
console.log(moo)
console.log(button)

document.getElementsByTagName
button.addEventListener("click", onAlert)
radioA.addEventListener("click", onChange)
radioB.addEventListener("click", onChange)
moo.addEventListener("click", onMoo)

function onAlert() {

    document.getElementById("Text").style.fontSize = "2em";
}

    
function onChange() {
    if (radioA.checked) {
        document.getElementById("Text").style.fontWeight = "bold";
        document.getElementById("Text").style.color = "blue";
        document.getElementById("Text").style.textDecoration = "underline";
    } else {
        document.getElementById("Text").style.fontWeight = "normal";
        document.getElementById("Text").style.color = "black";
        document.getElementById("Text").style.textDecoration = "none";
    }
}

function onMoo() {
    let currText = document.getElementById("Text").value
    let splitText = currText.split(".");
    let rejoinText = splitText.join("-Moo. ");
    console.log(rejoinText)
    document.getElementById("Text").value =  rejoinText.toUpperCase();
}