let text = "Primitive values, like \"John Doe\", cannot have properties or methods (because they are not objects).\n" +
    "\n" +
    "But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties";
let text1 = "Hoa";
let text2 = "          Hoa            Tim               ";
let text3 = text1.concat(" ", text2);
let text4 = "7";
let text5 = "h,e,l,l,o";
// const a = text5.split("");
const b = text5.split(",");
console.log();
document.getElementById("text").innerHTML = text; //hiển thị chuỗi đầu vào
document.getElementById("length").innerHTML = "Độ dài chuỗi = " + text.length; //lấy độ dài chuỗi
document.getElementById("slice").innerHTML = "Cắt chuỗi slice = " + text.slice(0, 20); //cắt chuỗi
document.getElementById("slice1").innerHTML = "Cắt chuỗi slice = " + text.slice(-11, -1);//cắt chuỗi
document.getElementById("slice2").innerHTML = "Cắt chuỗi slice = " + text.slice(247); //cắt chuỗi bắt đầu từ vị trí x đến hết
document.getElementById("substring").innerHTML = "Cắt chuỗi substring = " + text.substring(30, 40); //cắt chuỗi, ko đc sử dụng chỉ số âm
document.getElementById("substr").innerHTML = "Cắt chuỗi substr = " + text.substr(10, 6); //cắt chuỗi từ vị trí x với độ dài y kí tự
document.getElementById("replace").innerHTML = "Thay thế chuỗi = " + text.replace("John Doe", "William");//Thay thế kí tự trong chuỗi, chỉ thay đc kí tự đầu tiên khớp
document.getElementById("replace1").innerHTML = "Thay thế chuỗi = " + text.replace("JavaScript", "JS"); //Thay thế kí tự trong chuỗi, chỉ thay đc kí tự đầu tiên khớp
document.getElementById("replace2").innerHTML = "Thay thế chuỗi = " + text.replace(/JAVASCRIPT/i, "JS"); //Thay thế ko phân biệt chữ hoa, thường
document.getElementById("replace3").innerHTML = "Thay thế chuỗi = " + text.replace(/JavaScript/g, "JS"); //thay thế toàn bộ từ cần thay
document.getElementById("upper").innerHTML = "Chuỗi viết hoa = " + text.toUpperCase();//viết hoa toàn bộ chuỗi
document.getElementById("lower").innerHTML = "Chuỗi viết thường = " + text.toLowerCase();//viết thường toàn bộ chuỗi
document.getElementById("concat").innerHTML = "Nối chuỗi = " + text3;//nối các chuỗi với nhau
document.getElementById("trim").innerHTML = "Xóa khoảng trắng = " + text2;//xóa các khoảng trắng ko cần thiết trong chuỗi
document.getElementById("trim1").innerHTML = "Xóa khoảng trắng = " + text2.trimStart();//xóa các khoảng trắng bắt đầu
document.getElementById("pads").innerHTML = "PadStart = " + text1.padStart(7, 1);//thay thế các vị trí còn thừa ở đầu chuỗi, chuỗi mới có độ dài x
document.getElementById("pade").innerHTML = "PadEnd = " + text4.padEnd(8, 2);//thay thế các vị trí còn thừa ở cuối chuỗi, chuỗi mới có độ dài x
document.getElementById("charAt").innerHTML = "CharAt = " + text1.charAt(1);//lấy kí tự thứ x
document.getElementById("split").innerHTML = "Split = " + text5.split("");
document.getElementById("split1").innerHTML = "Split = " + b[3];

function checkName()
{
    var name  = document.getElementById("name").value;
    alert(name.trim());
}
