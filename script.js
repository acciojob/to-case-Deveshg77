function toCase(text) {
  // write your code here
	String lowerCaseStr = text.toLowerCase();
    String upperCaseStr = text.toUpperCase();
    String result = lowerCaseStr + "-" + upperCaseStr;
	return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
