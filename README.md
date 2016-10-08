# BombParty
Some snippets I made since I play BombParty, the multiplayer word party game.

## AUTOJOIN
Le but est de rejoindre automatiquement une nouvelle partie, une fois la précédente terminée.

Il vous suffit tout simplement d'exécuter [le code du fichier autojoin.js](autojoin.js) dans le navigateur
([console](http://www.alsacreations.com/astuce/lire/1436-console-javascript.html) ou [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet)).

* L'événement endGame est appelé lorsqu'une partie se termine.
* channel.socket.emit("join"); simule le clic du bouton « Rejoindre la partie ».

## AUTOKICK
Il s'agit d'un snippet à base de whitelist (on interdit tout le monde par défaut, puis on autorise au cas par cas).

Le but est de kicker (et non bannir) automatiquement les personnes cliquant sur le bouton « Rejoindre la partie ». Les joueurs ne figurant pas dans la whitelist ne peuvent pas jouer, mais peuvent interagir dans le chat, et suivre la partie en tant que spectateurs.

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

## AUTOMOD
Le [code du fichier automod.js](automod.js) reprend le même principe que l'autokick, à base de whitelist...

... à ceci près que les joueurs dans la « modlist » deviennent automatiquement modérateurs, lors de leur entrée sur le salon.

## AUTONEWWORDS

Les deux snippets [INIT](autonewwords_init.js) et [CHECK](autonewwords_check.js) permettent de récupérer, au fil de l'eau, les mots entrés par les joueurs de BombParty, et ainsi de constituer un dictionnaire de mots valides. Un tri est effectué pour supprimer les doublons, les occurrences d'un même mot proposé plusieurs fois.

INIT permet d'initialiser les variables (dictionnaires) et les fonctions (tri), et ne doit être exécuté qu'une seule fois, lors de l'entrée sur un salon par exemple. CHECK trie les mots entrés depuis la dernière utilisation d'INIT ou de CHECK, et permet de visualiser, dans la console du navigateur, la mise en place progressive du dictionnaire.

## HÔTE ET JOUEURS

Old good times. À l'époque où [l'overlay](https://github.com/MrInanimated/bp-overlay) n'existait pas encore, et où il était convenu, admis (à tort !) que l'hôte d'un salon était choisi aléatoirement par le serveur, un simple clic sur le bookmarklet [joueurs.js](joueurs.js) permettait d'afficher la liste des joueurs, tandis que [next_host.js](next_host.js) affichait le prochain hôte d'un salon.

## SYLLABES UNIQUES
Le script Python [unique_script.py](unique_script.py) permet d'extraire les n-uplets / syllabes uniques à partir d'un texte ou d'un dictionnaire.
