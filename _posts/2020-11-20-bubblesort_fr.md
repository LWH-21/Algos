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
	<p>Le principe du tri à bulles (bubble sort ou sinking sort) est de comparer deux à deux les éléments e1 et e2 consécutifs d’un tableau et d’effecteur une permutation si e1 &gt; e2. On continue de trier jusqu’à ce qu’il n’y ait plus de permutation.</p>
	<p>L’animation ci-après détaille le fonctionnement du tri bulle :</p>
	
	<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animation</button>
	<button class="w3-bar-item w3-button" onclick="opentab('graph')">Graphique</button>
	<button class="w3-bar-item w3-button" onclick="opentab('schem')">Schéma</button>
    <div class="w3-dropdown-click">
    <button class="w3-button" onclick="opentab('code')" style="z-index: 2;">Code</button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4">
      <a href="#" class="w3-bar-item w3-button" title="Aléatoire" href="PleaseEnableJavascript.html" onclick="sortdem.shuffle('A');return false;">Pascal</a>
      <a href="#" class="w3-bar-item w3-button" title="Le pire des cas" href="PleaseEnableJavascript.html" onclick="sortdem.shuffle('W');return false;">Python</a></a>
      <a href="#" class="w3-bar-item w3-button" title="Vitesse lente" href="PleaseEnableJavascript.html" onclick="sortdem.shuffle('B');return false;">C</a>
    </div>
</div>
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
		<div id="code" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:#475;  overflow:scroll;">
<div id="pascal" class="language-pascal highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">procedure</span> <span class="n">TGPlanning</span><span class="p">.</span><span class="n">load</span><span class="p">(</span><span class="n">col</span> <span class="p">:</span>  <span class="n">TInterventions</span><span class="p">;</span><span class="n">startdate</span><span class="p">,</span><span class="n">enddate</span> <span class="p">:</span> <span class="kt">tdatetime</span><span class="p">);</span>

<span class="k">begin</span>
     <span class="k">if</span> <span class="n">assigned</span><span class="p">(</span><span class="n">mat</span><span class="p">)</span> <span class="k">then</span> <span class="n">freeandnil</span><span class="p">(</span><span class="n">mat</span><span class="p">);</span>
     <span class="n">selection</span><span class="p">.</span><span class="n">x</span><span class="p">:=-</span><span class="m">1</span><span class="p">;</span>
     <span class="n">selection</span><span class="p">.</span><span class="n">y</span><span class="p">:=-</span><span class="m">1</span><span class="p">;</span>
     <span class="n">mat</span><span class="p">:=</span><span class="n">TLPlanning</span><span class="p">.</span><span class="n">create</span><span class="p">(</span><span class="n">startdate</span><span class="p">,</span><span class="n">enddate</span><span class="p">);</span>
     <span class="n">mat</span><span class="p">.</span><span class="n">load</span><span class="p">(</span><span class="n">col</span><span class="p">);</span>
     <span class="k">if</span> <span class="n">pl_graphic</span> <span class="k">in</span> <span class="n">Fkind</span> <span class="k">then</span> <span class="n">prepare_graphics</span><span class="p">;</span>
     <span class="n">TB_date</span><span class="p">.</span><span class="n">Date</span><span class="p">:=</span><span class="n">startdate</span><span class="p">;</span>
     <span class="n">PB_planning</span><span class="p">.</span><span class="n">Refresh</span><span class="p">;</span>
<span class="k">end</span><span class="p">;</span> 
</code></pre></div></div>
		</div>	</figure>
	::
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
