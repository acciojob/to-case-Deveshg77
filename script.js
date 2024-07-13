function toCase(text) {
    var lowerCaseStr = text.toLowerCase();
    var upperCaseStr = text.toUpperCase();
    var result = lowerCaseStr + "-" + upperCaseStr;
    return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
