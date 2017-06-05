guess = ["EDF", "CERFVOLANT", "BREJNEV", "AULX", "COMMONWEALTH", "LOUPGAROU"]

channel.socket.on('setActivePlayerIndex', function solution()
{
    syllabe = channel.data.wordRoot;
    if (window.app.user.authId == channel.data.actors[channel.data.activePlayerIndex].authId)
	{
		guess.forEach(function(abcd){ if (abcd.indexOf(syllabe)>-1) { console.log(abcd);}})
    }
});

channel.socket.on('winWord', function cleanup()
{
	lastword = channel.data.actors[channel.data.activePlayerIndex].lastWord;
	inorderw = guess.indexOf(lastword)
	if (inorderw !== -1) { guess.splice(inorderw, 1); }
});