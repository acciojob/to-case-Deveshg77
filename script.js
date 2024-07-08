function toCase(text) {
  // write your code here
	String lowerCaseStr = str.toLowerCase();
    String upperCaseStr = str.toUpperCase();
    String result = lowerCaseStr + "-" + upperCaseStr;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
