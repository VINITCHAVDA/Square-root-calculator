function squar() {
  var number = document.getElementById("number").value;
  var btn = Math.sqrt(number);
  document.getElementById("p1").innerHTML =
    "the square root of " + number + "is:" + btn;
}
