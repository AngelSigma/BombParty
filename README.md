# BombParty
Some snippets I made since I play BombParty, the multiplayer word party game.

## AUTOJOIN
Le but est de rejoindre automatiquement une nouvelle partie, une fois la précédente terminée.

Il vous suffit tout simplement d'exécuter [le code du fichier autojoin.js](autojoin.js) dans le navigateur (console ou bookmark).

* L'événement endGame est appelé lorsqu'une partie se termine.
* channel.socket.emit("join"); simule le clic du bouton « Rejoindre la partie ».

## SYLLABES UNIQUES
Le script Python [unique_script.py](unique_script.py) permet d'extraire les n-uplets / syllabes uniques à partir d'un texte ou d'un dictionnaire.
