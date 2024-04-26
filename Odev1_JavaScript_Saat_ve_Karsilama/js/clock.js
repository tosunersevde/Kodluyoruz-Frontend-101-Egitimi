let name = prompt("Adiniz Nedir?");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML} ${name}`;

function clock(){
    let myClock = document.querySelector("#myClock");
    let date = new Date(); 

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();

    let dayNames = ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let currentDay = dayNames[day];

    myClock.innerHTML = `${hours}:${minutes}:${seconds} ${currentDay}`;
}

clock();

setInterval(clock,1000);