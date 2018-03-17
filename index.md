---
layout: default
title: "Open Source Options"
---
# Welcome!
Thank you for visiting Open Source Options (OSO)! We provide free tutorials related to programming and data analysis. Our main objective is to teach you how to use free tools to accomplish whatever your task may be. We specialize in GIS and data science, though we produce material on a variety of topics.

Visit the [tutorials](http://opensourceoptions.com/tutorials) page to see the tutorials we offer. Each tutorial is associated with a [GitHub](https://github.com/opensourceoptions) repository so you have access to our code. Click on the <img class="in-text" src="{{ 'assets/img/github_repo.svg' | relative_url }}"> 
link at the top of the tutorial page to access the repository. 

Subscribe to our [YouTube Channel](https://youtube.com/c/KonradHafen) to get the latest video tutorials and course notificaitons. 

<h1 class="home"><a href="/blog">Recent Posts</a></h1>

{% for post in site.posts limit: 3 %}
<hr>
<h3><a href="{{ post.url | prepend: site.bseurl }}">{{ post.title }}</a></h3>
{{ post.excerpt }}
{% endfor %}
<hr>

# Questions?
Send inquiries to <mailto:contact@opensourceoptions.com>.

