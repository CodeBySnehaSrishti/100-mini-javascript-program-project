document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons and content
            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add 'active' class to clicked button and corresponding content
            button.classList.add("active");
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
