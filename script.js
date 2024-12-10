// Handle the Yes button
document.getElementById("yes-button").addEventListener("click", function () {
    alert("I KNOW YOU WILL MARRY ME 💕 LOVE YOU PATTI🖤");
});

// Handle the No button
document.getElementById("no-button").addEventListener("mouseover", function () {
    const button = document.getElementById("no-button");
    const randomX = Math.floor(Math.random() * 300) + "px";
    const randomY = Math.floor(Math.random() * 300) + "px";

    button.style.position = "absolute";
    button.style.top = randomY;
    button.style.left = randomX;
});

document.getElementById("no-button").addEventListener("click", function () {
    alert("OH no WHY? 😢 PRESS YES LEE BSDK PATTI");
});
