const scroll = document.getElementById("scroll");
const invitation = document.getElementById("invitation");

scroll.addEventListener("click", function () {
    scroll.style.display = "none";
    invitation.classList.remove("hidden");
});