# BombParty
Some snippets I made since I play BombParty, the multiplayer word party game.

## AUTOJOIN
Le but est de rejoindre automatiquement une nouvelle partie, une fois la précédente terminée.

Il vous suffit tout simplement d'exécuter [le code du fichier autojoin.js](autojoin.js) dans le navigateur
([console](http://www.alsacreations.com/astuce/lire/1436-console-javascript.html) ou [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet)).

* L'événement endGame est appelé lorsqu'une partie se termine.
* channel.socket.emit("join"); simule le clic du bouton « Rejoindre la partie ».

## AUTOKICK
Le but est de kicker (et non bannir) automatiquement les personnes cliquant sur le bouton « Rejoindre la partie ».

Celles et ceux « hors-jeu » peuvent interagir normalement dans le chat et suivre la partie en tant que spectateurs.

* Connectez-vous à BombParty avec le compte de votre choix.
* Créez un salon, puis [ouvrez la console de développement](http://www.alsacreations.com/astuce/lire/1436-console-javascript.html) de votre navigateur.
* Entrez la commande app.user.authId et notez soigneusement cette information.

Cette valeur n'est pas confidentielle, il s'agit d'un identifiant unique rattaché à votre compte.

À titre d'exemple, l'authId du compte Twitter utilisé pour me connecter à BombParty est "twitter:2612276544".

Le [code du fichier autokick.js](autokick.js) est détaillé ci-dessous :

* Le tableau whitelist doit contenir les authId des personnes autorisées à jouer.
* L'événement addActor est déclenché lorsque quelqu'un clique sur le bouton « Rejoindre la partie ».
* La variable e représente l'utilisateur qui a cliqué sur le bouton.
* Si l'identifiant de l'utilisateur en question n'est pas dans la whiteList, il est kické.

Complétez le tableau whitelist avec vos authId préalablement obtenus, et collez le code dans la console.


## SYLLABES UNIQUES
Le script Python [unique_script.py](unique_script.py) permet d'extraire les n-uplets / syllabes uniques à partir d'un texte ou d'un dictionnaire.
