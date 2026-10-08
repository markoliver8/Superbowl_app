// Add JavaScript code for your web site here and call it from index.html.
// LIGHT MODE
document.getElementById("toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// RSVP
const form = document.getElementById("rsvp-form");
const list = document.getElementById("rsvp-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const team = document.getElementById("team");
    const food = document.getElementById("food");

    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.getElementById("close-modal");

    let valid = true;

    [name, team, food].forEach(input => input.classList.remove("error"));

    if (name.value.trim().length < 2) {
        name.classList.add("error");
        valid = false;
    }
    if (team.value.trim().length < 2) {
        team.classList.add("error");
        valid = false;
    }
    if (food.value.trim().length < 2) {
        food.classList.add("error");
        valid = false;
    }

if (valid) {
    const li = document.createElement("li");
    li.textContent = `${name.value} likes ${team.value} and brings ${food.value}`;
    list.appendChild(li);

    // SHOW MODAL
    modalText.textContent = `Thanks ${name.value}! 🎉 You're all set for the Super Bowl!`;
    modal.classList.remove("hidden");

    // AUTO CLOSE after 3 seconds
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 3000);

    form.reset();
}
});

/*** Scroll Animations ***/

let revealableContainers = document.querySelectorAll(".revealable");

window.addEventListener("DOMContentLoaded", () => {
    let revealableContainers = document.querySelectorAll(".revealable");

    const reveal = () => {
        for (let i = 0; i < revealableContainers.length; i++) {
            let current = revealableContainers[i];

            let windowHeight = window.innerHeight;
            let top = current.getBoundingClientRect().top;

            let revealDistance = 150;

            if (top < windowHeight - revealDistance) {
                current.classList.add("active");
            } else {
                current.classList.remove("active");
            }
        }
    };

    window.addEventListener("scroll", reveal);
    reveal();
});

/*** Reduce Motion ***/

let reduceMotionEnabled = false;

document.getElementById("reduce-motion").addEventListener("click", () => {
    reduceMotionEnabled = !reduceMotionEnabled;
    const btn = document.getElementById("reduce-motion");

    if (reduceMotionEnabled) {
        btn.textContent = "Reduce Motion ON";

        revealableContainers.forEach(el => {
            el.style.transition = "none";
            el.classList.add("active");
        });

    } else {
        btn.textContent = "Reduce Motion OFF";

        revealableContainers.forEach(el => {
            el.style.transition = "all 2s ease";
        });
    }
});
