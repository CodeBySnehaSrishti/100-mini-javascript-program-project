// Example data (you can fetch this from an API or database)
const suggestionsData = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Lemon",
    "Mango",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];
  function showSuggestions() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = ""; // Clear previous suggestions
  
    if (input) {
      const filteredSuggestions = suggestionsData.filter(item =>
        item.toLowerCase().includes(input)
      );
      if (filteredSuggestions.length) {
        filteredSuggestions.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          li.onclick = () => {
            document.getElementById("searchInput").value = item;
            suggestions.innerHTML = ""; // Clear suggestions after selection
          };
          suggestions.appendChild(li);
        });
      } else {
        const li = document.createElement("li");
        li.textContent = "No suggestions found";
        li.style.color = "#999";
        suggestions.appendChild(li);
      }
    }
  }
  