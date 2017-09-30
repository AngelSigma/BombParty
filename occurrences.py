import os, unicodedata, string
from itertools import groupby

def word_frequencies(content, blacklist):
    sorted_words = sorted(word \
                        for word in content.replace('"', '').split() \
                            if word not in blacklist)
    return ((len(list(group)), word) for word, group in groupby(sorted_words))

if __name__ == "__main__":
	try :
		# on ouvre le dico complet en lecture
		fichier = open("nombres_occ.txt", "r")
		#cat /dev/urandom | tr -dc '0-9' | fold -w 3 | head -n 1000 > nombres_occ.txt
		taille_fichier = os.path.getsize("nombres_occ.txt")
		dictionnaire = fichier.read(taille_fichier).decode('utf8')
		black = ['[', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']
		for count, word in word_frequencies(dictionnaire, black) :
			print "%s %s" % (count, word)
	except Exception, message :
		# si erreur
		print message
