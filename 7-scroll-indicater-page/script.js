window.onscroll = function() {
  const bar = document.getElementById("scrollBar");
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  const percent = (scrolled / total) * 100;
  bar.style.width = percent + "%";
};
