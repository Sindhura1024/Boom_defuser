let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;
let intervalId = setInterval(function() {
    countdown -= 1;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "Boom";
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let defuserElValue = defuserEl.value;
    if (event.key === "Enter" && defuserElValue === "defuse" && countdown !== 0) {
        timerEl.textContent = "You did it!";
        clearInterval(intervalId);
    }
});