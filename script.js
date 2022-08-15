let homeScoreEl = document.getElementById("home-points")
let guestScoreEl = document.getElementById("guest-points")

homePoints = 0
guestPoints = 0


function addOnePointHome() {
    homePoints += 1
    homeScoreEl.textContent = homePoints
}

function addTwoPointsHome() {
    homePoints += 2
    homeScoreEl.textContent = homePoints
}

function addThreePointsHome() {
    homePoints += 3
    homeScoreEl.textContent = homePoints
}

function addOnePointGuest() {
    guestPoints += 1
    guestScoreEl.textContent = guestPoints
}

function addTwoPointsGuest() {
    guestPoints += 2
    guestScoreEl.textContent = guestPoints
}

function addThreePointsGuest() {
    guestPoints += 3
    guestScoreEl.textContent = guestPoints
}

function resetScore() {
    guestPoints = 0
    homePoints = 0
    homeScoreEl.textContent = homePoints
    guestScoreEl.textContent = guestPoints
}