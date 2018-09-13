now=$(date +"%T")

git add . && git commit -m 'update bilog $now date -d "$date1" +%A' && git push origin master