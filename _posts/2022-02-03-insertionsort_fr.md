---
layout: post
title: Tri par insertion
description: "Tri par insertion"
author: LWH
image: assets/img/sort/insertionsort.webp
keywords: 
 - Tri par insertion
 - insertion sort
date: 2022-02-03
last_modified_at: 2022-02-03
categories: 
 - Algorithmes de tri 
lang : fr
locale : fr-FR
ref : insertionsort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
  -  assets/js/sort/InsertionSort.js
  -  https://www.jdoodle.com/assets/jdoodle-pym.min.js
---

C'est le tri du joueur de cartes. On fait comme si les éléments à trier étaient donnés un par un, le premier élément constituant, à lui tout seul, une liste triée de longueur 1. On range ensuite le second élément pour constituer une liste triée de longueur 2, puis on range le troisième élément pour avoir une liste triée de longueur 3 et ainsi de suite... Le principe du tri par insertion est donc d'insérer à la nième itération le nième élément à la bonne place.

L’animation ci-dessous détaille le fonctionnement de ce tri :



<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animation</button>
	<button class="w3-bar-item w3-button" onclick="opentab('graph')">Schéma</button>
	<button class="w3-bar-item w3-button" onclick="opentab('schem')">Réseau de tri</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Code</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="JavaScript" onclick="opentab('JavaScript');return false;">JavaScript</a>
		  <a href="#" class="w3-bar-item w3-button" title="Python" onclick="opentab('python');return false;">Python</a>
		  <a href="#" class="w3-bar-item w3-button" title="C" onclick="opentab('C');return false;">C</a>
		  <a href="#" class="w3-bar-item w3-button" title="Scratch" onclick="opentab('Scratch');return false;">Scratch</a>				  
		  <a href="#" class="w3-bar-item w3-button" title="nsd" onclick="opentab('nsd');return false;">Structogramme</a>
		  <a href="#" class="w3-bar-item w3-button" title="Flowchart" onclick="opentab('flowchart');return false;">Ordinogramme</a>
		</div>
	</div>
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
<div id="C" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">	
<pre>
<code class="language-c">
void InsertionSort(int vect[], int size)
{
    int i, current, j;
    for (i = 1; i < size; i++) {
        current = vect[i];
        j = i - 1;
        while (j >= 0 && vect[j] > current) {
            vect[j + 1] = vect[j];
            j = j - 1;
        }
        vect[j + 1] = current;
    }
}
</code>
</pre>
</div>

<div id="python" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
<pre>
<code class="language-python">
def InsertionSort(vect):
    for i in range(1, len(vect)):
        current = array[i]
        p = i
        while p > 0 and vect[p - 1] > current:
            vect[p] = vect[p -1]
            p = p - 1
        vect[p] = current
</code>
</pre>
</div>		
	
<div id="JavaScript" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
<pre>
<code>
function InsertionSort(lst) {
	let size = lst.length;
        for (let i = 1; i < size; i++) {            
            let current = lst[i];            
            let j = i-1; 
            while ((j > -1) && (current < lst[j])) {
                lst[j+1] = lst[j];
                j--;
            }
            lst[j+1] = current;
        }
    return lst;
}
</code>
</pre>
</div>
	
<div id="Scratch" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">	
<img src="{{ 'assets/img/sort/InsertionSort_scratch.webp' | relative_url }}" alt="Tri par insertion en Scratch " style="max-width: 100%;height: auto;"/> 
</div>
	
<div id="flowchart" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/insertionsort_flowchart.svg' | relative_url }}" alt="Ordinogramme du tri par insertion " style="max-width: 100%;height: auto;"/> 
</div>

<div id="nsd" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/insertionsort_nsd.svg' | relative_url }}" alt="Graphe NSD (Nassi-Shneidermann) du tri par insertion " style="max-width: 100%;height: auto;" /> 
</div>
	
</figure>

<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="sortdem.start(algo);return false;">Trier</button>
	<button class="w3-bar-item w3-button" onclick="algo.stop();return false;">Stop</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Vitesse</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Vitesse normale"  onclick="sortdem.setSpeed(0.5);return false;">Normale</a>
		  <a href="#" class="w3-bar-item w3-button" title="Vitesse rapide"  onclick="sortdem.setSpeed(1);return false;">Rapide</a>
		  <a href="#" class="w3-bar-item w3-button" title="Vitesse lente"  onclick="sortdem.setSpeed(0.2);return false;">Lente</a>
		  <a href="#" class="w3-bar-item w3-button" title="Vitesse très lente"  onclick="sortdem.setSpeed(0.1);return false;">Très lente</a>
		</div>
	</div>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Mélanger</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Aléatoire" onclick="sortdem.shuffle('A');return false;">Aléatoire</a>
		  <a href="#" class="w3-bar-item w3-button" title="Le pire des cas"  onclick="sortdem.shuffle('W');return false;">Le pire des cas</a>
		  <a href="#" class="w3-bar-item w3-button" title="Vitesse lente"  onclick="sortdem.shuffle('B');return false;">Le meilleur des cas</a>
		</div>
	</div>

</div>

## Implémentation

<p>Ci dessous, une version simple de cet algorithme, en python.</p>

<div data-pym-src="https://www.jdoodle.com/iembed/v0/mEA?stdin=0&amp;arg=0&amp;rw=1"></div>


## Complexité	


<img src="{{ 'assets/img/sort/insertionsort_fr.webp' | relative_url }}" alt=" " style="max-width: 100%;height: auto;"/> 
