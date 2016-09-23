whitelist = ["twitter:2612276544", "ID"] //add or remove id players
channel.socket.on("addActor", function (e)
{
	if(whitelist.indexOf(e.authId) == -1)
		channel.socket.emit("banUser", {authId:e.authId, displayName:e.displayName});
		setTimeout(function(){}, 2000);
		channel.socket.emit("unbanUser", e.authId);
});
