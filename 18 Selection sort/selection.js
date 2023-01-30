const generateBtn = document.querySelector(".generate");
const size = document.querySelector("#size");
const speed = document.querySelector("#speed");
const arrayList = document.querySelector(".array");
const startBtn = document.querySelector(".start");

function random(min , max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArray(size = 25) {
    for(let i = 0; i < size; i++) {
        const element = document.createElement("li");
        element.classList.add("element");
        element.style.height = `${random(10, 500)}px`;
        arrayList.appendChild(element);
    }
}

function disableBtn() {
    generateBtn.classList.add("disabledBtn");
    startBtn.classList.add("disabledBtn");
    generateBtn.disabled = true;
    startBtn.disabled = true;
}

function enableBtn() {
    generateBtn.classList.remove("disabledBtn");
    startBtn.classList.remove("disabledBtn");
    generateBtn.disabled = false;
    startBtn.disabled = false;
}

function sleep(ms) {
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, ms); 
}) }
  

async function selectionSort() {
    disableBtn();
    const elemts = arrayList.childNodes;
    for (let i = 0; i< elemts.length; i++) {
        let minIdx = i;
        elemts[i].style.backgroundColor = "white";
        for (let j = i + 1; j < elemts.length; j++) {
            elemts[j].style.backgroundColor = "red"; // iterating on elemts
            await sleep(parseInt(speed.value / 2));
            if (parseInt(elemts[j].style.height) < parseInt(elemts[minIdx].style.height)) {
                elemts[minIdx].style.backgroundColor = "rgb(227, 201, 4)";
                minIdx = j;
                elemts[minIdx].style.backgroundColor = "white"; // min element
            } else {
                elemts[j].style.backgroundColor = "rgb(227, 201, 4)";
            }
            await sleep(speed.value);
        }
        if (i !== minIdx) {
            const temp = elemts[i].style.height;
            elemts[i].style.height = elemts[minIdx].style.height;
            elemts[minIdx].style.height = temp;
            elemts[minIdx].style.backgroundColor = "rgb(227, 201, 4)";
        }
        elemts[i].style.backgroundColor = "green";
    }
    enableBtn();
    
}

generateBtn.addEventListener("click", () => {
    arrayList.innerHTML = "";
    generateArray(size.value);
});

startBtn.addEventListener("click", selectionSort);

generateArray();