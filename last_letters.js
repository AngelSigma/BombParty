function isAlive(element)
{
  return element.state == "alive";
}

var lastletters = "";
var usersBP = channel.data.actors.filter(isAlive);
for(i in usersBP)
{
	lastletters += usersBP[i].displayName;
	lastletters += " : " + usersBP[i].lockedLetters.toString().toUpperCase();
	lastletters += "\r\n"; 
}

console.log(lastletters);
