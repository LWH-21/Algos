---
layout: post
title: Ordenación de burbujas
description: "Animación del algoritmo de clasificación de burbujas"
author: LWH
image: assets/img/sort/bubblesort.png
keywords: 
 - Clasificación de burbujas
 - algoritmo de clasificación 
 - Ordenamiento de burbuja
date: 2021-11-20
last_modified_at: 2021-12-01
category: 
 - Algoritmos de ordenación
lang : es
locale : es-ES
ref : bubblesort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
  -  assets/js/sort/BubbleSort.js
  -  https://www.jdoodle.com/assets/jdoodle-pym.min.js
---

La **ordenación por burbujas** también se conoce como **Sinking Sort**. Es un algoritmo de ordenación simple que recorre repetidamente la lista que hay que ordenar, comparando cada par de elementos adyacentes y los intercambia si están en el orden equivocado.

Este procedimiento se repite hasta que no se realicen intercambios.

Como al menos un elemento se mueve a su lugar final en cada pasada, podemos decrementar la última posición comprobada en cada pasada. 

La siguiente animación muestra cómo funciona la ordenación por burbujas:

<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animación</button>
	<button class="w3-bar-item w3-button" onclick="opentab('graph')">Gráfico</button>
	<button class="w3-bar-item w3-button" onclick="opentab('schem')">Diagrama</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Código</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Pascal" onclick="opentab('pascal');return false;">Pascal</a>
		  <a href="#" class="w3-bar-item w3-button" title="Python" onclick="opentab('python');return false;">Python</a>
		  <a href="#" class="w3-bar-item w3-button" title="C" onclick="opentab('C');return false;">C</a>
		  <a href="#" class="w3-bar-item w3-button" title="Caml" onclick="opentab('caml');return false;">Caml</a>				  
		  <a href="#" class="w3-bar-item w3-button" title="nsd" onclick="opentab('nsd');return false;">Diagrama Nassi-Shneiderman</a>
		  <a href="#" class="w3-bar-item w3-button" title="Flowchart" onclick="opentab('flowchart');return false;">Diagrama de flujo</a>
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
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">if</span> vect<span class="sy0">.</span><span class="br0">&#40;</span> current <span class="br0">&#41;</span> <span class="sy0">&gt;</span> vect<span class="sy0">.</span><span class="br0">&#40;</span> current <span class="sy0">&plus;</span> <span class="nu0">1</span> <span class="br0">&#41;</span> <span class="kw1">then</span> swap current <span class="br0">&#40;</span> current <span class="sy0">&plus;</span> <span class="nu0">1</span> <span class="br0">&#41;</span> vect</div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">done</span><span class="sy0">;</span></div></li>
	<li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">done</span><span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1">&nbsp; &nbsp; vect<span class="sy0">;</span></div></li>
	<li class="li1"><div class="de1"><span class="sy0">;;</span></div></li>
	</ol></div>
</div>
	
<div id="flowchart" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/BubbleSort_flowchart.svg' | relative_url }}" alt="Diagrama de flujo de clasificación de burbujas" style="max-width: 100%;height: auto;"  /> 
</div>

<div id="nsd" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/BubbleSort_nsd.svg' | relative_url }}" alt="Graph NSD (Nassi-Shneidermann) de la Ordenamiento de burbuja " style="max-width: 100%;height: auto;" /> 
</div>
	
</figure>

<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="sortdem.start(algo);return false;">Ordenar</button>
	<button class="w3-bar-item w3-button" onclick="algo.stop();return false;">Stop</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Velocidad</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Normal"  onclick="sortdem.setSpeed(0.5);return false;">Normal</a>
		  <a href="#" class="w3-bar-item w3-button" title="rápida"  onclick="sortdem.setSpeed(1);return false;">Rápida</a>
		  <a href="#" class="w3-bar-item w3-button" title="Slow"  onclick="sortdem.setSpeed(0.2);return false;">Lenta</a>
		  <a href="#" class="w3-bar-item w3-button" title="Very slow" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(0.1);return false;">Muy lenta</a>
		</div>
	</div>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Mezcla</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Random"  onclick="sortdem.shuffle('A');return false;">Aleatoria</a>
		  <a href="#" class="w3-bar-item w3-button" title="Worst"  onclick="sortdem.shuffle('W');return false;">Peor</a>
		  <a href="#" class="w3-bar-item w3-button" title="Best"  onclick="sortdem.shuffle('B');return false;">Mejor</a>
		</div>
	</div>

</div>

## Trabajo práctico

El minijuego que se presenta a continuación permite intentar clasificar, en orden de peso creciente, 5 barriles, con una balanza Roberval para compararlos. Puedes intentar resolverlo con el método de clasificación por burbujas.

<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortgame.shuffle(sortgame);return false;">Mezclar</button>
<button class="w3-bar-item w3-button" onclick="sortgame.shownumbers();return false;">Ver</button>
<button class="w3-bar-item w3-button" onclick="sortgame.solve();return false;">Resolverlo</button>
</div>

<figure>
<div style="width:80%;align:center;">
<center>
<canvas id="sortgame" class="animation" height="300" width="486" style="position:relative;border:1px solid #000000;touch-action:none;"></canvas>
</center>
</div>
</figure>

## Variations

La versión original de Donald Knuth es un poco más sencilla, pero la idea es la misma: comparamos elementos adyacentes y los intercambiamos si es necesario. 

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

Sin embargo, este código tiene la desventaja de que siempre realiza el mismo número de operaciones, independientemente de la matriz de entrada. La siguiente implementación se detiene en cuanto ha realizado una ejecución sin ninguna permutación. Esta es la más común hoy en día.

<div data-pym-src="https://www.jdoodle.com/embed/v0/4b7J?stdin=0&arg=0&rw=1"  ></div>

Todavía podemos mejorarlo un poco porque, si en una iteración el último intercambio se hizo en la posición <em>N</em>, entonces todos los elementos situados después de esta posición <em>N</em> están en el orden correcto. Así, para las siguientes iteraciones, es inútil volver a explorarlos. Tendríamos entonces algo así:

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
	
## Complejidad	

Desde el punto de vista educativo, este algoritmo es muy interesante. Es fácil de entender y, por tanto, también de explicar. Es fácil de codificar en la mayoría de los lenguajes informáticos y ofrece la posibilidad de manipular vectores o listas. Puede utilizarse como base para muchos ejercicios de optimización. Y tiene un nombre pegadizo.

Pero, en el mundo real, hay que decir que no es muy eficiente. A menudo se critica, incluso se considera "ingenua" y "debe evitarse absolutamente". Sin embargo, tiene el mérito de ser suficientemente eficiente en listas pequeñas o en listas que ya están parcialmente ordenadas. 

En el peor de los casos, con los datos ordenados en sentido inverso, las ejecuciones sucesivas de la tabla requieren <b>(<em>n</em><sup>2</sup> - <em>n</em>) / 2</b> intercambios. Por ejemplo, para una lista de <b><em>10</em></b> elementos, se necesitarán, en el peor de los casos, 45 comparaciones y 45 intercambios [ (10<sup>2</sup> - 10) / 2 ]. La complejidad  es por tanto cuadrática, del orden <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

Cuando el orden inicial de los elementos a clasificar es aleatorio, se considera que serán necesarios <b>(<em>n</em><sup>2</sup> - <em>n</em>) / 4</b> intercambios. Por lo tanto, la complejidad será también <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

En el mejor de los casos, cuando la lista ya está ordenada, se necesitarán <b>(<em>n</em> - 1)</b> comparisons and no permutations. comparaciones y ninguna permutación. La complejidad es lineal, en <b><span class='bigo'>O</span>(<em>n</em></b>).

La animación siguiente permite comprobar, de forma empírica, esta evolución del número de operaciones en función del número de elementos a ordenar.

<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('A');return false;">Caso promedio</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('W');return false;">Peor caso</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('B');return false;">Mejor caso</button>
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
				<th>Tamaño de datos</th>
				<th>Comparaciones</th>
				<th>Intercambios</th>
				<th>Total</th>
			</tr>		
		</table> 	
	</div>
</div>
	
Para tener una idea más concreta del rendimiento de este algoritmo, suponga que tiene que ordenar alfabéticamente el directorio de los habitantes de varias grandes ciudades. Y que la máquina que tiene a su disposición puede realizar, digamos, diez millones de instrucciones por segundo . Se puede estimar el tiempo necesario para esta clasificación.

<div class="w3-responsive">
<div class="w3-metro-darken w3-bar">
<label class="w3-bar-item" >Operaciones por segundo :</label>
<input class="w3-input w3-bar-item" type="text" id="computerspeed" value="10 000 000">
<button class="w3-bar-item w3-button" onclick="calc_sort_speed('es');return false;">¡Calcula!</button>
</div>
<br>
<table id = "exectimes"  class="w3-table-all w3-hoverable ">
	<thead><!-- en-tête -->
		<tr class="w3-red">
			<th>Ciudad</th>
			<th>Población</th>
			<th >Duración estimada</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td> Chicoutimi</td>
			<td class="w3-right-align">69 004</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Bruselas</td>
			<td class="w3-right-align">174 383</td>
			<td class="w3-right-align"></td>
		</tr>	
		<tr>
			<td>Paris</td>
			<td class="w3-right-align">2 220 445</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Madrid</td>
			<td class="w3-right-align">3 207 247</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Berlín</td>
			<td class="w3-right-align">3 520 031</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Toronto</td>
			<td class="w3-right-align">6 555 205</td>
			<td class="w3-right-align"></td>
		</tr>		
		<tr>
			<td>Londres</td>
			<td class="w3-right-align" >8 416 535</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Mexico</td>
			<td class="w3-right-align">20 879 830</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>El Cairo</td>
			<td class="w3-right-align">24 439 785</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Delhi</td>
			<td class="w3-right-align">26 454 086</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Jacarta</td>
			<td class="w3-right-align">35 143 473</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Sao Paulo</td>
			<td class="w3-right-align">36 315 271</td>
			<td class="w3-right-align"></td>
		</tr>		
		<tr>
			<td>Tokio</td>
			<td class="w3-right-align">42 796 714</td>
			<td class="w3-right-align"></td>
		</tr>
	</tbody>
</table>
</div>
	
<br>
<img src="{{ 'assets/img/sort/bubble_es.webp' | relative_url }}" alt="Comics Strip " style="max-width: 100%;height: auto;"/> 

