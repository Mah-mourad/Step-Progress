let left1 = document.querySelector(".left1")
let left2 = document.querySelector(".left2")
let left3 = document.querySelector(".left3")
let left4 = document.querySelector(".left4")
let right1 = document.querySelector(".right1")
let right2 = document.querySelector(".right2")
let right3 = document.querySelector(".right3")
let right4 = document.querySelector(".right4")
let range = document.querySelector(".range")
let range2 = document.querySelector(".range2")
let range3 = document.querySelector(".range3")
let range4 = document.querySelector(".range4")
let selector2 = document.querySelector(".selector2")
let selector3 = document.querySelector(".selector3")
let selector4 = document.querySelector(".selector4")
let selector5 = document.querySelector(".selector5")
let x2 = document.querySelector(".x2")
let x3 = document.querySelector(".x3")
let x4 = document.querySelector(".x4")
let x5 = document.querySelector(".x5")
let check2 = document.querySelector(".check2")
let check3 = document.querySelector(".check3")
let check4 = document.querySelector(".check4")
let check5 = document.querySelector(".check5")
let cssAfter = window.getComputedStyle(selector2, '::after')

right1.addEventListener("click", function(){
    range.style.backgroundColor = "rgb(151, 48, 247)"
    selector2.style.borderColor = "rgb(151, 48, 247)"
    x2.style.display = "none"
    check2.style.display = "block"
    selector2.style.setProperty('--after', 'block')
    right2.style.zIndex = "5"
    left1.style.zIndex = "6"
})
left1.addEventListener("click", function(){
    range.style.backgroundColor = "rgb(223, 226, 226)"
    selector2.style.borderColor = "rgb(223, 226, 226)"
    x2.style.display = "block"
    check2.style.display = "none"
    selector2.style.setProperty('--after', 'none')
    right1.style.zIndex = "4"
    right2.style.zIndex = "3"
    right3.style.zIndex = "2"
    right4.style.zIndex = "1"
})
right2.addEventListener("click", function(){
    range2.style.backgroundColor = "rgb(151, 48, 247)"
    selector3.style.borderColor = "rgb(151, 48, 247)"
    x3.style.display = "none"
    check3.style.display = "block"
    selector3.style.setProperty('--after', 'block')
     right3.style.zIndex = "5"
     right4.style.zIndex = "4"
     right2.style.zIndex = "3"
     right1.style.zIndex = "2"
     left2.style.zIndex = "4"
     left1.style.zIndex = "3"
     left3.style.zIndex = "2"
     left4.style.zIndex = "1"
})
left2.addEventListener("click", function(){
    range2.style.backgroundColor = "rgb(223, 226, 226)"
    selector3.style.borderColor = "rgb(223, 226, 226)"
    x3.style.display = "block"
    check3.style.display = "none"
    selector3.style.setProperty('--after', 'none')
    right2.style.zIndex = "8"
    right1.style.zIndex = "7"
    right3.style.zIndex = "6"
    right4.style.zIndex = "5"
    left1.style.zIndex = "4"
     left2.style.zIndex = "3"
     left3.style.zIndex = "2"
     left4.style.zIndex = "1"
})
right3.addEventListener("click", function(){
    range3.style.backgroundColor = "rgb(151, 48, 247)"
    selector4.style.borderColor = "rgb(151, 48, 247)"
    x4.style.display = "none"
    check4.style.display = "block"
    selector4.style.setProperty('--after', 'block')
     right4.style.zIndex = "8"
     right3.style.zIndex = "7"
     right2.style.zIndex = "6"
     right1.style.zIndex = "5"
     left1.style.zIndex = "3"
     left2.style.zIndex = "1"
     left3.style.zIndex = "4"
     left4.style.zIndex = "2"
})
left3.addEventListener("click", function(){
    range3.style.backgroundColor = "rgb(223, 226, 226)"
    selector4.style.borderColor = "rgb(223, 226, 226)"
    x4.style.display = "block"
    check4.style.display = "none"
    selector4.style.setProperty('--after', 'none')
     right2.style.zIndex = "7"
     right1.style.zIndex = "8"
     right3.style.zIndex = "9"
     right4.style.zIndex = "6"
    left1.style.zIndex = "3"
    left2.style.zIndex = "4"
    left3.style.zIndex = "1"
    left4.style.zIndex = "2"
})
right4.addEventListener("click", function(){
    range4.style.backgroundColor = "rgb(151, 48, 247)"
    selector5.style.borderColor = "rgb(151, 48, 247)"
    x5.style.display = "none"
    check5.style.display = "block"
    selector5.style.setProperty('--after', 'block')
    left1.style.zIndex = "3"
    left2.style.zIndex = "2"
    left3.style.zIndex = "1"
    left4.style.zIndex = "4"
})
left4.addEventListener("click", function(){
    range4.style.backgroundColor = "rgb(223, 226, 226)"
    selector5.style.borderColor = "rgb(223, 226, 226)"
    x5.style.display = "block"
    check5.style.display = "none"
    selector5.style.setProperty('--after', 'none')
    left1.style.zIndex = "3"
    left2.style.zIndex = "2"
    left3.style.zIndex = "4"
    left4.style.zIndex = "1"
})