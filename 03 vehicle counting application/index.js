let count = 0
let savedString = "Saved Instance: "
function increase() {
    count += 1

    document.getElementById("count").innerText = count
}

function save() {
    document.getElementById("count").innerText = count + " saved!"
    savedString = savedString + count + " - " 
    document.getElementById("string").innerText = savedString
}