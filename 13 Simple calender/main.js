const select = document.querySelector("select");
const headingMonth = document.querySelector("#heading-month");
const dateChart = document.querySelector("#dates");

const main  = document.querySelector("main");
const section  = document.querySelector("section");

select.addEventListener("change", setChart);
headingMonth.textContent = "January";
createMonth("January", 31);

function createMonth(selectedMonth, days) {
    const tempVar = days;
    for(; days >=1; days--) {
        const day = document.createElement("div");
        day.textContent = tempVar - days + 1;
        // see here if the things are not working
        dateChart.appendChild(day);
    }
}

function setChart() {
    const selectedMonth = select.value;

    headingMonth.textContent = selectedMonth;
    dateChart.innerHTML = "";
    if (selectedMonth === "January" || selectedMonth === "March" || selectedMonth === "May" || selectedMonth === "July"||selectedMonth === "August"|| selectedMonth === "October" || selectedMonth === "December") {
        createMonth(selectedMonth, 31);     
    } else if(selectedMonth === "April" ||selectedMonth === "June"||selectedMonth === "September" ||selectedMonth === "November") {
        createMonth(selectedMonth, 30);
    } else {
        createMonth(selectedMonth, 28);
    }
}