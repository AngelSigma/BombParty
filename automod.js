modlist = ["twitter:2612276544", "ID"] //add or remove id players
channel.socket.on("addUser", function (e)
{
	if(modlist.indexOf(e.authId) != -1)
		channel.socket.emit("modUser", {authId:e.authId, displayName:e.displayName});
});