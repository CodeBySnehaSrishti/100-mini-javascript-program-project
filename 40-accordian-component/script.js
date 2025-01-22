document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            // Toggle active class for the clicked header
            header.classList.toggle("active");

            // Get the associated content
            const content = header.nextElementSibling;

            // Open or close the accordion
            if (header.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "15px";
            } else {
                content.style.maxHeight = null;
                content.style.padding = "0 15px";
            }
        });
    });
});
