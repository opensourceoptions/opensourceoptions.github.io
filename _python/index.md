---
layout: default
title: Python Tutorials
---
{% assign groups = site.python | group_by: "category" %}

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