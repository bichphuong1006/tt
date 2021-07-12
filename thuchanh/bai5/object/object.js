var users = {
    user : {username: 'user9110252username', genrePref: 'user9110252genre'},
    jon : {username: 'Jon', genrePref: 'rock'},
    lucy : {username: 'Lucy', genrePref: 'pop'},
    mike : {username: 'Mike', genrePref: 'rock'},
    luke : {username: 'Luke', genrePref: 'house'},
    james : {username: 'James', genrePref: 'house'},
    dave : {username: 'Dave', genrePref: 'bass'},
    sarah : {username: 'Sarah', genrePref: 'country'},
    natalie : {username: 'Natalie', genrePref: 'bass'}
};
let text1 = "";
let text2 = "";
let array1 = [];
let array2 = [];
let a = 0;
let b = 0;
for (let i in users) {
    if (users[i].genrePref == "rock") {
        array1[a] = users[i].username;
        a++;
    } else {
        array2[b] = users[i].username;
        b++;
    }
}
let n = array1.length;
let m = array2.length;
for (a = 0;a < n - 1; a++) {
    text1 += array1[a] + ", ";
}
text1 += array1[n-1] + " là rock band.";
for (b = 0;b < m - 1; b++) {
    text2 +=  array2[b] + ", ";
}
text2 += array2[m-1] + " không là rock band.";
document.getElementById("t1").innerHTML = text1;
document.getElementById("t2").innerHTML = text2;

