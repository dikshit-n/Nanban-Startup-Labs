var c = document.getElementById("c")
var s = document.getElementById("s")


c.style.minHeight = Math.max(c.offsetHeight, s.offsetHeight).toString() + "px"
s.style.minHeight = Math.max(c.offsetHeight, s.offsetHeight).toString() + "px"