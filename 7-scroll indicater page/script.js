window.onscroll = function () {
  const scrollBar = document.getElementById("scrollBar");
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;  
  scrollBar.style.width = scrollPercent + "%"; 
};