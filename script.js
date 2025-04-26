document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navPart2 = document.querySelector(".nav-part2");

    menuIcon.addEventListener("click", function () {
        navPart2.classList.toggle("active");
    });
});
