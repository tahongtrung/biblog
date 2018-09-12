---
layout: post
title: Failed to enable APR_TCP_DEFER_ACCEPT
tags: [ubuntu,fixbug,linux]
---

https://github.com/Microsoft/WSL/issues/1953

Add the following line to the end of the /etc/apache2/apache2.conf file:

AcceptFilter http none