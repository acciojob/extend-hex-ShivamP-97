const extendHex = (shortHex) => {
	let hex=shortHex.replace(/^#/,"");

	let fullHex=hex
	.split("")
    .map(c=>c+c)
    .join("");

	return "#"+fullHex.toUpperCase();

};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
