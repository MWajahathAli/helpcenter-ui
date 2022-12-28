#!/bin/sh -l
echo "Started: $0"
echo "npm start Info."
whoami
npm --version

echo "-------------------------------------------------------------------"
node index.js
ret=$?
echo "-------------------------------------------------------------------"

echo "End executing "

if [ $ret -ne 0 ] ; then
   echo "Execution failed for the command"
   exit 1
fi
