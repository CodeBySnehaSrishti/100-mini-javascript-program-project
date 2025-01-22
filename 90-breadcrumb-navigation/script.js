document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll("section");
        const breadcrumbLinks = document.querySelectorAll(".breadcrumb a");
        const backButton = document.getElementById("back-button");
        let historyStack = []; // Keeps track of visited sections
        window.addEventListener("scroll", () => {
            let currentSection = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - window.innerHeight / 4;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id");
                }
            });
            breadcrumbLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSection}`) {
                    link.classList.add("active");
                }
            });
            // Enable back button if there's history
            backButton.disabled = historyStack.length === 0;
        });
        breadcrumbLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                historyStack.push(window.location.hash);
            });
        });
        backButton.addEventListener("click", () => {
            if (historyStack.length > 0) {
                const previousHash = historyStack.pop();
                const previousSection = document.querySelector(previousHash);
                if (previousSection) {
                    window.scrollTo({
                        top: previousSection.offsetTop,
                        behavior: "smooth",
                    });
                }
            }
            backButton.disabled = historyStack.length === 0;
        });
    });
    
