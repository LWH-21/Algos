---
layout: default
lang : en
ref : home
title: Home
date: 2021-11-20
custom_css: https://cdn.metroui.org.ua/v4/css/metro-all.min.css
custom_js: https://cdn.metroui.org.ua/v4/js/metro.min.js
---

<div class="tiles-grid w3-margin-top w3-margin-bottom w3-margin-left">
  
     {% assign pages=site.pages | where:"ref", "home" | sort: 'lang' %}
    {% for p in pages %}         
     {% if p.lang == page.lang %}
     <div data-role="tile" data-size="small" class="col-1 row-1" style="background-color: #4a00b3"><a href="{{ p.url| relative_url }}" class="w3-bar-item w3-button"><i class="fa fa-home fa-2x"></i></a> </div>
      {% break %}
     {% endif %}
    {% endfor %}  
  
  
    
    <div data-role="tile" data-size="small" class="col-2 row-1 bg-red">Home</div>
    <div data-role="tile" data-size="small" class="col-1 row-2">Inicio</div>
    <div data-role="tile" data-size="small" class="col-2 row-2">FR</div>
    <div data-role="tile" data-size="medium">A propos</div>
    <div data-role="tile" data-size="wide">Catégories tri</div>
	
    <div data-role="tile" data-size="large">Dernier article</div>
    <div data-role="tile" data-size="large">article n° 2</div>
    <div data-role="tile" data-size="large">article n° 3</div>
	<div data-role="tile" data-size="medium">article n° 4</div>
	<div data-role="tile" data-size="medium">article n° 5</div>
</div>
