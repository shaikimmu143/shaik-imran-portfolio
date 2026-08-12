// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");

}


// =========================
// CLOSE MENU AFTER CLICK
// =========================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .querySelector(".nav-links")
                .classList.remove("active");

        });

    });


// =========================
// CONTACT FORM
// =========================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        this.reset();

    });
