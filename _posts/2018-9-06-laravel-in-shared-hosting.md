---
layout: post
title: Laravel Shared Hosting
excerpt: Vì đi support các bạn khá nhiều cái lỗi này và mình cũng có hứa là sẽ viết một bài để khỏi đi support dạo ....
categories: [Web,Laravel]
tags: laravel
---


<a target="_blank" href="https://www.kodementor.com/how-to-deploy-laravel-project-in-000webhost/">How to deploy laravel app on 000webhost</a>

![https://www.000webhost.com](https://i.imgur.com/JCzgVq8.png)

> #fixbug: laravel shared host
>
>Vì đi support các bạn khá nhiều cái lỗi này và mình cũng có hứa là sẽ viết một bài để khỏi đi support dạo nữa mà dạo này bận rộn quá nên chưa viết được nay thì viết bất chấp luôn.

Nếu bạn đang xài VPS thì đừng làm theo cách này (đừng tự bóp  dái)
>Post này cũng dành cho các host mà bạn nghĩ nó như 000webhost nói chung là `shared host` đó.

>Lưu ý toàn bộ config trong file `.env` không có tác dụng trên shared host 000webhost này, nên khỏi up cho nhẹ host cũng được!

1. Nếu bạn chưa up source lên host:
+ Dừng server lại nha
+ Clear cache này nọ các kiểu nói chung là xóa sạch cache
`php artisan config:clear` `php artisan cache:clear`
+ Xóa thư mục chứa cache `/bootstrap/cache/*`
+ Config file `.env` đúng với trên host thật
+ Rồi up lên đi. Hên xuôi à! bình thường ai ăn ở tốt thì work luôn khỏi next step 2. :D
2. Nếu bạn trót dại up source lên host roài! =='
+ Bật debug mode = true lên (`config/app.php`) chứ không phải `.env`
	![](https://i.imgur.com/bdL9bpi.png)
	=> Thêm như này nè `public_html/config/app.php`
+ Set app key trong `config/app.php` luôn như đã nói ở trên `.env` là phế phẩm mà.
	![](https://i.imgur.com/rKkXfcP.png)
	=> nhớ copy đủ cả prefix `base:64...`
+ Cấu hình database trong `config/database.php` đa số xài mysql thì config như sau
	![](https://i.imgur.com/g1IUDcQ.png)
	=> lưu ý có 1 option `'options'   => [PDO::ATTR_EMULATE_PREPARES => true]` cực kì quan trọng nhớ thêm vào
3. Phương pháp ăn liền gặp đâu đái đấy! nhầm,, xử đấy.
	![](https://i.imgur.com/bifHN3c.png)
	=> Thử gõ thêm `/public/` phía sau url xem nếu work thì copy 2 file `index.php` và `.htaccess` ra ngoài.
	=> bonus: nếu lười có thể copy 2 file đấy ở này [.htaccess](https://gist.github.com/trung2nd/9f4cbe15ca971433fa4ba89b671eff3a){:target="_blank"} [index.php](https://gist.github.com/trung2nd/0b00b5f2753318558c7cd521fbbfb424){:target="_blank"}
	
	![](https://i.imgur.com/LJtSv7S.png)
	=> Thêm `/public/` phía sau mà ra này thì chịu luôn. Nói chớ bật debug mode = true lên giùm cái chứ sao mà biết nó lỗi gì!
	
	![](https://i.imgur.com/scqKYXR.png)
	=> Chưa set app key trong `config/app.php`

	![](https://i.imgur.com/1bqLuXo.png)
	=> Chưa config/config sai database trong `config/database.php`

	![](https://i.imgur.com/hdWlHs5.png)
	=> Thiếu option trong config db `'options'   => [PDO::ATTR_EMULATE_PREPARES => true]`

	![](https://i.imgur.com/xSLMLDr.png)
	=> Chưa import data cho database.
	
	![](https://i.imgur.com/AXOJt6f.png)
	=> các lỗi còn lại có liên quan đến thư mục `vender` (up thiếu file trong này rồi up lại vender thôi) hoặc syntax lạ -> thường là do k tương thích phiên bản php, các bạn check bằng cách new 1 file info.php trong `public_html` của host rồi phpinfo làm tương tự với local của bạn check xem 2 phiên bản php có cùng nhau không hoặc bạn nâng php trên host lên hoặc hạ laravel xuống!
	
Nếu có khó khăn gì trong quá trình fix bug vui lòng để lại comment để được support ^^!
<!-- <p align="center" class="pre">
JS can do everything but take care on how to handle exceptions in your code. Otherwise they go crazy like the panda above.
</p> -->


