let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')

b1.onclick=function(){
    one.style.display="none"
    two.style.display="none"
    three.style.display="block"
}
b2.onclick=function(){
    one.style.display="none"
    two.style.display="none"
    three.style.display="none"
    four.style.display="block"
}
b3.onclick=function(){
    one.style.display="none"
    two.style.display="none"
    three.style.display="none"
    four.style.display="none"
    five.style.display="block"
}
b0.onclick=function(){
    one.style.display="block"
    two.style.display="block"
    three.style.display="none"
    four.style.display="none"
    five.style.display="none"
}








