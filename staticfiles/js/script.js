// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        if (navMenu.classList.contains("show")) {
            menuToggle.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        }

    });


    const navLinks = document.querySelectorAll("#navMenu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}


// ================= THEME TOGGLE =================

const themeToggle = document.getElementById("themeToggle");

function updateThemeIcon() {

    if (document.body.classList.contains("light-mode")) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fa-regular fa-moon"></i>';

    }
}


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}

updateThemeIcon();


// Toggle theme

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

        } else {

            localStorage.setItem("theme", "dark");

        }

        updateThemeIcon();

    });

}

// ================= SCROLL ANIMATION =================

const animatedSections =
    document.querySelectorAll(".animate-section");

const sectionObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedSections.forEach(function (section) {
    sectionObserver.observe(section);
});


// ================= ACTIVE NAVBAR =================

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll("#navMenu a");

const navObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                navigationLinks.forEach(function (link) {
                    link.classList.remove("active");
                });

                const activeLink =
                    document.querySelector(
                        '#navMenu a[href="#' +
                        entry.target.id +
                        '"]'
                    );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.45
    }
);

sections.forEach(function (section) {
    navObserver.observe(section);
});

