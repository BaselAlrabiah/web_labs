document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#color-form");
    const input = document.querySelector("#color-input");
    const heading = document.querySelector("#heading");
    const message = document.querySelector("#message");

    form.onsubmit = function (event) {
        event.preventDefault();  // stay on the page

        const color = input.value.trim();

        // Only apply the color if the browser recognizes it
        if (CSS.supports("color", color)) {
            heading.style.color = color;
            message.textContent = "";
        } else {
            message.textContent = "'" + color + "' is not a valid color.";
        }

        input.value = "";
    };
});
