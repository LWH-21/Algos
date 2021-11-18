---
layout: default
lang : es
ref : home
title: Inicio
date: 2021-11-20
custom_css: https://cdn.metroui.org.ua/v4/css/metro-all.min.css
custom_js: https://cdn.metroui.org.ua/v4/js/metro.min.js
---

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
	</div> <!-- w3-third -->

	<div class="w3-rest">

		<div class="tiles-grid w3-margin-top w3-margin-bottom w3-margin-left">

			<!-- Home Tile -->
			{% assign pages=site.pages | where:"ref", "home" | sort: 'lang' %}
			{% for p in pages %}
				{% if p.lang == page.lang %}
					<a href="{{ p.url| relative_url }}">
					<div data-role="tile" data-size="small" class="col-1 row-1" style="background-color: #4a00b3">
						<i class="fa fa-home fa-2x"></i>
					</div>
					</a>
					{% break %}
				{% endif %}
			{% endfor %}

			<!-- language tiles -->
			{% assign pages=site.pages | where:"ref", page.ref | sort: 'lang' %}
			{% for p in pages %}
				{% if p.lang != page.lang %}
					{% if p.lang == "en" %}
						<a href="{{ p.url | relative_url }}" >
						<div data-role="tile" data-size="small" style="background-color: #A4C400; padding: 9px;">
							<img src="{{ '/assets/img/english.png' | relative_url }}" alt="English version" width="50" height="50" class="w3-bar-item">
						</div>
						</a>
					{% elsif p.lang == "es" %}
						<a href="{{ p.url | relative_url}}" >
						<div data-role="tile" data-size="small" style="background-color: #F0A30A; padding: 9px;">
							<img src="{{ '/assets/img/espanol.png' | relative_url }}" alt="Versión en español" width="50" height="50" class="w3-bar-item ">
						</div>
						</a>
					{% elsif p.lang == "fr" %}
						<a href="{{ p.url| relative_url }}" >
						<div data-role="tile" data-size="small" style="background-color: ##DC4FAD; padding: 9px;">
							<img src="{{ '/assets/img/francais.png' | relative_url }}" alt="Version en français" width="50" height="50" class="w3-bar-item ">
						</div>
						</a>
			   {% endif %}
			 {% endif %}
		{% endfor %}

		<!-- GitHub tile -->
		<a href="https://github.com/LWH-21/">
		<div data-role="tile" data-size="small" style="background-color: #6A00FF; text-align: center;">
			<i class="fa fa-github-alt fa-3x"></i>
		</div>
		</a>
		<!-- Facebook tile -->
		<a href="https://www.facebook.com/profile.php?id=100009215959255">
		<div data-role="tile" data-size="small" style="background-color: #008A00; text-align: center;">
			<i class="fa fa-facebook-official fa-3x"></i>
		</div>
		</a>
		<!-- About tile -->
		{% assign pages=site.pages | where:"ref", "about" | sort: 'lang' %}
		{% for p in pages  %}
			{% if p.lang == page.lang %}
				<a href="{{ p.url| relative_url }}"><i class="fa fa-id-card fa-lg">
				<div data-role="tile" data-size="medium" style="background-color: #FFC194;">
					<h1>{{ p.title}}</h1>
					<p>{{ p.excerpt }}</p>
				</div>
				</a>
				{% break %}
			{% endif %}
		{% endfor %}

		<div data-role="tile" data-size="medium">A propos</div>
		<div data-role="tile" data-size="wide">Catégories tri</div>

		<div data-role="tile" data-size="large">Dernier article</div>
		<div data-role="tile" data-size="large">article n° 2</div>
		<div data-role="tile" data-size="large">article n° 3</div>
		<div data-role="tile" data-size="medium">article n° 4</div>
		<div data-role="tile" data-size="medium">article n° 5</div>

		</div> <!-- tiles-grid -->
	</div> <!-- w3-rest -->
</div> <!-- w3-content -->
