var a = document.querySelectorAll(".menu a");
for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function () {
    var b = document.querySelector(".menu li.active");
    if (b) b.classList.remove("active");
    this.parentNode.classList.add("active");
  };
}
