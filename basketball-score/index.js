let homeCount = 0;
let guestCount = 0;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function restart() {
    homeCount = 0;
    guestCount = 0;
    homeScore.innerText = homeCount;
    guestScore.innerText = guestCount;
    updateScoreColors();
}

function add1H() {
    homeCount += 1;
    homeScore.innerText = homeCount;
    updateScoreColors();
}

function add1G() {
    guestCount += 1;
    guestScore.innerText = guestCount;
    updateScoreColors();
}

function add2H() {
    homeCount += 2;
    homeScore.innerText = homeCount;
    updateScoreColors();
}

function add2G() {
    guestCount += 2;
    guestScore.innerText = guestCount;
    updateScoreColors();
}

function add3H() {
    homeCount += 3;
    homeScore.innerText = homeCount;
    updateScoreColors();
}

function add3G() {
    guestCount += 3;
    guestScore.innerText = guestCount;
    updateScoreColors();
}

function updateScoreColors() {
    if (homeCount > guestCount) {
        homeScore.style.color = "yellow";
        guestScore.style.color = "#F94F6D"; 
    } else if (guestCount > homeCount) {
        guestScore.style.color = "yellow";
        homeScore.style.color = "#F94F6D"; 
    } else {
        homeScore.style.color = "#F94F6D";
        guestScore.style.color = "#F94F6D";
    }
}
