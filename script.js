var redInput = document.getElementById("red");
var greenInput = document.getElementById("green");
var blueInput = document.getElementById("blue");
var colorBox = document.getElementById("colorBox");
var hexColor = document.getElementById("hex-color");

function changeColor() {
  var red = redInput.value;
  var green = greenInput.value;
  var blue = blueInput.value;
  colorBox.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  hexColor.innerHTML = rgbToHex(colorBox.style.backgroundColor);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var hex = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
    return hex;
}
function copyHex() {
  var copyText = document.getElementById("hex-color").innerHTML;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied the hex color: " + copyText);
  }, (err) => {
    console.error('Failed to copy: ', err);
  });
}
