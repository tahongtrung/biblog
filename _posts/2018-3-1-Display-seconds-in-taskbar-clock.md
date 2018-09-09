---
layout: post
title: Display seconds in Taskbar Clock
tags: [windows,tips]
---
Users on Windows 10 v1607, can open Windows Registry, navigate to the following registry key 

<div style="text-align: center;">
	<img src="https://i.imgur.com/geWaupx.jpg">
</div>

`HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`

create a new REG_DWORD, name it ShowSecondsInSystemClock and give it a value of 1.

>source: [https://www.thewindowsclub.com/display-seconds-in-taskbar-clock-windows](https://www.thewindowsclub.com/display-seconds-in-taskbar-clock-windows){:target="_blank"} 