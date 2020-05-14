var a = "2";
console.log(a);

var a = "2"
console.log("The value of 'a' is " + a)

var b = 3
console.log(b);

console.log(typeof(a))
console.log(typeof(b))

var a = 2;
var b = 3;

if ((typeof(a) === "number") && (typeof(b) === "number")) {
    var c = a + b;
    c = "The value of c is " + c;
} else {
    var c = "'a' and 'b' both need to be numbers";
}
console.log(c);

var c = a + 3;
console.log(c);