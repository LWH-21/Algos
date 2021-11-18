---
layout: default
lang : en
ref : home
title: Home
date: 2021-11-20
custom_css: https://cdn.metroui.org.ua/v4/css/metro-all.min.css
custom_js: https://cdn.metroui.org.ua/v4/js/metro.min.js
---

<div class="w3-content w3-metro-light-blue w3-margin-bottom w3-margin-top" style="max-width:1100px">
<div class="w3-third">

</div>
<div class="w3-rest">

<div class="tiles-grid w3-margin-top w3-margin-bottom w3-margin-left">
  
     {% assign pages=site.pages | where:"ref", "home" | sort: 'lang' %}
    {% for p in pages %}         
     {% if p.lang == page.lang %}
     <div data-role="tile" data-size="small" class="col-1 row-1" style="background-color: #4a00b3"><a href="{{ p.url| relative_url }}" class="w3-bar-item w3-button"><i class="fa fa-home fa-2x"></i></a> </div>
      {% break %}
     {% endif %}
    {% endfor %}   
	
{% assign pages=site.pages | where:"ref", page.ref | sort: 'lang' %}
{% for p in pages %}
     
    
      {% if p.lang != page.lang %}
       {% if p.lang == "en" %}
	<div data-role="tile" data-size="small" style="background-color: #4a00b3; text-align: center; vertical-align: middle;">
         <a href="{{ p.url | relative_url }}" > <img src="{{ '/assets/img/english.png' | relative_url }}" alt="English version" width="50" height="50" class="w3-bar-item"> </a> 
	</div>
       {% elsif p.lang == "es" %}
	<div data-role="tile" data-size="small" style="background-color: #4a00b3; padding: 10px;">
         <a href="{{ p.url | relative_url}}" >  <img src="{{ '/assets/img/espanol.png' | relative_url }}" alt="Versión en español" width="50" height="50" class="w3-bar-item "></a> 
	</div>
       {% elsif p.lang == "fr" %}
	<div data-role="tile" data-size="small" style="background-color: #4a00b3; padding: 5px;">
         <a href="{{ p.url| relative_url }}" >  <img src="{{ '/assets/img/francais.png' | relative_url }}" alt="Version en français" width="50" height="50" class="w3-bar-item "> </a>   
	</div>
       {% endif %}
     {% endif %}
     
{% endfor %}   
    
	
<div data-role="tile" data-size="small" style="background-color: #4a00b3; text-align: center; vertical-align: middle;">
	<a href="https://github.com/LWH-21/"><i class="fa fa-github-alt fa-3x"></i></a> 
</div>
<div data-role="tile" data-size="small" class="bg-blue">
	<a href="https://www.facebook.com/profile.php?id=100009215959255"><i class="fa fa-facebook-official fa-3x"></i></a> 
</div>
	
    <div data-role="tile" data-size="medium">A propos</div>
    <div data-role="tile" data-size="wide">Catégories tri</div>
	
    <div data-role="tile" data-size="large">Dernier article</div>
    <div data-role="tile" data-size="large">article n° 2</div>
    <div data-role="tile" data-size="large">article n° 3</div>
	<div data-role="tile" data-size="medium">article n° 4</div>
	<div data-role="tile" data-size="medium">article n° 5</div>
</div>

</div>

</div>
