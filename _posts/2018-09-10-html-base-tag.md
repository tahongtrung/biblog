---
layout: post
title: Html base tag
tags: [html,base,tag]
---

/by Kezz Bracey20 Jun 2014/

The `<base>` tag in HTML is a relatively little known element, having become a fully fledged part of HTML5 quite recently. It enables you to do two things:
1. Set any URL you choose as the base for all relative URLs.
2. Set default link targets.

###The Base-ics
The `<base>` element is defined in the `<head>` section and you can only use it once per document. You should place it as early as possible in your head section so you can use it from that point on. Its two possible attributes are `href` and `target`. You can use either of these attributes alone or both at once.

Example 1: Asset Loading Shortcut

Let's say you have a site which stores all its images and CSS in a folder named "assets". You might define your `<base>` tag like so:
```html
<head>
    <base href="http://www.myepicsite.com/assets/">
</head>
```

This would then allow you to load in any images or CSS like this:
```html
<head>
    <base href="http://www.myepicsite.com/assets/">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <img src="image01.png" />
</body>
```

The link to `style.css` would resolve to `http://www.myepicsite.com/assets/style.css` and `image01.png` would load from `http://www.myepicsite.com/assets/image01.png`.

Example 2: Internal Page URLs


You might set your base URL like this:

What if you have a top level domain which redirects to something like `http://thisrocks.com/app/` and all internal links need to include `app/` in their URLs.

You might set your base URL like this:
```html
<base href="http://thisrocks.com/app/">
```

From there whenever you wanted to link from one internal page to another you could simply use:
```html
<a href="anotherpage.htm">LINK</a>
```

This link would resolve to `http://thisrocks.com/app/anotherpage.htm`.

Example 3: Default Link Target

You can also use `<base>` to set the default target for all links on your page. If you were to use:
```html
<base target="_blank">
```

...any link that didn't explicitly set its own target would open in a new window. You can use the target attribute with or without an accompanying href attribute.

This functionality could potentially be useful for content loaded in via an iFrame, as you would be able to automatically have all links therein targeted to the parent frame.

###Drawbacks

While the `<base>` url can be handy, its drawbacks center around the fact that after defining it once you're stuck with it. You can only use it in a single way and it will then affect all URLs. Wherever you don't want to use the defaults set in your `<base>` tag you have to specifically override them.

Should you use it to resolve to your `assets` folder as we did above, and you later wanted to link from one page of your site to another, you couldn't do so with the common HTML of `<a href="page.html">Page</a>`.

This is because with the base URL being `http://www.myepicsite.com/assets/` your visitors would be sent to `http://www.myepicsite.com/assets/page.html`.

As such you would have to override your `<base>` tag settings by using the absolute URL instead, i.e. `<a href="http://www.myepicsite.com/page.html">Page</a>`.

In-Page Anchors
When using `<base>` you can also run into problems linking to in-page anchors.

Normally, a link such as `<a href="#top">Back to Top</a>` would keep you on the same page but skip to the location of an element bearing `id="top"`, e.g. it would resolve to `http://thisrocks.com/app/article.html#top`.

However if you're using a `<base>` tag with an `href` attribute you'd instead be sent to the base URL with `#top` appended to the end, e.g. `http://thisrocks.com/app/#top`.

Again, in this case you'd have to override the defaults set in your `<base>` tag by specifying the page you want your link to be relative to, e.g. `<a href="article.html#top">Back to Top</a>`.

###Where `<base>` Works Best

The `<base>` tag is best used in a scenario where you know you'll be able to exert complete control over the use of all URLs, i.e. you know you'll be able to override the defaults as required. If you're creating a theme for a CMS where there are many unknown variables it's probably a good idea to leave `<base>` out of the mix.

However, if you're building a static HTML site `<base>` can be very helpful. This is the case even more so if you're using a templating language such as Jade or Handlebars that will let you place shortcuts like `<a href="{url}#top">Back to Top</a>`, so if you need to override default settings it's still quick and easy.

If you have a good idea what your project's content will be, and its use of URLs and links is fully under your control, you might find the `<base>` tag saves you a lot of time.

Read more about `<base>` at the W3C wiki and HTML5 spec:

-[http://www.w3.org/wiki/HTML/Elements/base](http://www.w3.org/wiki/HTML/Elements/base)

-[http://www.w3.org/TR/html5/document-metadata.html#the-base-element](http://www.w3.org/TR/html5/document-metadata.html#the-base-element)

[Link gốc](https://webdesign.tutsplus.com/articles/quick-tip-set-relative-urls-with-the-base-tag--cms-21399)