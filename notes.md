---
layout: page
title: Notes 

---

<div class="page-content wc-container">
	<div class="post">
		<h1>Notes</h1>  
		<ul>
			{% for post in site.posts %}
              {% for tag in post.tags %}
                {% if tag == "note" %}
			      <li>
                   <div class="post-time">
                        <!-- <i class="fa fa-calendar-alt"></i> -->
                        {% include svg_cal.html %}
                        <time>{{ post.date | date: "%Y-%m-%d" }}</time>
                        <a href="{{ post.url | relative_url }}">
                          {{ post.title }}
                        </a>
                   </div>
                  </li>
                {% endif %}
			  {% endfor %}
			{% endfor %}
		</ul>
	</div>
</div>