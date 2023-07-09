---
layout: page
title: Links
---

<style>
  .truncate {
    /* display: inline-block; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* max-width: 400px;  */
    max-width: 100%;
  }
</style>

{% for link in site.links %}
  <div class="link-item">
    <h2>
      <a href="#{{ link.title | slugify }}">#</a>
      {{ link.title }}

    </h2>

    <p>{{ link.description }}</p>

    <ul>
       {% assign url_count = link.urls.size | minus: 1 %}

       {% for i in (0..url_count) %}
        {% assign prefix = link.url_prefix[i] %}
        {% assign url = link.urls[i] %}

        <li class="truncate">
          <strong>{{ prefix }}</strong>  
          <a  href="{{ url }}">{{ url }}</a>
        </li>
      {% endfor %} 
    </ul>
   


    <hr style="background-color: rgba(255, 255, 255, 0.5)">
  </div>
{% endfor %}
