# -*- coding: utf8 -*-

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Usage : python unique_script.py
Objectif : afficher les n-uplets uniques d'une liste de mots
Exemples : unique_dico.txt (input) et unique_resultat.txt (output)

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""

import os, unicodedata, re, string
from itertools import product
from string import ascii_uppercase

try :
	# on ouvre le dico complet en lecture
	fichier = open("unique_dico.txt", "r")
	taille_fichier = os.path.getsize("unique_dico.txt")
	# on stocke son contenu dans la variable dictionnaire
	dictionnaire = fichier.read(taille_fichier).decode('utf8')
except Exception, message :
	# si erreur
	print message

try :
	# on retire les accents et on passe tout en majuscules
	sans_accents = unicodedata.normalize('NFKD', dictionnaire).encode('utf8', 'ignore')
	dictionnaire = sans_accents.upper()

	# pour chaque syllabe de deux lettres (AA..ZZ)
	for combo in product(ascii_uppercase, repeat=2) :
		# on la stocke dans la variable duet
		duet = ''.join(combo)

		pattern = r'[A-Za-z0-9_/\\-]*' + re.escape(duet) + r'[A-Za-z0-9_/\\-]*'
		
		# on comptabilise le nombre de mots comportant la syllabe "duet"
		results = re.findall(pattern, dictionnaire, re.UNICODE)
		nombre_nuplets = len(results)

		# on affiche les n-uplets uniques
		if(len(results) == 1) :
			print duet, results, str(nombre_nuplets)

except Exception, message :
	# si erreur
	print message
