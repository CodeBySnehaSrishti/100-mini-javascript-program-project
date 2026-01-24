function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.icon');
 // Toggle the active state
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.padding = "0 10px";
        icon.textContent = '+';
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "10px";
        icon.textContent = '-';
    }
}
