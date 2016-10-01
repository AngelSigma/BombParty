var trouve = 0;
guess = "XAVIER";

channel.socket.on("winWord", function (guy)
{
	var joueurId = guy.playerAuthId;
	var joueur = channel.data.actorsByAuthId[joueurId];
	var lastmot = joueur.lastWord.toUpperCase();
	
	if(guess == lastmot && !trouve)
	{
		channel.socket.emit("chatMessage", "Good job "+joueur.displayName+"! ("+lastmot+")");
		channel.socket.emit("modUser", {authId:joueurId, displayName:joueur.displayName});
		trouve = 1;
	}
})