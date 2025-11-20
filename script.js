/* ——————————————————————————
   SCHERM NAVIGATIE
—————————————————————————— */

function goTo(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}


/* ——————————————————————————
   STARTSCHEM → SCAN
—————————————————————————— */

function startScan() {
    goTo("screen-scan");
    startScanSequence();
}


/* ——————————————————————————
   TUINSCAN ANIMATIE + PROGRESSBAR
—————————————————————————— */

function startScanSequence() {
    const scanText = document.querySelector("#screen-scan .scan-text");
    const progressBar = document.getElementById("scan-progress");
    const finishBtn = document.getElementById("scan-finish-btn");

    const scanSteps = [
        "Vochtigheid analyseren…",
        "Bodemleven controleren…",
        "Clematis-humeur meten…",
        "Onkruidindex berekenen…",
        "Bladstress-calibratie uitvoeren…",
        "Microklimaat voorspellen…",
        "Resultaten samenstellen…",
        "Scan voltooid ✔️"
    ];

    let step = 0;
    let progress = 0;

    finishBtn.classList.add("hidden");

    scanText.innerHTML = scanSteps[0];
    progressBar.style.width = "0%";

    const interval = setInterval(() => {
        step++;
        progress += 100 / scanSteps.length;

        if (step < scanSteps.length) {
            scanText.innerHTML = scanSteps[step];
            progressBar.style.width = progress + "%";
        } else {
            clearInterval(interval);
            progressBar.style.width = "100%";

            // Laat "Bekijk resultaten" zien na korte delay
            setTimeout(() => {
                finishBtn.classList.remove("hidden");
            }, 600);
        }
    }, 1500); // langzamere scan
}


/* ——————————————————————————
   ACTIE 1: WATER GEVEN (2 MIN DELAY)
—————————————————————————— */

function enableWaterButton() {
    const waterBtn = document.getElementById("water-btn");
    waterBtn.classList.remove("hidden");
}

// water-knop pas zichtbaar na 2 minuten
setTimeout(enableWaterButton, 120000); 


/* ——————————————————————————
   NA WATER: HIGH FIVE 
—————————————————————————— */

function goToHighFive() {
    goTo("screen-highfive");
}


/* ——————————————————————————
   LICHT ACTIVATIE: 20 SEC LOADING
—————————————————————————— */

function activateLight() {
    goTo("screen-light-anim");

    const lightDoneBtn = document.getElementById("light-done-btn");
    lightDoneBtn.classList.add("hidden");

    // optioneel flash-effect
    document.body.classList.add("flash");
    setTimeout(() => {
        document.body.classList.remove("flash");
    }, 600);

    // Na 20 seconden verschijnt de knop
    setTimeout(() => {
        lightDoneBtn.classList.remove("hidden");
    }, 20000);
}


/* ——————————————————————————
   MUUR-ACTIE: 2 MIN DELAY
—————————————————————————— */

function enableWallButton() {
    const wallBtn = document.getElementById("wall-found-btn");
    wallBtn.classList.remove("hidden");
}

// pas zichtbaar na 2 minuten op dat scherm
document.getElementById("screen-wall").addEventListener("transitionend", () => {
    setTimeout(enableWallButton, 120000);
});
