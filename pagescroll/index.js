var percent = document.getElementById("preogressbar");
var percent = document.getElementById("percent");

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progress = (window.pageYOffset / totalHeight) * 100;
  preogressbar.style.height = progress + "%";
  percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%";
};
