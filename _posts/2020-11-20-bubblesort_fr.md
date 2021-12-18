---
layout: post
title: Le tri bulle
description: "Animation de l'algorithme de tri 'tri bulle'"
author: LWH
image: assets/img/sort/bubblesort.png
keywords: 
 - Tri bulle
 - Algorithme du tri bulle
 - Visualisation du tri bulle
date: 2021-11-20
last_modified_at: 2021-12-01
categories: 
 - Algorithmes de tri 
lang : fr
locale : fr-FR
ref : bubblesort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
  -  assets/js/sort/BubbleSort.js
  -  https://www.jdoodle.com/assets/jdoodle-pym.min.js
---

Le principe du tri à bulles (bubble sort ou sinking sort en anglais) est très simple : pour trier une liste, on compare son premier et son second élément et on les échange si nécessaire. Puis on fait la même chose pour le second et le troisième, puis pour le troisième et le quatrième… jusqu’à ce qu’on arrive à la fin de la liste. Après cela, on recommence à partir du début. Au bout d’un certain nombre d’itérations, on ne fait plus de permutations. Alors la liste est triée.

On remarque, qu’après le premier passage, l’élément le plus grand se retrouve à sa place définitive. Au deuxième passage, il sera donc inutile de le comparer avec le précédent. A chaque itération, on aura un élément de plus qui sera correctement placé à la fin de la liste. On pourra donc, à chaque fois, s’arrêter un peu plus tôt.

L’animation ci-dessous illustre le fonctionnement de ce tri. 
	
<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animation</button>
	<button class="w3-bar-item w3-button" onclick="opentab('graph')">Schéma</button>
	<button class="w3-bar-item w3-button" onclick="opentab('schem')">Réseau de tri</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Code</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Pascal" onclick="opentab('pascal');return false;">Pascal</a>
		  <a href="#" class="w3-bar-item w3-button" title="Python" onclick="opentab('python');return false;">Python</a>
		  <a href="#" class="w3-bar-item w3-button" title="C" onclick="opentab('C');return false;">C</a>
		  <a href="#" class="w3-bar-item w3-button" title="Caml" onclick="opentab('caml');return false;">Caml</a>				  
		  <a href="#" class="w3-bar-item w3-button" title="nsd" onclick="opentab('nsd');return false;">Structogramme</a>
		  <a href="#" class="w3-bar-item w3-button" title="Flowchart" onclick="opentab('flowchart');return false;">Organigramme</a>
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
	<div id="C" class="code" ><ol>
	<li class="li1"><div class="de1"><span class="kw4">void</span> bubble_sort<span class="br0">&#40;</span><span class="kw4">int</span><span class="sy0">*</span> lst<span class="sy0">,</span> <span class="kw4">int</span> size<span class="br0">&#41;</span></div></li>
	<li class="li1"><div class="de1"><span class="br0">&#123;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw4">int</span> pass <span class="sy0">=</span> <span class="nu0">0</span><span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw4">int</span> swapped <span class="sy0">=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; <span class="kw4">int</span> current<span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">while</span> <span class="br0">&#40;</span>swapped<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; swapped <span class="sy0">=</span> <span class="nu0">0</span><span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; pass <span class="sy0">++;</span> &nbsp; &nbsp; &nbsp;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">for</span> <span class="br0">&#40;</span>current<span class="sy0">=</span><span class="nu0">0</span><span class="sy0">;</span>current<span class="sy0">&lt;</span>size<span class="sy0">-</span>pass<span class="sy0">;</span>current<span class="sy0">++</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>lst<span class="br0">&#91;</span>current<span class="br0">&#93;</span><span class="sy0">&gt;</span>lst<span class="br0">&#91;</span>current<span class="sy0">&plus;</span><span class="nu0">1</span><span class="br0">&#93;</span><span class="br0">&#41;</span><span class="br0">&#123;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; swapped <span class="sy0">=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="co1">// On permute les deux éléments</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw4">int</span> temp <span class="sy0">=</span> lst<span class="br0">&#91;</span>current<span class="br0">&#93;</span><span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; lst<span class="br0">&#91;</span>current<span class="br0">&#93;</span> <span class="sy0">=</span> lst<span class="br0">&#91;</span>current<span class="sy0">&plus;</span><span class="nu0">1</span><span class="br0">&#93;</span><span class="sy0">;</span></div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; lst<span class="br0">&#91;</span>current<span class="sy0">&plus;</span><span class="nu0">1</span><span class="br0">&#93;</span> <span class="sy0">=</span> temp<span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
	<li class="li1"><div class="de1"><span class="br0">&#125;</span></div></li>
	</ol></div>
</div>

<div id="python" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
	<div id="python" class="code"><ol><li class="li1"><div class="de1"><span class="kw1">def</span> bubble_sort<span class="br0">&#40;</span>lst<span class="br0">&#41;</span>:</div></li>
	<li class="li1"><div class="de1">&nbsp; swapped = <span class="kw2">True</span></div></li>
	<li class="li1"><div class="de1">&nbsp; num_pass = <span class="nu0">0</span></div></li>
	<li class="li1"><div class="de1">&nbsp; <span class="kw1">while</span> swapped == <span class="kw2">True</span>:</div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; swapped = <span class="kw2">False</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; num_pass = num_pass + <span class="nu0">1</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">for</span> current <span class="kw1">in</span> <span class="kw2">range</span><span class="br0">&#40;</span><span class="nu0">0</span>, <span class="kw2">len</span><span class="br0">&#40;</span>lst<span class="br0">&#41;</span> - num_pass<span class="br0">&#41;</span>:</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>lst<span class="br0">&#91;</span>current<span class="br0">&#93;</span> <span class="sy0">&gt;</span> lst<span class="br0">&#91;</span>current + <span class="nu0">1</span><span class="br0">&#93;</span><span class="br0">&#41;</span>:</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; swapped = <span class="kw2">True</span></div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; &nbsp; <span class="co1"># On echange les deux elements</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; lst<span class="br0">&#91;</span>current<span class="br0">&#93;</span>, lst<span class="br0">&#91;</span>current + <span class="nu0">1</span><span class="br0">&#93;</span> = lst<span class="br0">&#91;</span>current + <span class="nu0">1</span><span class="br0">&#93;</span>,lst<span class="br0">&#91;</span>current<span class="br0">&#93;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; <span class="kw1">return</span> lst</div></li>
	</ol></div>
</div>		
	
<div id="pascal" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
	<div id="Pascal" class="code"><ol><li class="li1"><div class="de1"><span class="kw1">type</span> tab <span class="sy0">=</span> <span class="kw4">array</span><span class="br0">&#91;</span><span class="nu0">1</span>..<span class="nu0">20</span><span class="br0">&#93;</span> <span class="kw1">of</span> <span class="kw4">integer</span>;</div></li>
	<li class="li1"><div class="de1"><span class="kw1">procedure</span> bubble_sort<span class="br0">&#40;</span><span class="kw1">var</span> lst <span class="sy0">:</span> tab<span class="br0">&#41;</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; </div></li>
	<li class="li1"><div class="de1"><span class="kw1">var</span> swapped <span class="sy0">:</span> <span class="kw4">boolean</span>;</div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; current <span class="sy0">:</span> <span class="kw4">integer</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; temp <span class="sy0">:</span> <span class="kw4">integer</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; pass <span class="sy0">:</span> <span class="kw4">integer</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp;</div></li>
	<li class="li1"><div class="de1"><span class="kw1">begin</span></div></li>
	<li class="li2"><div class="de2">&nbsp; pass <span class="sy0">:=</span> <span class="nu0">1</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; <span class="kw1">REPEAT</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; swapped <span class="sy0">:=</span> <span class="kw2">false</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">for</span> current <span class="sy0">:=</span> <span class="nu0">1</span> <span class="kw1">to</span> <span class="nu0">20</span> <span class="sy0">-</span> pass <span class="kw1">do</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">begin</span></div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>lst<span class="br0">&#91;</span>current<span class="br0">&#93;</span> &gt; lst<span class="br0">&#91;</span>current <span class="sy0">&plus;</span> <span class="nu0">1</span><span class="br0">&#93;</span><span class="br0">&#41;</span> <span class="kw1">then</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">begin</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="coMULTI">{ on échange les deux éléments }</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; temp <span class="sy0">:=</span> lst<span class="br0">&#91;</span>current<span class="br0">&#93;</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; lst<span class="br0">&#91;</span>current<span class="br0">&#93;</span><span class="sy0">:=</span>lst<span class="br0">&#91;</span>current <span class="sy0">&plus;</span> <span class="nu0">1</span><span class="br0">&#93;</span>;</div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; &nbsp; lst<span class="br0">&#91;</span>current <span class="sy0">&plus;</span> <span class="nu0">1</span><span class="br0">&#93;</span><span class="sy0">:=</span>temp;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; swapped <span class="sy0">:=</span> <span class="kw2">true</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">end</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">end</span>;</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; pass <span class="sy0">:=</span> pass <span class="sy0">&plus;</span> <span class="nu0">1</span>;</div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; <span class="kw1">UNTIL</span> <span class="br0">&#40;</span><span class="kw1">not</span> swapped<span class="br0">&#41;</span>;</div></li>
	<li class="li1"><div class="de1"><span class="kw1">end</span>;</div></li>
	</ol></div>
</div>
	
<div id="caml" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">	
	<div id="caml" class="code"><ol><li class="li1"><div class="de1"><span class="kw1">let</span> swap a b t <span class="sy0">=</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">let</span> temp <span class="sy0">=</span> t <span class="sy0">.</span><span class="br0">&#40;</span> b <span class="br0">&#41;</span> <span class="kw1">in</span> t <span class="sy0">.</span><span class="br0">&#40;</span> b <span class="br0">&#41;</span> <span class="sy0">&lt;-</span> t <span class="sy0">.</span><span class="br0">&#40;</span> a <span class="br0">&#41;</span> <span class="sy0">;</span> t <span class="sy0">.</span><span class="br0">&#40;</span> a <span class="br0">&#41;</span> <span class="sy0">&lt;-</span> temp <span class="sy0">;;</span></div></li>
	<li class="li1"><div class="de1">&nbsp;</div></li>
	<li class="li1"><div class="de1"><span class="kw1">let</span> bubble_sort vect <span class="sy0">=</span></div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; <span class="kw1">let</span> length <span class="sy0">=</span> <span class="kw2">Array</span><span class="sy0">.</span>length vect <span class="kw1">in</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">for</span> max_pos <span class="sy0">=</span> length <span class="sy0">-</span> <span class="nu0">1</span> <span class="kw1">downto</span> <span class="nu0">0</span> <span class="kw1">do</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">for</span> current <span class="sy0">=</span> <span class="nu0">0</span> <span class="kw1">to</span> max_pos <span class="sy0">-</span> <span class="nu0">1</span> <span class="kw1">do</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">if</span> vect<span class="sy0">.</span><span class="br0">&#40;</span> current <span class="br0">&#41;</span> <span class="sy0">&gt;</span> vect<span class="sy0">.</span><span class="br0">&#40;</span> current <span class="sy0">&plus</span> <span class="nu0">1</span> <span class="br0">&#41;</span> <span class="kw1">then</span> swap current <span class="br0">&#40;</span> current <span class="sy0">&plus</span> <span class="nu0">1</span> <span class="br0">&#41;</span> vect</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">done</span><span class="sy0">;</span></div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">done</span><span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; vect<span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1"><span class="sy0">;;</span></div></li>
	</ol></div>
</div>
	
<div id="flowchart" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/BubbleSort_flowchart.svg' | relative_url }}" alt="Ordinogramme du tri bulle " style="max-width: 100%;height: auto;"/> 
</div>

<div id="nsd" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/BubbleSort_nsd.svg' | relative_url }}" alt="Graphe NSD (Nassi-Shneidermann) du tri bulle " style="max-width: 100%;height: auto;" /> 
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
		  <a href="#" class="w3-bar-item w3-button" title="Vitesse très lente" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(0.1);return false;">Très lente</a>
		</div>
	</div>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Mélanger</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Aléatoire"  onclick="sortdem.shuffle('A');return false;">Aléatoire</a>
		  <a href="#" class="w3-bar-item w3-button" title="Le pire des cas"  onclick="sortdem.shuffle('W');return false;">Le pire des cas</a>
		  <a href="#" class="w3-bar-item w3-button" title="Vitesse lente"  onclick="sortdem.shuffle('B');return false;">Le meilleur des cas</a>
		</div>
	</div>

</div>

Vous trouverez [ici](https://youtu.be/hQ9skJvM-RE) une petite vidéo qui montre cet algorithme.
<div style="align:center;">
<a href="https://youtu.be/hQ9skJvM-RE" title="Tri bulle">
<img src="{{ 'assets/img/sort/bubble_sort_video.webp' | relative_url }}" alt="Ordinogramme du tri bulle " style="max-width: 100%;height: auto;"/> 
</a>
</div>

## Travaux pratiques

Le mini-jeu ci-dessous vous permet d'essayer de trier, par ordre de poids croissant, une suite de 5 tonneaux, avec juste une balance pour les comparer. Vous pouvez essayer de le résoudre avec la méthode du tri bulle.

<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortgame.shuffle(sortgame);return false;">Mélanger</button>
<button class="w3-bar-item w3-button" onclick="sortgame.shownumbers();return false;">Voir</button>
<button class="w3-bar-item w3-button" onclick="sortgame.solve();return false;">Résoudre</button>
</div>

<figure>
<div style="width:80%;align:center;">
<center>
<canvas id="sortgame" class="animation" height="300" width="486" style="position:relative;border:1px solid #000000;touch-action:none;"></canvas>
</center>
</div>
</figure>

## Variantes

La version originale de Donald Knuth est un peu plus simple, mais l'idée est la même : on compare les éléments adjacents et on échange si nécessaire. Elle se présentait ainsi :

```c
void swap(int *a, int *b)
{
    int tmp = *a;
    *a = *b;
    *b = tmp;
}
void bubble_sort(int* lst, int size) {
    for(int i=size-1; i > 0; i--)
        for(int j=0; j < i;j++)
            if (lst[j+1] < lst[j]){
                swap(&lst[j],&lst[j+1]);
            }
}
```

Toutefois, cette version a l’inconvénient de toujours faire le même nombre d’opérations, quel que soit le tableau en entrée. L'implémentation suivante s’arrête dès qu’elle a fait un parcours sans aucune permutation. C’est la plus courante aujourd’hui.

<div data-pym-src="https://www.jdoodle.com/embed/v0/4b7J?stdin=0&arg=0&rw=1"  ></div>

On peut encore l'améliorer un peu car, si dans une itération le dernier échange s'est fait à la position N, alors tous les éléments situés après cette position N sont dans le bon ordre. Donc, pour les itérations suivantes, il est inutile de les explorer à nouveau. Or aurait alors quelque chose comme ça :
```c
void bubble_sort1(int* lst, int size)
{
    int swapped = 1;
    int lastswap = size ;
    int j;
    while (swapped) {
        swapped = 0;
        for (j=0;j<lastswap - 1;j++) {
            if (lst[j]>lst[j+1]){
                swapped = j+1;
                swap(&lst[j],&lst[j+1]);
            }
        }
        lastswap = swapped;
    }
}
```
	
## Complexité	

D’un point de vue pédagogique, cet algorithme est très intéressant. Il est facile à comprendre et donc tout aussi facile à expliquer. Il est facile à coder dans la plupart des langages informatiques et donne l’occasion de manipuler des vecteurs ou des listes. Il peut servir de base à de nombreux exercices d’optimisation . Et en plus, il a un nom sympa.

Mais, dans le monde réel, il faut bien dire qu’il n’est pas très performant. Il est souvent décrié, voire considéré comme “naïf” et à “à proscrire absolument”. Toutefois, il a quand même le mérite d’être suffisamment performant sur de petites listes ou des listes déjà partiellement triées. 

Dans le pire des cas, avec des données triées à l’envers, les parcours successifs du tableau imposent d’effectuer <b>(<em>n</em><sup>2</sup> - <em>n</em>) / 2</b> échanges. Par exemple, pour une liste de <b><em>10</em></b> éléments, il faudra, dans le pire des cas, faire 45 comparaisons et 45 échanges [ (10<sup>2</sup> - 10) / 2 ]. La complexité en temps est donc quadratique, de l’ordre de <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

En moyenne, lorsque l'ordre initial des éléments à trier est aléatoire, on considère qu’il faudra faire <b>(<em>n</em><sup>2</sup> - <em>n</em>) / 4</b> échanges. La complexité sera donc aussi de <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

Dans le meilleur des cas, quand la liste est déjà triée, il faudra <b>(<em>n</em> - 1)</b> comparaisons et aucune permutation. La complexité en temps est linéaire, en <b><span class='bigo'>O</span>(<em>n</em></b>).

En espace utilisé (coût en mémoire de l’algorithme), la complexité du tri bulle est linéaire. Elle croit à la même vitesse que le nombre de données en entrée. Elle est donc de <b><span class='bigo'>O</span>(<em>n</em></b>).

L’animation ci-dessous permet de vérifier, de manière empirique, cette évolution du nombre d’opérations en fonction du nombre d’éléments à trier.



<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('A');return false;">Complexité moyenne</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('W');return false;">Complexité pire des cas</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('B');return false;">Complexité meilleur des cas</button>
</div>

<div id="complex" class="w3-container " style="width:100%;  height:420px; background-color:transparent;  overflow:auto;">	
	<figure>
	<div class="w3-half">
	<center>
	<canvas id="sortcplx" height="350" width="566" style="position:relative;border:1px solid #000000;width: 95%;"></canvas>
	</center>
	</div>
	</figure>
	<div class="w3-half">
		<table id='Tcomplex' class="w3-table-all w3-hoverable">
			<tr class="w3-red">
				<th>Taille données</th>
				<th>Comparaisons</th>
				<th>Echanges</th>
				<th>Total</th>
			</tr>		
		</table> 	
	</div>
</div>
	
Pour vous faire une idée plus concrète des performances de cet algorithme, supposez que vous deviez trier par ordre alphabétique le répertoire des habitants de plusieurs grandes villes. Et que la machine dont vous disposez peut effectuer disons dix millions d’instructions par seconde (ce qui n’est pas si mal si on tient compte des problèmes d’accès à la mémoire, aux disques etc…). Voici le temps qui serait nécessaire avec cette méthode :

<div class="w3-responsive">
<div class="w3-metro-darken w3-bar">
<label class="w3-bar-item" >Nombre d'opérations par secondes :</label>
<input class="w3-input w3-bar-item" type="text" id="computerspeed" value="10 000 000">
<button class="w3-bar-item w3-button" onclick="calc_sort_speed('fr');return false;">Calculer</button>
</div>
<br>
<table id = "exectimes"  class="w3-table-all w3-hoverable ">
	<thead><!-- en-tête -->
		<tr class="w3-red"><!-- première ligne -->
			<th> Ville</th>
			<th> Nombre d'habitants</th>
			<th > Durée du tri</th>
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
</div>

Vous pouvez changer le nombre d'instructions par seconde, pour tester.

<img src="{{ 'assets/img/sort/bubble_fr.webp' | relative_url }}" alt="Comics Strip " style="max-width: 100%;height: auto;"/> 
