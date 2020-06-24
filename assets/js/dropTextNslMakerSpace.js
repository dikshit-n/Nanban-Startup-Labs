var drop1 = document.getElementById("d1")
var listItem1 = document.getElementById("l1")
var listContainer1 = document.getElementById("lc1")

var drop2 = document.getElementById("d2")
var listItem2 = document.getElementById("l2")
var listContainer2 = document.getElementById("lc2")

var drop3 = document.getElementById("d3")
var listItem3 = document.getElementById("l3")
var listContainer3 = document.getElementById("lc3")

var drop4 = document.getElementById("d4")
var listItem4 = document.getElementById("l4")
var listContainer4 = document.getElementById("lc4")

var drop5 = document.getElementById("d5")
var listItem5 = document.getElementById("l5")
var listContainer5 = document.getElementById("lc5")

var drop6 = document.getElementById("d6")
var listItem6 = document.getElementById("l6")
var listContainer6 = document.getElementById("lc6")

var drop7 = document.getElementById("d7")
var listItem7 = document.getElementById("l7")
var listContainer7 = document.getElementById("lc7")

var drop8 = document.getElementById("d8")
var listItem8 = document.getElementById("l8")
var listContainer8 = document.getElementById("lc8")

var drop9 = document.getElementById("d9")
var listItem9 = document.getElementById("l9")
var listContainer9 = document.getElementById("lc9")


function checkVisibility(listContainer, listItem, element){
    if(listContainer.offsetWidth < listItem.scrollWidth){
        element.style = "display: block;"
    }
}

checkVisibility(listContainer1 ,listItem1, drop1)
checkVisibility(listContainer2 ,listItem2, drop2)
checkVisibility(listContainer2 ,listItem3, drop3)
checkVisibility(listContainer4 ,listItem4, drop4)
checkVisibility(listContainer5 ,listItem5, drop5)
checkVisibility(listContainer6 ,listItem6, drop6)
checkVisibility(listContainer7 ,listItem7, drop7)
checkVisibility(listContainer8 ,listItem8, drop8)
checkVisibility(listContainer9 ,listItem9, drop9)


drop1.addEventListener("click", function(e) {
    e.preventDefault()
    this.expand = !this.expand;
    this.expand ? this.style = "display: block; opacity: 0.5" : this.style = "display: block; opacity: 1"
    this.expand ? listItem1.className = "large" : listItem1.className = "small"
    listContainer1.className = this.expand ? "listItemLarge" : "listItemSmall"
    listItem1.animate([
        // keyframes
        { opacity: '0' }, 
        { opacity: '1' }
      ], { 
        // timing options
        duration: 100,
        iterations: 1
      });
})

drop2.addEventListener("click", function(e) {
    e.preventDefault()
    this.expand = !this.expand;
    this.expand ? this.style = "display: block; opacity: 0.5" : this.style = "display: block; opacity: 1"
    listItem2.className = this.expand ? "large" : "small"
    listItem2.animate([
  // keyframes
  { opacity: '0' }, 
  { opacity: '1' }
], { 
  // timing options
  duration: 100,
  iterations: 1
});
    listContainer2.className = this.expand ? "listItemLarge" : "listItemSmall"
})

drop3.addEventListener("click", function(e) {
    e.preventDefault()
    this.expand = !this.expand;
    this.expand ? this.style = "display: block; opacity: 0.5" : this.style = "display: block; opacity: 1"
    listItem3.className = this.expand ? "large" : "small"
    listItem3.animate([
  // keyframes
  { opacity: '0' }, 
  { opacity: '1' }
], { 
  // timing options
  duration: 100,
  iterations: 1
});
    listContainer3.className = this.expand ? "listItemLarge" : "listItemSmall"
})

drop4.addEventListener("click", function(e) {
    e.preventDefault()
    this.expand = !this.expand;
    this.expand ? this.style = "display: block; opacity: 0.5" : this.style = "display: block; opacity: 1"
    listItem4.className = this.expand ? "large" : "small"
    listItem4.animate([
  // keyframes
  { opacity: '0' }, 
  { opacity: '1' }
], { 
  // timing options
  duration: 100,
  iterations: 1
});
    listContainer4.className = this.expand ? "listItemLarge" : "listItemSmall"
})

drop5.addEventListener("click", function(e) {
    e.preventDefault()
    this.expand = !this.expand;
    this.expand ? this.style = "display: block; opacity: 0.5" : this.style = "display: block; opacity: 1"
    listItem5.className = this.expand ? "large" : "small"
    listItem5.animate([
  // keyframes
  { opacity: '0' }, 
  { opacity: '1' }
], { 
  // timing options
  duration: 100,
  iterations: 1
});
    listContainer5.className = this.expand ? "listItemLarge" : "listItemSmall"
})

drop6.addEventListener("click", function(e) {
    e.preventDefault()
    this.expand = !this.expand;
    this.expand ? this.style = "display: block; opacity: 0.5" : this.style = "display: block; opacity: 1"
    listItem6.className = this.expand ? "large" : "small"
    listItem6.animate([
  // keyframes
  { opacity: '0' }, 
  { opacity: '1' }
], { 
  // timing options
  duration: 100,
  iterations: 1
});
    listContainer6.className = this.expand ? "listItemLarge" : "listItemSmall"
})

drop7.addEventListener("click", function(e) {
    e.preventDefault()
    this.expand = !this.expand;
    this.expand ? this.style = "display: block; opacity: 0.5" : this.style = "display: block; opacity: 1"
    listItem7.className = this.expand ? "large" : "small"
    listItem7.animate([
  // keyframes
  { opacity: '0' }, 
  { opacity: '1' }
], { 
  // timing options
  duration: 100,
  iterations: 1
});
    listContainer7.className = this.expand ? "listItemLarge" : "listItemSmall"
})

drop8.addEventListener("click", function(e) {
    e.preventDefault()
    this.expand = !this.expand;
    this.expand ? this.style = "display: block; opacity: 0.5" : this.style = "display: block; opacity: 1"
    listItem8.className = this.expand ? "large" : "small"
    listItem8.animate([
  // keyframes
  { opacity: '0' }, 
  { opacity: '1' }
], { 
  // timing options
  duration: 100,
  iterations: 1
});
    listContainer8.className = this.expand ? "listItemLarge" : "listItemSmall"
})

drop9.addEventListener("click", function(e) {
    e.preventDefault()
    this.expand = !this.expand;
    this.expand ? this.style = "display: block; opacity: 0.5" : this.style = "display: block; opacity: 1"
    listItem9.className = this.expand ? "large" : "small"
    listItem9.animate([
  // keyframes
  { opacity: '0' }, 
  { opacity: '1' }
], { 
  // timing options
  duration: 100,
  iterations: 1
});
    listContainer9.className = this.expand ? "listItemLarge" : "listItemSmall"
})