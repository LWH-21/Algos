---
layout: post
title: Le tri bulle
description: "Démonstration visuelle de l'algorithme de tri 'tri bulle'"
author: LWH
image: 
keywords: 
 - Tri bulle
 - Algorithme du tri bulle
 - Visualisation du tri bulle
date: 2021-11-20
last_modified_at: 2021-11-14
category: 
 - Algorithmes de tri 
lang : fr
locale : fr-FR
ref : bubblesort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
  -  assets/js/sort/BubbleSort.js
---


<div class="w3-container w3-third">
</div>	
<div id = "container" class = "w3-container w3-rest">  
	<p>Le principe du <em>tri à bulles</em> (bubble sort ou sinking sort en anglais) est très simple : pour trier une liste, on compare son premier et son second élément et on les échange si nécessaire. Puis on fait la même chose pour le second et le troisième, puis pour le troisième et le quatrième... jusqu'à ce qu'on arrive à la fin de la liste. Ensuite, on recommence à partir du début. Jusqu'à ce que la liste soit triée.</p>
	<p>On sait que la liste est triée si on peut la parcourir en entier sans effectuer de permutation.</p>
	<p>On remarque, qu'après la première itération, l'élément le plus grand se trouve à la fin de la liste. Il est donc inutile de le comparer avec le précédent. A la fin de la seconde itération, les deux éléments les plus grands qui sont à la fin de la liste. A chaque itération, on peut donc s'arrêter un peu plus tôt.<p>
	<p>L’animation ci-dessous détaille le fonctionnement du <mark>tri bulle</mark> :</p>
	
	<div class="w3-bar w3-black">
		<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animation</button>
		<button class="w3-bar-item w3-button" onclick="opentab('graph')">Graphique</button>
		<button class="w3-bar-item w3-button" onclick="opentab('schem')">Schéma</button>	
	</div>
	
	<figure>
		<div id="anim" class="tab" style="position: relative;">
		<canvas id = "sort_canvas" width = "640" height = "295" class="animation" style="position:relative;top:0;left:0;border:1px solid #000000;  margin-bottom:0"> </canvas>
		<canvas id = "sort_canvas_layer" width = "640" height = "100" class="animation" style="position:absolute;top:0;left:0; margin-top:0;"></canvas>
		</div>
		<div id="graph" class="w3-container tab" style="display:none">
		<canvas id = "sort_canvas_graph" width = "640" height = "295" class="animation" style="position:relative;top:0;left:0;border:1px solid #000000;  margin-bottom:0;z-index: 0;"> </canvas>
		</div>
		<div id="schem" class="w3-container tab" style="display:none">
		<canvas id = "sort_canvas_schem" width = "640" height = "295" class="animation" style="position:relative;top:0;left:0;border:1px solid #000000; margin-bottom:0;z-index: 0;"> </canvas>
		</div>		
	</figure>
	
	<div class="w3-bar w3-black">
		<button class="w3-bar-item w3-button" onclick="sortdem.start(algo);return false;">Trier</button>
		<button class="w3-bar-item w3-button" onclick="algo.stop();return false;">Stop</button>
		<div class="w3-dropdown-hover">
			<button class="w3-button">Vitesse</button>
			<div class="w3-dropdown-content w3-bar-block w3-card-4">
			  <a href="#" class="w3-bar-item w3-button" title="Vitesse normale" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(0.5);return false;">Normale</a>
			  <a href="#" class="w3-bar-item w3-button" title="Vitesse rapide" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(1);return false;">Rapide</a>
			  <a href="#" class="w3-bar-item w3-button" title="Vitesse lente" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(0.2);return false;">Lente</a>
			  <a href="#" class="w3-bar-item w3-button" title="Vitesse très lente" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(0.1);return false;">Très lente</a>
			</div>
		</div>
		<div class="w3-dropdown-hover">
			<button class="w3-button">Mélanger</button>
			<div class="w3-dropdown-content w3-bar-block w3-card-4">
			  <a href="#" class="w3-bar-item w3-button" title="Aléatoire" href="PleaseEnableJavascript.html" onclick="sortdem.shuffle('A');return false;">Aléatoire</a>
			  <a href="#" class="w3-bar-item w3-button" title="Le pire des cas" href="PleaseEnableJavascript.html" onclick="sortdem.shuffle('W');return false;">Le pire des cas</a>
			  <a href="#" class="w3-bar-item w3-button" title="Vitesse lente" href="PleaseEnableJavascript.html" onclick="sortdem.shuffle('B');return false;">Le meilleur des cas</a>
			</div>
		</div>

	</div>	
	
</div>

<script>
	function opentab(tname) {
  	var i;
  	var x = document.getElementsByClassName("tab");
  	for (i = 0; i < x.length; i++) {
    		x[i].style.display = "none";  
 	}
 	document.getElementById(tname).style.display = "block";  
	}
</script>
