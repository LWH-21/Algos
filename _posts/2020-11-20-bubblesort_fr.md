---
layout: post
title: Le tri bulle
keywords: 
 - Tri bulle
 - Algorithme du tri bulle
 - Visualisation du tri bulle
date: 2021-11-20
category: 
 - Algorithmes de tri 
lang : fr
ref : bubblesort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
---


<div class="w3-container w3-third">
</div>	
<div id = "container" class = "w3-container w3-rest">  
	<p>Le principe du tri à bulles (bubble sort ou sinking sort) est de comparer deux à deux les éléments e1 et e2 consécutifs d’un tableau et d’effecteur une 	permutation si e1 &gt; e2. On continue de trier jusqu’à ce qu’il n’y ait plus de permutation.</p>
	<p>L’animation ci-après détaille le fonctionnement du tri bulle :</p>
	
	<div class="w3-bar w3-black">
		<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animation</button>
		<button class="w3-bar-item w3-button" onclick="opentab('graph')">Graphique</button>
		<button class="w3-bar-item w3-button" onclick="opentab('schem')">Schéma</button>	
	</div>
	
	<figure>
		<div id="anim" class="tab" style="position: relative;">
		<canvas id = "sort_canvas" width = "640" height = "295" class="animation" style="position:relative;top:0;left:0;border:1px solid #000000;  margin-bottom:0;z-index: 0"> </canvas>
		<canvas id = "sort_canvas_layer" width = "640" height = "100" class="animation" style="position:absolute;top:0;left:0; margin-top:0;z-index: 1;"></canvas>
		</div>
		<div id="graph" class="w3-container tab" style="display:none">
		<canvas id = "sort_canvas_graph" width = "640" height = "295" class="animation" style="position:relative;top:0;left:0;border:1px solid #000000;  margin-bottom:0;z-index: 0;"> </canvas>
		</div>
		<div id="schem" class="w3-container tab" style="display:none">
		<canvas id = "sort_canvas_schem" width = "640" height = "295" class="animation" style="position:relative;top:0;left:0;border:1px solid #000000; margin-bottom:0;z-index: 0;"> </canvas>
		</div>		
	</figure>
	
</div>
