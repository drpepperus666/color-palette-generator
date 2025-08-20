let colorBoxes = document.querySelectorAll('div.color-box');
let generateBtn = document.getElementById('generate-btn');
let colorCodes = document.querySelectorAll('p.color-code');

function getRandomHexColor() {
    let str = "0123456789ABCDEF";
    let hexColor = "";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        hexColor += str[index];
    }
    return '#' + hexColor;
}

function updatePalette() {
    for (let i = 0; i < colorBoxes.length; i++) {
        let newColor = getRandomHexColor();
        colorBoxes[i].style.backgroundColor = newColor;
        let textElement = colorBoxes[i].querySelector("p.color-code");
        textElement.textContent = newColor;
    }
}

generateBtn.addEventListener("click", updatePalette);
updatePalette();