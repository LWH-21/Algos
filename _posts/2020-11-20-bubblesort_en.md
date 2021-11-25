---
layout: post
title: The Bubble Sort
description: "Visual of the 'bubble sorting' algorithm"
author: LWH
image: 
keywords: 
 - Bubble Sort
 - Algorithm sinking sorg
 - Visual of bubble sorting
date: 2021-11-20
last_modified_at: 2021-11-14
category: 
 - sort algorithms 
lang : en
locale : en-US
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
	<p>The principle of the bubble sort is very simple: to sort a list, you compare the first and second elements and exchange them if necessary. Then you do the same thing for the second and the third, then for the third and the fourth... until you reach the end of the list. Then you start again from the beginning. Until the list is sorted.</p>
	<p>You know that the list is sorted if you can go through the whole list without permuting.</p>
	<p>After the first iteration, the largest element is at the end of the list. It is thus useless to compare it with the previous one. At the end of the second iteration, the two largest elements are at the end of the list. At each iteration, we can therefore stop a little earlier.<p>
 <p>The animation below shows how the <mark>bubble sort</mark> works :</p>
	
	<div class="w3-bar w3-black">
		<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animation</button>
		<button class="w3-bar-item w3-button" onclick="opentab('graph')">Graphics</button>
		<button class="w3-bar-item w3-button" onclick="opentab('schem')">Diagram</button>	
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
		<button class="w3-bar-item w3-button" onclick="sortdem.start(algo);return false;">Sort!</button>
		<button class="w3-bar-item w3-button" onclick="algo.stop();return false;">Stop</button>
		<div class="w3-dropdown-hover">
			<button class="w3-button">Speed</button>
			<div class="w3-dropdown-content w3-bar-block w3-card-4">
			  <a href="#" class="w3-bar-item w3-button" title="Normal" onclick="sortdem.setSpeed(0.5);return false;">Normal</a>
			  <a href="#" class="w3-bar-item w3-button" title="Fast"  onclick="sortdem.setSpeed(1);return false;">Fast</a>
			  <a href="#" class="w3-bar-item w3-button" title="Slow"  onclick="sortdem.setSpeed(0.2);return false;">Slow</a>
			  <a href="#" class="w3-bar-item w3-button" title="Very slow"  onclick="sortdem.setSpeed(0.1);return false;">Very slow</a>
			</div>
		</div>
		<div class="w3-dropdown-hover">
			<button class="w3-button">Shuffle </button>
			<div class="w3-dropdown-content w3-bar-block w3-card-4">
			  <a href="#" class="w3-bar-item w3-button" title="Random"  onclick="sortdem.shuffle('A');return false;">Random</a>
			  <a href="#" class="w3-bar-item w3-button" title="Worst case"  onclick="sortdem.shuffle('W');return false;">Worst case</a>
			  <a href="#" class="w3-bar-item w3-button" title="Best case"  onclick="sortdem.shuffle('B');return false;">Best case</a>
			</div>
		</div>

	</div>	
	
</div>
