let string, newString;

string = "Sometimes the same is different";

newString = string
    .replace("is", "not is")
    .concat(" actually")
    .toUpperCase()
    .replace(/ /g, "\n")
    .slice(10)

console.log(newString)