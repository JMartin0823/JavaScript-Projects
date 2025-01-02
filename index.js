const length = document.getElementById('length-p')
const volume = document.getElementById('volume-p')
const mass = document.getElementById('mass-p')
const input = document.getElementById('input')
const button = document.querySelector('button')

input.addEventListener("input", () => {
    input.style.width = `${Math.max(input.value.length * 1.1, 2)}ch`;
});

function lengthCalc(value) {
    let feet = (value * 3.281).toFixed(2); 
    let meters = (value / 3.281).toFixed(2); 
    return { feet, meters };
}

function volumeCalc(value) {
    let gallons = (value * 0.264).toFixed(2); 
    let liters = (value / 0.264).toFixed(2);  
    return { gallons, liters };
}

function massCalc(value) {
    let pounds = (value * 2.204).toFixed(2);  
    let kilograms = (value / 2.204).toFixed(2); 
    return { pounds, kilograms };
}

function render({feet, meters}, {gallons, liters}, {pounds, kilograms}){
    length.innerHTML = `
        ${input.value} meters = ${feet} feet | ${input.value} feet = ${meters} meters
        `
    volume.innerHTML = `
        ${input.value} liters = ${gallons} gallons | ${input.value} gallons = ${liters} liters
        `
    mass.innerHTML = `
        ${input.value} kilos = ${pounds} pounds | ${input.value} pounds = ${kilograms} kilos
        `
}


button.addEventListener("click", function(){
    button.classList.add("clicked"); // Add the clicked class
    setTimeout(() => {
        button.classList.remove("clicked"); // Remove it after 200ms
    }, 200); // Duration should match the transition in CSS
    const value = input.value
    const lengthResult = lengthCalc(value)
    const volumeResult = volumeCalc(value)
    const massResult = massCalc(value)
    render(lengthResult, volumeResult, massResult)
})

