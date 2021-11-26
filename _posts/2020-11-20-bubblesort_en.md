---
layout: post
title: The Bubble Sort
description: "Visual of the 'bubble sorting' algorithm"
author: LWH
image: assets/img/sorg/bubblesort.png
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



The principle of the bubble sort (aka sinking sort) is very simple: to sort a list, you compare the first and second elements and exchange them if necessary. Then you do the same thing for the second and the third, then for the third and the fourth... until you reach the end of the list. Then you start again from the beginning. Until the list is sorted.

You know that the list is sorted if you can go through the whole list without permuting.

After the first iteration, the largest element is at the end of the list. It is thus useless to compare it with the previous one. At the end of the second iteration, the two largest elements are at the end of the list. At each iteration, we can therefore stop a little earlier.

The animation below shows how the <mark>bubble sort</mark> works :
	
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

To give you an idea of the performance of this algorithm, suppose that you have to sort the names of the inhabitants of several large cities. And that the machine you have at your disposal can carry out let's say one million instructions per second (we don't take into account the problems of memory, disks etc...). Here is the time it would take to sort with this method:

<div class="w3-metro-darken w3-bar">
<label class="w3-bar-item" >Operations per second :</label>
<input class="w3-input w3-bar-item" type="text" id="computerspeed" value="gg">
<button class="w3-bar-item w3-button" onclick="calc_sort_speed();return false;">Calculate!</button>
</div>
<table id = "exectimes"  class="w3-table-all">
	<thead><!-- en-tête -->
		<tr><!-- première ligne -->
			<th>City</th>
			<th>Population</th>
			<th >Average sorting time</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td> Chicoutimi</td>
			<td class="w3-right-align">69 004</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Bruxelles</td>
			<td class="w3-right-align">174 383</td>
			<td class="w3-right-align"></td>
		</tr>	
		<tr>
			<td> Paris</td>
			<td class="w3-right-align">2 220 445</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td> Madrid</td>
			<td class="w3-right-align">3 207 247</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td> Berlin</td>
			<td class="w3-right-align">3 520 031</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Toronto</td>
			<td class="w3-right-align">6 555 205</td>
			<td class="w3-right-align"></td>
		</tr>		
		<tr>
			<td> Londres</td>
			<td class="w3-right-align" >8 416 535</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td> Mexico</td>
			<td class="w3-right-align">20 879 830</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td> Le Caire</td>
			<td class="w3-right-align">24 439 785</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Delhi</td>
			<td class="w3-right-align">26 454 086</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td> Jakarta</td>
			<td class="w3-right-align">35 143 473</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Sao Paulo</td>
			<td class="w3-right-align">36 315 271</td>
			<td class="w3-right-align"></td>
		</tr>		
		<tr>
			<td> Tokyo</td>
			<td class="w3-right-align">42 796 714</td>
			<td class="w3-right-align"></td>
		</tr>
	</tbody>
</table>

You can change the number of operations per second to test.
	

