function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Array(24)
    .fill()
    .forEach(() => {
        const divDOMEl = document.createElement("div");
        divDOMEl.classList.add("butterfly");
        divDOMEl.style.background = `url(img/butterfly${randomInt(1, 6)}.png) no-repeat`;
        divDOMEl.style.backgroundSize = `cover`;
        divDOMEl.style.transform = `rotate3d(1, 1, 1, ${randomInt(-50, 50)}deg`;

        const transitionTime = randomInt(500, 1500);
        divDOMEl.style.transition = `all ${transitionTime / 1000}s`;

        setInterval(() => {
            divDOMEl.style.transform = `rotate3d(1, 1, 1, ${randomInt(-70, 70)}deg`;
        }, transitionTime);

        document.querySelector("#container").appendChild(divDOMEl);
    });
