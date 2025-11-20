/* ——————————————————————————
   SCHERM NAVIGATIE
—————————————————————————— */

function goTo(screenId) {
    // Alle schermen verbergen
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    // Gewenste scherm tonen
    const nextScreen = document.getElementById(screenId);
    nextScreen.classList.add("active");

    // Speciale effecten per scherm (optioneel)
    if (screenId === "screen-scan") startScanEffect();
    if (screenId === "screen-light") playLightHint();
}


/* ——————————————————————————
   TUINSCAN ANIMATIE
—————————————————————————— */

function startScanEffect() {
    const scanText = document.querySelector("#screen-scan .scan-text");

    const steps = [
        "Vochtigheid analyseren…",
        "Plantenmoraal meten…",
        "Onkruidindex berekenen…",
        "Resultaten samenstellen…",
        "Scan voltooid ✔️"
    ];

    let i = 0;
    scanText.innerHTML = steps[i];

    const interval = setInterval(() => {
        i++;
        if (i < steps.length) {
            scanText.innerHTML = steps[i];
        } else {
            clearInterval(interval);
        }
    }, 900);
}


/* ——————————————————————————
   LICHT ACTIVATIE HINT
   (bijvoorbeeld een klein knippertje)
—————————————————————————— */

function playLightHint() {
    // Simpel effect: knipper een keer met de achtergrond
    document.body.classList.add("flash");

    setTimeout(() => {
        document.body.classList.remove("flash");
    }, 600);
}


/* ——————————————————————————
   (OPTIONEEL) GELUIDJES
—————————————————————————— */

function playSound(src) {
    const audio = new Audio(src);
    audio.volume = 0.4;
    audio.play();
}
