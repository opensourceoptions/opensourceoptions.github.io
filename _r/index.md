---
layout: default
title: R Tutorials
---
{% assign groups = site.r | group_by: "category" %}

{% for group in groups %}

<h1>{{ group.name }}</h1>

<ul>
{% for item in group.items %}
    {% if item.title != page.title %}
    <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>
    
{% endfor %}