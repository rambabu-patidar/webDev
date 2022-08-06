const message = document.querySelector('.message');
const onOff = document.querySelector('.on-off');
document.body.style.backgroundColor = 'grey';
message.textContent = 'Light Off';
onOff.value = 'Turn on Bulb.';

// toggleing in between the on and off with the help of event listner 
// and the bulbOnOff() function 
function bulbOnOff() {
    if(message.textContent === 'Light Off') {
        message.textContent = 'Light On';
        document.body.style.backgroundColor = 'gold';
        onOff.value = 'Turn off Bulb.';
    } else if(message.textContent === 'Light On'){
         message.textContent = 'Light Off';
         document.body.style.backgroundColor = 'grey';
         onOff.value = 'Turn on Bulb.';
    }
}
onOff.addEventListener("click", bulbOnOff);
