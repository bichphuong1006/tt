function swapa() {
    var a = 5;
    var b = 6;
    var c;
    c = b;
    b = a;
    a = c;
    document.getElementById('a').innerHTML = "a = " + a;
    document.getElementById('b').innerHTML = "b = " + b;
}
function swapb() {
    var a = 5;
    var b = 6;
    a = a + b;
    b = a - b;
    a = a - b;
    document.getElementById('a1').innerHTML = "a = " + a;
    document.getElementById('b1').innerHTML = "b = " + b;
}