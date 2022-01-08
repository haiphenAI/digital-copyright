#Simple script to grep github unames from txt file

import sys

file_name  = sys.argv[1]
f = open(file_name)
lines = f.readlines()
uname = [urls.split("/")[-2] for urls in lines]
names = open('names.txt','w')
for name in uname:
	names.write(name + "\n")
names.close()
