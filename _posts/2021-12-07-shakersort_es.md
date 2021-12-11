---
layout: post
title: Cocktail sort
description: "Ordenamiento de burbuja bidireccional"
author: LWH
image: assets/img/sort/cocktailsort.webp
keywords: 
 - Shaker Sort
 - cocktail sort
 - ordenamiento de burbuja bidireccional
 - algoritmo de ordenamiento
date: 2021-12-11
last_modified_at: 2021-12-11
categories: 
 - Algoritmos de ordenación
lang : es
locale : es-ES
ref : shakersort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
  -  assets/js/sort/CocktailSort.js
  -  https://www.jdoodle.com/assets/jdoodle-pym.min.js
---

El ordenamiento de burbuja bidireccional es una mejora de la ordenación en burbujas. Se utiliza principalmente como herramienta educativa. 

Intenta mitigar un defecto de la clasificación por burbujas: el problema de los conejos y las tortugas. Se trata de una situación en la que se coloca una burbuja pesada al final de la matriz. Mientras las burbujas ligeras (conejos) ascienden rápidamente, la burbuja pesada (tortuga) desciende sólo una posición por cada iteración.

Este algoritmo acelerará las tortugas cambiando de dirección en cada iteración. Así, con cada cambio de dirección, los "conejos" se convierten en "tortugas" y viceversa. Esto no sólo permite que los elementos más grandes migren rápidamente al final de la lista, sino que también permite que los elementos más pequeños migren más rápido al principio.

La siguiente animación muestra cómo funciona el algoritmo:


<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animación</button>
	<button class="w3-bar-item w3-button" onclick="opentab('graph')">Diagrama</button>
	<button class="w3-bar-item w3-button" onclick="opentab('schem')">Red de ordenamiento</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Código</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Pascal" onclick="opentab('pascal');return false;">Pascal</a>
		  <a href="#" class="w3-bar-item w3-button" title="Python" onclick="opentab('python');return false;">Python</a>
		  <a href="#" class="w3-bar-item w3-button" title="C" onclick="opentab('C');return false;">C</a>
		  <a href="#" class="w3-bar-item w3-button" title="Basic" onclick="opentab('basic');return false;">Basic</a>				  
		  <a href="#" class="w3-bar-item w3-button" title="nsd" onclick="opentab('nsd');return false;">Diagrama Nassi-Schneiderman</a>
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
            if vect[current] > vect[current + 1]:
                swapped = True
                vect[current], vect[current + 1] = \
                vect[current + 1],vect[current]
            current = current + direction        
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
	<button class="w3-bar-item w3-button" onclick="sortdem.start(algo);return false;">Ordenar</button>
	<button class="w3-bar-item w3-button" onclick="algo.stop();return false;">Stop</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Velocidad</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Normal"  onclick="sortdem.setSpeed(0.5);return false;">Normal</a>
		  <a href="#" class="w3-bar-item w3-button" title="Rapida" onclick="sortdem.setSpeed(1);return false;">Rápida</a>
		  <a href="#" class="w3-bar-item w3-button" title="Lenta"  onclick="sortdem.setSpeed(0.2);return false;">Lenta</a>
		  <a href="#" class="w3-bar-item w3-button" title="Muy lenta"  onclick="sortdem.setSpeed(0.1);return false;">Muy lenta</a>
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

El minijuego que se presenta a continuación permite intentar clasificar, en orden de peso creciente, 5 barriles, con una balanza Roberval para compararlos. 

<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortgame.shuffle(sortgame);return false;">Mezclar</button>
<button class="w3-bar-item w3-button" onclick="sortgame.shownumbers();return false;">Ver</button>
<button class="w3-bar-item w3-button" onclick="sortgame.solve();return false;">Resolvar</button>
</div>

<figure>
<div style="width:80%;align:center;">
<center>
<canvas id="sortgame" class="animation" height="300" width="486" style="position:relative;border:1px solid #000000;touch-action:none;"></canvas>
</center>
</div>
</figure>

## Distintas variantes

La versión más común de este algoritmo se compone de dos bucles anidados.

<pre><code>
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
</code></pre>

Pero prefiero una versión con un solo bucle y un cambio de dirección. 

<div data-pym-src="https://www.jdoodle.com/embed/v0/4bvp?stdin=0&amp;arg=0&amp;rw=1"></div>


## Rendimiento

El ordenamiento de burbuja bidireccional no es mucho más eficiente que el ordenamiento de burbuja convencional. 

En el caso desfavorable, con un arreglo ordenado en orden inverso, realizará un número  de intercambios de <b>(<em>n</em><sup>2</sup> - <em>n</em>) / 2</b>. Por ejemplo, para una lista de <b><em>10</em></b> elementos se necesitarán 45 comparaciones y 45 intercambios [ (10<sup>2</sup> - 10) / 2 ]. El número de comparaciones o de intercambios en el caso más desfavorable pertenece al orden <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

En el caso óptimo, con un arreglo ya ordenado, realizará un número de comparaciones  de <b>(<em>n</em> - 1)</b>. El número de comparaciones en el caso más favorable pertenece al orden de <b><span class='bigo'>O</span>(<em>n</em></b>).

En el caso promedio realizará un número de comparaciones de <b>(<em>n</em><sup>2</sup> - <em>2*n</em>) / 4</b>, sólo un poco mejor que el ordenamiento de burbuja convencional. 


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
				<th>Tamaños de datos</th>
				<th>Comparaciones</th>
				<th>Intercambios</th>
				<th>Total</th>
			</tr>		
		</table> 	
	</div>
</div>
	
Para tener una idea más concreta del rendimiento de este algoritmo, he aquí los tiempos que serían necesarios para ordenar la lista de habitantes de algunas grandes ciudades :

<div class="w3-responsive">
<div class="w3-metro-darken w3-bar">
<label class="w3-bar-item" >Operaciones por segundo:</label>
<input class="w3-input w3-bar-item" type="text" id="computerspeed" value="10 000 000">
<button class="w3-bar-item w3-button" onclick="calc_sort_speed();return false;">¡Calcula!!</button>
</div>
<br>
<table id = "exectimes"  class="w3-table-all w3-hoverable ">
	<thead>
		<tr class="w3-red">
			<th>Ciudad</th>
			<th>Población</th>
			<th >Duración estimada</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Paimpol (Bretaña, Francia)</td>
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
			<td>Estocolmo</td>
			<td class="w3-right-align">975 551</td>
			<td class="w3-right-align"></td>
		</tr>	
		<tr>
			<td>Berlín</td>
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
			<td>Río</td>
			<td class="w3-right-align" >6 718 000</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Moscú</td>
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
			<td>Seúl</td>
			<td class="w3-right-align">26 000 782</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Manila</td>
			<td class="w3-right-align">28 644 207</td>
			<td class="w3-right-align"></td>
		</tr>		
		<tr>
			<td> Tokio</td>
			<td class="w3-right-align">42 796 714</td>
			<td class="w3-right-align"></td>
		</tr>
	</tbody>
</table>
</div>


<img src="{{ 'assets/img/sort/shakersort_es.webp' | relative_url }}" alt="Comic Strip " style="max-width: 100%;height: auto;"/> 
