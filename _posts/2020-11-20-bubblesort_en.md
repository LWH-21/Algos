---
layout: post
title: The Bubble Sort
description: "Visual of the 'bubble sorting' algorithm"
author: LWH
image: assets/img/sort/bubblesort.png
keywords: 
 - Bubble Sort
 - Algorithm sinking sorg
 - Visual of bubble sorting
date: 2021-11-20
last_modified_at: 2021-12-01
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

**Bubble sort** (aka sinking sort) is a sorting algorithm that works by repeatedly stepping through the list that need to be sorted, comparing each adjacent pair of items and swapping them if necessary.

This procedure is repeated until no swaps are done.

Since at least one item is moved into its final place for each pass, we can decrement the last position checked on each pass. 

The animation below shows how the bubble sort works :

	
<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animation</button>
	<button class="w3-bar-item w3-button" onclick="opentab('graph')">Graphics</button>
	<button class="w3-bar-item w3-button" onclick="opentab('schem')">Diagram</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Code</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Pascal" onclick="opentab('pascal');return false;">Pascal</a>
		  <a href="#" class="w3-bar-item w3-button" title="Python" onclick="opentab('python');return false;">Python</a>
		  <a href="#" class="w3-bar-item w3-button" title="C" onclick="opentab('C');return false;">C</a>
		  <a href="#" class="w3-bar-item w3-button" title="Caml" onclick="opentab('caml');return false;">Caml</a>				  
		  <a href="#" class="w3-bar-item w3-button" title="nsd" onclick="opentab('nsd');return false;">Nassi–Shneiderman diagram</a>
		  <a href="#" class="w3-bar-item w3-button" title="Flowchart" onclick="opentab('flowchart');return false;">Flowchart</a>
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
<img src="{{ 'assets/img/sort/BubbleSort_flowchart.svg' | relative_url }}" alt="Bubble sort flowchart " style="max-width: 100%;height: auto;" /> 
</div>

<div id="nsd" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/BubbleSort_nsd.svg' | relative_url }}" alt="NSD Graph for Bubble sort " style="max-width: 100%;height: auto;"  /> 
</div>
	
</figure>

<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="sortdem.start(algo);return false;">Sort!</button>
	<button class="w3-bar-item w3-button" onclick="algo.stop();return false;">Stop</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Speed</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Normal spedd" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(0.5);return false;">Normal</a>
		  <a href="#" class="w3-bar-item w3-button" title="Fast" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(1);return false;">Fast</a>
		  <a href="#" class="w3-bar-item w3-button" title="Slow" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(0.2);return false;">Slow</a>
		  <a href="#" class="w3-bar-item w3-button" title="Very slow" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(0.1);return false;">Very slow</a>
		</div>
	</div>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Shuffle</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Random" href="PleaseEnableJavascript.html" onclick="sortdem.shuffle('A');return false;">Random</a>
		  <a href="#" class="w3-bar-item w3-button" title="Worst" href="PleaseEnableJavascript.html" onclick="sortdem.shuffle('W');return false;">Worst case</a>
		  <a href="#" class="w3-bar-item w3-button" title="Best" href="PleaseEnableJavascript.html" onclick="sortdem.shuffle('B');return false;">Best case</a>
		</div>
	</div>

</div>

## Practical work

The mini-game below allows you to try to sort, in order of increasing weight,  5 barrels, with a Roberval scale to compare them. You can try to solve it with the bubble sort method.

<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortgame.shuffle(sortgame);return false;">Shuffle</button>
<button class="w3-bar-item w3-button" onclick="sortgame.shownumbers();return false;">View</button>
<button class="w3-bar-item w3-button" onclick="sortgame.solve();return false;">Solve it</button>
</div>

<figure>
<div style="width:80%;align:center;">
<center>
<canvas id="sortgame" class="animation" height="300" width="486" style="position:relative;border:1px solid #000000;touch-action:none;"></canvas>
</center>
</div>
</figure>

## Variations

Donald Knuth's original version is a bit simpler, but the idea is the same: we compare adjacent elements and exchange if necessary. 

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

However, this version has the disadvantage that it always performs the same number of operations, regardless of the input array. The next implementation stops as soon as it has done a run without any permutation. This is the most common one today.

```c
void bubble_sort(int* lst, int size)
{
    int pass = 0;
    int swapped = 1;
    int j;
    while (swapped) {
        swapped = 0;
        pass ++;      
        for (j=0;j<size-pass;j++) {
		if (lst[j]>lst[j+1]){
		    swapped = 1;
		    swap(&lst[j],&lst[j+1]);
		}
        }
    }
}
```
We can still improve it a little because, if in an iteration the last exchange was done at position N, then all the elements located after this position N are in the right order. So, for the following iterations, it is useless to explore them again. We would then have something like this:
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
	
## Complexity	

From an educational point of view, this algorithm is very interesting. It is easy to understand and therefore also easy to explain. It is easy to code in most computer languages and gives the opportunity to manipulate vectors or lists. It can be used as a basis for many optimization exercises. And it has a catchy name.

But, in the real world, it must be said that it is not very efficient. It is often decried, even considered as "naive" and "to be avoided absolutely". However, it has the merit of being sufficiently efficient on small lists or lists that are already partially sorted. 

In the worst case, with data sorted in reverse, the successive runs of the table require  <b>(<em>n</em><sup>2</sup> - <em>n</em>)</b> comparisons and <b>(<em>n</em><sup>2</sup> - <em>n</em>) / 2</b> exchanges. For example, for a list of <b><em>n</em></b> items,  it will take, in the worst case, 90 comparisons [ 10<sup>2</sup> - 10 ] and 45 exchanges  [ (10<sup>2</sup> - 10) / 2 ]. The time complexity is therefore quadratic, of the order of <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

When the initial order of the items to be sorted is random, it is considered that <b>(<em>n</em><sup>2</sup> - <em>n</em>) / 4</b>  exchanges will be needed. The complexity will therefore also be <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

In the best case, when the list is already sorted, it will take <b>(<em>n</em> - 1)</b> comparisons and no permutations. The time complexity is linear, in  <b><span class='bigo'>O</span>(<em>n</em></b>).

In terms of space used (memory cost of the algorithm), the complexity of the bubble sort is linear. It grows at the same speed as the number of input data. It is therefore <b><span class='bigo'>O</span>(<em>n</em></b>).

The animation below allows to verify, in an empirical way, this evolution of the number of operations according to the number of elements to sort.

<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('A');return false;">Average complexity</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('W');return false;">Worst case complexity</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('B');return false;">Complexity at best</button>
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
				<th>Data size</th>
				<th>Comparisons</th>
				<th>Exchanges</th>
				<th>Total</th>
			</tr>		
		</table> 	
	</div>
</div>
	
To get a more concrete idea of the performance of this algorithm, suppose that you have to sort alphabetically the directory of the inhabitants of several large cities. And that the machine you have at your disposal can perform, say, ten million instructions per second . Here is the time that would be needed with this method:

<div class="w3-responsive">
<div class="w3-metro-darken w3-bar">
<label class="w3-bar-item" >Operations per second  :</label>
<input class="w3-input w3-bar-item" type="text" id="computerspeed" value="10 000 000">
<button class="w3-bar-item w3-button" onclick="calc_sort_speed('fr');return false;">Calculate!</button>
</div>
<br>
<table id = "exectimes"  class="w3-table-all w3-hoverable ">
	<thead><!-- en-tête -->
		<tr class="w3-red"><!-- première ligne -->
			<th>City</th>
			<th>Population</th>
			<th >Estimated sorting time</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td> Chicoutimi</td>
			<td class="w3-right-align">69 004</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Brussels</td>
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
			<td>Berlin</td>
			<td class="w3-right-align">3 520 031</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Toronto</td>
			<td class="w3-right-align">6 555 205</td>
			<td class="w3-right-align"></td>
		</tr>		
		<tr>
			<td>London</td>
			<td class="w3-right-align" >8 416 535</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Mexico</td>
			<td class="w3-right-align">20 879 830</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Cairo</td>
			<td class="w3-right-align">24 439 785</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Delhi</td>
			<td class="w3-right-align">26 454 086</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Jakarta</td>
			<td class="w3-right-align">35 143 473</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Sao Paulo</td>
			<td class="w3-right-align">36 315 271</td>
			<td class="w3-right-align"></td>
		</tr>		
		<tr>
			<td>Tokyo</td>
			<td class="w3-right-align">42 796 714</td>
			<td class="w3-right-align"></td>
		</tr>
	</tbody>
</table>
</div>
	
