
 const slider = document.getElementById("fontSizeSlider");
 const output = document.getElementById("sliderValue");
 const text = document.getElementById("text");

 slider.oninput = function() {
     let fontSize = this.value + "px"; //current-value-of-slider
     text.style.fontSize = fontSize;   //font-change
     output.textContent = fontSize;   //value-change

 }; 