---
layout: post
title: Laravel Shared Hosting
excerpt: Vì đi support các bạn quá nhiều cái lỗi này và mình cũng có hứa là sẽ viết một bài để khỏi đi support dạo nữa mà dạo này bận rộn quá nên chưa viết được nay thì viết bất chấp luôn.
---

## 000webhost.com

![https://www.000webhost.com](https://i.imgur.com/JCzgVq8.png)

> #fixbug: laravel shared host
>
>Vì đi support các bạn quá nhiều cái lỗi này và mình cũng có hứa là sẽ viết một bài để khỏi đi support dạo nữa mà dạo này bận rộn quá nên chưa viết được nay thì viết bất chấp luôn.

Nếu bạn đang xài VPS thì đừng làm theo cách này (đừng tự bóp  dái)
>Post này cũng dành cho các host mà bạn nghĩ nó như 000webhost nói chung là `shared host` đó.



+ **1. Nếu bạn chưa up source lên host** 

Các bước bạn cần làm là:
  + Dừng server lại nha
  + Clear cache này nọ các kiểu nói chung là xóa sạch cache
  + Xóa thư mục chứa cache `/bootstrap/cache/*`
  + Config file `.env` đúng với trên host thật
  + Rồi up lên đi. Hên xuôi à! bình thường ai ăn ở tốt thì work luôn khỏi next step 2. :D

+ **2. Nếu bạn trót dại up source lên host roài! =='**
  + Bật debug mode = true lên (`config/app.php`) chứ không phải `.env`
  + vcvcvxcvxvxc

<p align="center" class="pre">
JS can do everything but take care on how to handle exceptions in your code. Otherwise they go crazy like the panda above.
</p>


