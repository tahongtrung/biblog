now=$(date +"%T")
day=$(date -d "$date1" +%A)
DATE=$(date +%F)
#`date +%Y-%m-%d`
git add . && git commit -m 'update bilog $now $day $DATE' && git push origin master

# day=$(date -d "$date1" +%A)
# echo $day #thursday

# RT=$(date +%F)
# echo $RT

# DATE=$(date +%-d)
# echo $DATE
# M=$(date +%-m)
# echo $M
# Y=$(date +%-Y)
# echo $Y
# DOW=$(date +%u)
# echo $DOW
# DATE=`date +%Y-%m-%d`
# echo $DATE