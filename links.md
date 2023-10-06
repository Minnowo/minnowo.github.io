---
layout: page
title: Links
---

<style>
  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .dont_truncate {
    white-space: normal;
  }
</style>

{% assign current_alph = "" %}
{% assign is_first = true %}

<ul>
{% for link in site.links %}

  {% if link.hidden == null or link.hidden == false %}

    {% assign alph_group = link.title | strip | slice: 0, 1 | upcase %}

    {% if alph_group != current_alph %}
      {% assign current_alph = alph_group %}

<li style="display: inline">
  <a href="#{{current_alph}}"> {{current_alph}} </a>
&nbsp; &nbsp;
</li>

    {% endif %}
  {% endif %}
{% endfor %}
    
</ul>

    
{% for link in site.links %}

  {% if link.hidden == null or link.hidden == false %}

    {% assign alph_group = link.title | strip | slice: 0, 1 | upcase %}

    {% if alph_group != current_alph %}
      {% assign current_alph = alph_group %}
      
      {% if is_first == true %}
        {% assign is_first = false %}
        
      {% else %}
<br>
      {% endif %}

<h4 id="{{current_alph}}" style="float:middle">[{{current_alph}}]</h4>
<br>

    {% endif %}
    

  <div class="link-item">
    <h2 id="{{ link.title | slugify }}">
      <a href="#{{ link.title | slugify }}">#</a>
      {{ link.title }}

    </h2>

    <p>{{ link.description }}</p>

    <ul>
       {% assign url_count = link.urls.size | minus: 1 %}

       {% for i in (0..url_count) %}
        {% assign prefix = link.url_prefix[i] %}
        {% assign url = link.urls[i] %}
        {% assign desc = link.desc[i] %}

        <li class="truncate">
          <strong>{{ prefix }}</strong>  
          <a  href="{{ url }}">{{ url }}</a>
          
          {% if desc %}

            <p class="dont_truncate"> {{ desc }}</p>

          {% endif %}
        </li>
      {% endfor %} 
    </ul>
   


    <hr style="background-color: rgba(255, 255, 255, 0.5)">
  </div>

  {% endif %}

{% endfor %}
