#!/bin/bash

git checkout develop

cd ./client && ng build --prod && cd ..

if [[ $? != 0 ]]; then
	echo "Error ng build --prod"
	exit -1
fi

git add * && git add .*

git commit -m "build"

git push origin develop

git checkout master

git merge develop

git push origin master

git checkout develop