---
layout: default
title: Blog
---
# Posts

{% for post in site.posts %}
<hr>
<h3><a href="{{ post.url | prepend: site.bseurl }}">{{ post.title }}</a></h3>
{% endfor %}
<hr>