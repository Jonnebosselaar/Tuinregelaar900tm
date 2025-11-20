/* ——————————————————————————
   SCHERM WISSELEN
—————————————————————————— */

function goTo(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}


/* ——————————————————————————
   START TUINSCAN
—————————————————————————— */

function startScan() {
    goTo("screen-scan");
    startScanSequence();
}


/* ——————————————————————————
   TUINSCAN ANIMATIE + VOORTGANG
—————————————————————————— */

function startScanSequence() {
    const scanText = document.querySelector("#screen-scan .scan-text");
    const progressBar = document.getElementById("scan-progress");
    const finishBtn = document.getElementById("scan-finish-btn");

    const steps = [
        "Vochtigheid analyseren…",
        "Bodemleven controleren…",
        "Clematis-humeur meten…",
        "Onkruidindex bepalen…",
        "Bladstress-calibratie uitvoeren…",
        "Microklimaat voorspellen…",
        "Resultaten samenstellen…",
        "Scan voltooid ✔️"
    ];

    let step = 0;
    let progress = 0;

    finishBtn.classList.add("hidden");
    progressBar.style.width = "0%";
    scanText.innerHTML = steps[0];

    const interval = setInterval(() => {
        step++;
        progress += 100 / steps.length;

        if (step < steps.length) {
            scanText.innerHTML = steps[step];
            progressBar.style.width = progress + "%";
        } else {
            clearInterval(interval);
            progressBar.style.width = "100%";

            setTimeout(() => {
                finishBtn.classList.remove("hidden");
            }, 600);
        }
    }, 1500);
}


/* ——————————————————————————
   WATERGEEF-KNOP (2 min DELAY)
—————————————————————————— */

function enableWaterButton() {
    const btn = document.getElementById("water-btn");
    btn.classList.remove("hidden");
}

function enterWaterScreen() {
    goTo("screen-action1");
    setTimeout(enableWaterButton, 120000); // 2 minuten
}


/* ——————————————————————————
   NA WATER → HIGH-FIVE
—————————————————————————— */

function goToHighFive() {
    goTo("screen-highfive");
}


/* ——————————————————————————
   LICHTACTIVATIE (20 sec LOADING)
—————————————————————————— */

function activateLight() {
    goTo("screen-light-anim");

    const doneBtn = document.getElementById("light-done-btn");
    doneBtn.classList.add("hidden");

    // subtiel flash-effect
    document.body.classList.add("flash");
    setTimeout(() => {
        document.body.classList.remove("flash");
    }, 600);

    // knop pas tonen na 20 seconden
    setTimeout(() => {
        doneBtn.classList.remove("hidden");
    }, 20000);
}


/* ——————————————————————————
   MUUR-ACTIE (2 min DELAY)
—————————————————————————— */

function enableWallButton() {
    document.getElementById("wall-found-btn").classList.remove("hidden");
}

function enterWallScreen() {
    goTo("screen-wall");
    setTimeout(enableWallButton, 120000); // 2 minuten
}
