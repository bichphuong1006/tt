function checkName() {
    var name = document.getElementById("ten").value.toLowerCase();
    if (name == "hiếu") {
        document.getElementById("check").innerHTML = "Người hướng dẫn";
    } else if (name == "an" || name == "phượng") {
        document.getElementById("check").innerHTML = "Thực tập sinh của a Hiếu";
    } else {
        document.getElementById("check").innerHTML = "Không phải thực tập sinh của a Hiếu";
    }
}
function checkValue() {
    var x = document.getElementById("value").value;
    if (x % 2 == 0) {
        document.getElementById("number").innerHTML = "Đây là số chẵn";
    } else {
        document.getElementById("number").innerHTML = "Đây là số lẻ";
    }
}