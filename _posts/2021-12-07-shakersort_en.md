---
layout: post
title: Shuttle sort
description: "Shuffle sort is an extension of bubble sort. It is used primarily as an educational tool."
author: LWH
image: assets/img/sort/cocktailsort.webp
keywords: 
 - Shaker Sort
 - cocktail sort
 - ripple sort
 - shuttle sort
 - bidirectional bubble sort
date: 2021-12-11
last_modified_at: 2021-12-11
categories: 
 - sort algorithms
lang : en
locale : en-US
ref : shakersort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
  -  assets/js/sort/CocktailSort.js
  -  https://www.jdoodle.com/assets/jdoodle-pym.min.js
---

Shuttle sort, also known as bidirectional bubble sort, cocktail sort, shaker sort, ripple sort, shuffle sort, shuttle sort or coktail sort, is an extension of bubble sort. It is used primarily as an educational tool. 

It tries to mitigate a defect of the bubble sort: the problem of rabbits and turtles. It's a situation when a heavy bubble is placed at the end of the array. While the light bubbles (rabbits) are ascending rapidly, the heavy bubble (turtle) descends only one position per each iteration.

This algorithm will speed up the turtles by changing direction at each iteration. So with each change of direction, the "rabbits" become "turtles" and vice versa. It not only allows the larger elements to migrate quickly to the end of the list, but also allows the smaller elements to migrate faster to the beginning.

The animation below shows how the shuttle sort works :


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
		  <a href="#" class="w3-bar-item w3-button" title="Basic" onclick="opentab('basic');return false;">Basic</a>				  
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
<pre>
<code class="language-c">
void shakersort(int vect[], int size) {
    int swapped;
    int current=0, direction=1;
    int startvect=1, endvect=size - 1;
    do {
        swapped=0;
        while (((direction==1) && (current<endvect)) || ((direction==-1) && (current>startvect))) {
            current += direction;            
            if (vect[current]<vect[current-1]) {
                int temp = vect[en_cours];
                vect[current]=vect[current-1];
                vect[current-1]=temp;
                swapped=1;
            }
        }
        if (direction==1) endvect--; else startvect++;
        direction = -direction;
    } while (swapped);
}	
</code>
</pre>
</div>

<div id="python" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
<pre>
<code class="language-python">
def shakersort(vect):
    swapped,direction,current = True,1,0
    startvect,endvect = 0,len(vect)-2
    while swapped == True:
        swapped = False
        while (current<endvect and direction==1) or \
        (current>startvect and direction==-1) :
            # Test si echange
            if vect[current] > vect[current + 1]:
                swapped = True
                # On echange les deux elements
                vect[current], vect[current + 1] = \
                vect[current + 1],vect[current]
            current = current + direction
        # On change le sens du parcours
        if direction==1:
            endvect = endvect - 1
        else:
            startvect = startvect + 1
        direction = -direction
    return vect  	
</code>
</pre>
</div>		
	
<div id="pascal" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
<pre>
<code>	
procedure shakersort(var vect:  array of integer);

var startvect : integer;
    endvect : integer;
    current : integer;
    swapped : boolean;
    tmp : integer;
    
begin
    startvect:=0;
    endvect:=High(vect) - 1;
    swapped:=true;
    while (swapped) do
    begin
        swapped:=false;
        For current := startvect To endvect do
        begin
            if vect[current]>vect[current+1] Then
            begin
                tmp:=vect[current];
                vect[current]:=vect[current+1];
                vect[current+1]:=tmp;
                swapped:=true;
            end;
        end;
        if swapped Then
        begin
            endvect := endvect -1;
            swapped := false;                
            For current := endvect DownTo startvect Do
            begin
                if vect[current]>vect[current+1] Then
                begin
                    tmp:=vect[current];
                    vect[current]:=vect[current+1];
                    vect[current+1]:=tmp;
                    swapped:=true;
                end;            
            end;
            startvect := startvect +1;
        end;
    end;
end;	
</code>
</pre>
</div>
	
<div id="basic" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">	
<pre>
<code>
Sub shakersort(vect() As Long)
    Dim As Long startvect = 0
    Dim As Long endvect   = UBound(vect) -1
    Dim As Long current
    Dim AS Boolean swapped
    Do
        swapped = false
        For current = startvect To endvect
            If vect(current) > vect(current +1) Then
                Swap vect(current), vect(current +1)
                swapped = true
            End If
        Next
        endvect = endvect -1
        If swapped = 0 Then 
            swapped = false                  
            For current = endvect To startvect Step -1
                If vect(current) > vect(current +1) Then
                    Swap vect(current), vect(current +1)
                    swapped = true
                End If
            Next
            startvect = startvect +1
        End If
    Loop Until not swapped          
End Sub	
</code>
</pre>
</div>
	
<div id="flowchart" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/cocktail_sort_flowchart.svg' | relative_url }}" alt="Ordinogramme du tri shaker " style="max-width: 100%;height: auto;"/> 
</div>

<div id="nsd" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/cocktail_sort_nsd.svg' | relative_url }}" alt="Graphe NSD (Nassi-Shneidermann) du tri shaker " style="max-width: 100%;height: auto;" /> 
</div>
	
</figure>

<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="sortdem.start(algo);return false;">Sort!</button>
	<button class="w3-bar-item w3-button" onclick="algo.stop();return false;">Stop</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Speed</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Normal" href="PleaseEnableJavascript.html" onclick="sortdem.setSpeed(0.5);return false;">Normal</a>
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

The mini-game below allows you to try to sort, in order of increasing weight, 5 barrels, with a Roberval scale to compare them. You can try to solve it with the shuttle sort method.

<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortgame.shuffle(sortgame);return false;">Shuffle</button>
<button class="w3-bar-item w3-button" onclick="sortgame.shownumbers();return false;">View</button>
<button class="w3-bar-item w3-button" onclick="sortgame.solve();return false;">Solve it!</button>
</div>

<figure>
<div style="width:80%;align:center;">
<center>
<canvas id="sortgame" class="animation" height="300" width="486" style="position:relative;border:1px solid #000000;touch-action:none;"></canvas>
</center>
</div>
</figure>

## Variations

The most common version of this algorithm is composed of two nested loops.

```c
void swap(int *a, int *b)
{
    int tmp = *a;
    *a = *b;
    *b = tmp;
}
void shakersort(int vect[], int size) {
    int step, current;
    for (step = 1; step <= size / 2; step++)
    {
        for (current = step - 1; current < size - step; current++)
            if (vect[current] > vect[current+1])
                swap(&vect[current], &vect[current + 1]);
        for (current = size - step - 1; current >= step; current--)
            if (vect[current] < vect[current-1])
                swap(&vect[current], &vect[current - 1]);
    }
}
```

But I prefer a version with a single loop and a change of direction. And, as for the bubble sort, you can stop after one iteration without permutation.

<div data-pym-src="https://www.jdoodle.com/embed/v0/4bvp?stdin=0&amp;arg=0&amp;rw=1"></div>


## Complexity	

The shaker sort does not add much to the bubble sort. 

In the worst case, with data sorted in reverse, the successive runs of the table require  <b>(<em>n</em><sup>2</sup> - <em>n</em>) / 2</b> exchanges. For example, for a list of <b><em>n</em></b> items,  it will take, in the worst case, 45 comparisons and 45 exchanges  [ (10<sup>2</sup> - 10) / 2 ]. The time complexity is therefore quadratic, of the order of <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

When the initial order of the items to be sorted is random, it is considered that <b>(<em>n</em><sup>2</sup> - <em>2*n</em>) / 4</b>  exchanges will be needed. The complexity will therefore also be <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

In the best case, when the list is already sorted, it will take <b>(<em>n</em> - 1)</b> comparisons and no permutations. The time complexity is linear, in  <b><span class='bigo'>O</span>(<em>n</em></b>).

In terms of space used (memory cost of the algorithm), the complexity of the shuttle sort is linear. It grows at the same speed as the number of input data. It is therefore <b><span class='bigo'>O</span>(<em>n</em></b>).

The animation below allows to verify, in an empirical way, this evolution of the number of operations according to the number of elements to sort.

<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('A');return false;">Average complexity</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('W');return false;">Worst case</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('B');return false;">Best case</button>
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
				<th>Swaps</th>
				<th>Total</th>
			</tr>		
		</table> 	
	</div>
</div>
	
To get a more concrete idea of the performance of this algorithm, suppose that you have to sort alphabetically the directory of the inhabitants of several large cities. And that the machine you have at your disposal can perform, say, ten million instructions per second . Here is the time that would be needed with this method:

<div class="w3-responsive">
<div class="w3-metro-darken w3-bar">
<label class="w3-bar-item" >Operations per second :</label>
<input class="w3-input w3-bar-item" type="text" id="computerspeed" value="10 000 000">
<button class="w3-bar-item w3-button" onclick="calc_sort_speed();return false;">Calculate!</button>
</div>
<br>
<table id = "exectimes"  class="w3-table-all w3-hoverable ">
	<thead>
		<tr class="w3-red">
			<th>City</th>
			<th>Population</th>
			<th >Estimated sorting time</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Paimpol</td>
			<td class="w3-right-align">7 172</td>
			<td class="w3-right-align"></td>
		</tr>	
		<tr>
			<td>Helsinki </td>
			<td class="w3-right-align">631 695</td>
			<td class="w3-right-align"></td>
		</tr>	
		<tr>
			<td>Denver</td>
			<td class="w3-right-align">705 576</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Stockholm</td>
			<td class="w3-right-align">975 551</td>
			<td class="w3-right-align"></td>
		</tr>	
		<tr>
			<td>Berlin</td>
			<td class="w3-right-align">3 520 031</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Nairobi</td>
			<td class="w3-right-align">4 734 881</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Barcelona</td>
			<td class="w3-right-align">5 407 264 </td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Rio</td>
			<td class="w3-right-align" >6 718 000</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Mosco</td>
			<td class="w3-right-align">12 655 050</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Lagos</td>
			<td class="w3-right-align">22 829 561</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Shanghai</td>
			<td class="w3-right-align">24 870 895</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Seoul</td>
			<td class="w3-right-align">26 000 782</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Manila</td>
			<td class="w3-right-align">28 644 207</td>
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


<img src="{{ 'assets/img/sort/shakersort_en.webp' | relative_url }}" alt="Comic Strip " style="max-width: 100%;height: auto;"/> 
