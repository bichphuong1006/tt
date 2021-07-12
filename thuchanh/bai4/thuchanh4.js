function getNumberN() {
    var inputn = document.getElementById('number_n').value;//lấy giá trị n
    var sum = 0;
    var count = 0;
    for (var i = 0; i <= inputn; i++) {
        if (i % 2 == 0) {
            sum += i;
            count++;
        }
    }
    document.getElementById('tongchan').innerHTML = "Tổng số chẵn là: " + sum;
    document.getElementById('sochan').innerHTML = "Count = " + count;
}

function getNumberM() {
    var inputm = document.getElementById('number_m').value;//lấy giá trị m
    var suml = 0;
    var countl = 0;
    for (var j = 0; j <= inputm; j++) {
        if (j % 2 != 0) {
            suml += j;
            countl++;
        }
    }
    document.getElementById('tongle').innerHTML = "Tổng số lẻ là: " + suml;
    document.getElementById('sole').innerHTML = "Count = " + countl;
}
