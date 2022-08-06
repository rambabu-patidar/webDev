const inputLink = document.querySelector('.link-input');
const submitButton = document.querySelector('.submit-button');
const list = document.querySelector('.list');
const warningMsg = document.querySelector('.warning');
warningMsg.textContent = '';
const linkArray = [];
const MAX_SIZE = 5;

list.innerHTML = '';
inputLink.focus();

function checkAndAdd() {
    if(inputLink.value !== '') {
        list.innerHTML = '';
        linkArray.unshift(inputLink.value);
    
        for(const links of linkArray) {
    
            const listItem = document.createElement('li');
            listItem.textContent = links;
            list.appendChild(listItem);
        }
        if(linkArray.length >= MAX_SIZE) {
            linkArray.pop();
        }
        warningMsg.textContent = '';
    } 
    else if(inputLink.value === "") {
        warningMsg.textContent = "!!!  No link Provided  !!!";
        warningMsg.style.color = 'red';
    }
    inputLink.value = '';
    inputLink.focus();
}

submitButton.addEventListener("click", checkAndAdd);