function toCase(str) {
  // write your code here
	String lowerCaseStr = str.toLowerCase();
    String upperCaseStr = str.toUpperCase();
    String result = lowerCaseStr + "-" + upperCaseStr;
	return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
