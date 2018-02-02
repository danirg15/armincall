#!/bin/bash

git checkout develop

git add * && git add .*

git commit -m "$1"

git push origin develop

git checkout master

git merge develop

git push origin master

git checkout develop

echo "Successful Deployment"


