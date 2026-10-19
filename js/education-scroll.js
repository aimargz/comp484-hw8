const education = document.querySelector(".education");
let scrollPending = false;

function moveEducationImage() {
    const box = education.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (box.bottom > 0 && box.top < viewportHeight) {
        const progress = (viewportHeight / 2 - box.top - box.height / 2)
            / (viewportHeight + box.height);
        const shift = Math.max(-100, Math.min(100, progress * 200));
        education.style.setProperty("--education-shift", `${shift}px`);
    }

    scrollPending = false;
}

function scheduleImageMove() {
    if (!scrollPending) {
        scrollPending = true;
        requestAnimationFrame(moveEducationImage);
    }
}

window.addEventListener("scroll", scheduleImageMove, { passive: true });
window.addEventListener("resize", scheduleImageMove);
moveEducationImage();
