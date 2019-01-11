---
layout: post
title: Install Request Tracker 4 in ubuntu
tags: [ubuntu,linux]
---
#   Aim

Our aim is to install [Request Tracker (RT)](https://bestpractical.com/rt/) 4.4.2 on [Debian GNU/Linux](https://debian.org/) 8.6 with less pain

**Note:** This won't work with Debian GNU/Linux 9.x.


#   Problems

At the time of writing…

-   There is **no** nice and clean setup guide
-   There is **no** Debian package for RT's 4.4 branch
-   RT's README and its Makefile "help" are controversial
-   A typical installation often leads to Perl's CPAN dependency hell


#   Preparation

Install Debian GNU/Linux 8.6 or higher.

Install needed distribution packages:

~~~ {.bash}
sudo apt update
sudo apt install build-essential apache2 libapache2-mod-fcgid mariadb-server-10.0 mariadb-client-10.0 libssl-dev libexpat1-dev
~~~


#   Get it done

~~~ {.bash}
wget https://download.bestpractical.com/pub/rt/release/rt-4.4.2.tar.gz
tar xzvf rt-4.4.2.tar.gz
cd rt-4.4.2
./configure --with-web-user=www-data --with-web-group=www-data
sudo /usr/bin/perl -MCPAN -e shell # Quit with CTRL+D
sudo make testdeps
sudo make fixdeps # Press ENTER when needed
sudo make install
~~~

Test your installation with the built-in Web server: `sudo /opt/rt4/sbin/rt-server --port 8080`. Hit CTRL-C to stop the process.


#   Configure Apache Web server

We choose Apache2 Web Server and FastCGId. RT will be available under the URL `/rt`.

Edit RT's local configuration file `/opt/rt4/etc/RT_SiteConfig.d/myissues.pm`:

~~~ {.perl}
# sudo nano /opt/rt4/etc/RT_SiteConfig.d/myissues.pm
Set($WebPath, "/rt");
~~~

Create a new VirtualHost:

~~~
# sudo nano /etc/apache2/sites-available/myissues.conf
<VirtualHost *:80>
        ServerName myissues.example.com
        ServerAdmin webmaster@localhost

        DocumentRoot /var/www/html

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        AddDefaultCharset UTF-8

        ScriptAlias /rt /opt/rt4/sbin/rt-server.fcgi/

        <Location /rt>
                Require all granted
                Options +ExecCGI
                AddHandler fcgid-script fcgi
        </Location>
</VirtualHost>
~~~

Replace default VirtualHost with your new one and restart Apache Web server:

~~~ {.bash}
sudo a2dissite 000-default
sudo a2ensite myissues
sudo systemctl restart apache2.service
~~~

Open `http://myissues.example.com/rt/` (or something similar) in a Web browser to test everything runs smoothly.


#   Re-work

From RT's README:

-   Set up users, groups, queues, scrips and access control
-   Set up automated recurring tasks (cronjobs)
-   Configure the RT email gateway
-   Set up full text search
-   Set up automatic backups

…and keep your operating system clean and updated.


#   What's next?

Update/upgrade RT! Oh my gosh…


#   Sources that helped me

-   RT's [README](https://docs.bestpractical.com/rt/4.4.2/README.html)
-   RT's [Web deployment](https://docs.bestpractical.com/rt/4.4.2/web_deployment.html#mod_fastcgi)
-   CPAN Issue Tracker: [Bug #105189 for Net-SSLeay: Net::SSLeay fails to build on perl-5.22.0](https://rt.cpan.org/Public/Bug/Display.html?id=105189)
-   Stack Overflow: [How to install XML::Parser without expat-devel?](http://stackoverflow.com/questions/9693031/how-to-install-xmlparser-without-expat-devel)

note here: https://gist.github.com/trungx/f6533ec6a91b080e9951e04bead60b5a