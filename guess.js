var found = 0;
channel.socket.on("chatMessage", function parse(data)
{
	message = data.text;
	guess = ["xavier", "XAVIER"];
	auteur = data.userAuthId;
	nomauteur = channel.data.usersByAuthId[auteur].displayName;
	console.log(guess.indexOf(message));
	if(guess.indexOf(message) != -1 && !found)
	{
		channel.socket.emit("chatMessage", "Good job "+nomauteur+"! ("+guess[0]+")");
		channel.socket.emit("modUser", {authId:auteur, displayName:nomauteur});
		found = 1;
	}
})