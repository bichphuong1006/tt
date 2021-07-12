function scase() {
    var x = document.getElementById("sc").value;
    let text;
    switch (x) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            text = "Tháng 1 có 31 ngày";
            break;
        case "2":
            text = "Tháng 2 có 28 ngày";
            break;
        case "6":
        case "9":
        case "11":
            text = "Tháng 4 có 30 ngày";
            break;
        default:
            text = "Chỉ tồn tại 12 tháng";
    }
    document.getElementById("sch").innerHTML = text;
}

