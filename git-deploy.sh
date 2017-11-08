#!/bin/bash

git checkout develop

# cd ./client && ng build --prod

# if [[ $? != 0 ]]; then
# 	echo "Error ng build --prod"
# 	exit -1
# fi

# cd ..

git add * && git add .*

git commit -m "$1"

git push origin develop

git checkout master

git merge develop

git push origin master

git checkout develop

echo "Successful Deployment"


