---
layout: post
title: Shaker Sort
description: "Animation de l'algorithme de tri 'Shaker Sort'"
author: LWH
image: assets/img/sort/cocktailsort.webp
keywords: 
 - Shaker Sort
 - cocktail sort
 - ripple sort
 - shuttle sort
 - tri bulle bi-directionnel
 - tri boustrophedon
date: 2021-12-11
last_modified_at: 2021-12-11
category: 
 - Algorithmes de tri 
lang : fr
locale : fr-FR
ref : shakersort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
  -  assets/js/sort/CocktailSort.js
---

Le tri "Shaker", également appelé tri "Cocktail", tri "Shuttle", tri "boustrophédon" ou tri à bulles bidirectionnel est une variante du tri à bulles.

Un des problèmes avec le tri à bulle classique, c'est celui des "lièvres" et des "tortues". On remarque en effet que dans le tri à bulle classique on a des "lièvres" (ce sont les éléments qui migrent rapidement à leur place définitive) et des "tortues" qui sont les éléments qui se déplacent lentement vers leur place définitive.

L'idée du tri shaker est donc de changer de direction à chaque passe. Et à chaque changement de direction, les "lièvres" deviennent "tortues" et inversement. Il permet non seulement aux plus grands éléments de migrer vers la fin de la série mais également aux plus petits éléments de migrer vers le début. 

L'animation ci-dessous détaille le fonctionnement du tri shaker :


<div class="w3-bar w3-black">
	<button class="w3-bar-item w3-button" onclick="opentab('anim')">Animation</button>
	<button class="w3-bar-item w3-button" onclick="opentab('graph')">Graphique</button>
	<button class="w3-bar-item w3-button" onclick="opentab('schem')">Schéma</button>
	<div class="w3-dropdown-hover">
		<button class="w3-button">Code</button>
		<div class="w3-dropdown-content w3-bar-block w3-card-4">
		  <a href="#" class="w3-bar-item w3-button" title="Pascal" onclick="opentab('pascal');return false;">Pascal</a>
		  <a href="#" class="w3-bar-item w3-button" title="Python" onclick="opentab('python');return false;">Python</a>
		  <a href="#" class="w3-bar-item w3-button" title="C" onclick="opentab('C');return false;">C</a>
		  <a href="#" class="w3-bar-item w3-button" title="Basic" onclick="opentab('caml');return false;">Caml</a>				  
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
	<!-- https://quickhighlighter.com/ -->
	<pre>
	</pre>
</div>

<div id="python" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
	<pre>
	</pre>
</div>		
	
<div id="pascal" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
	<pre>
	</pre>
</div>
	
<div id="basic" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">	
	<pre>
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

La version de cet algorithme que l'on rencontre le plus souvent est composée de deux boucles imbriquées.

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

Comme pour le tri bulle, on peut s'arrêter après un parcours sans permutation, quelque soit le sens.

<div data-pym-src="https://www.jdoodle.com/embed/v0/4bvp?stdin=0&amp;arg=0&amp;rw=1"></div>


## Complexité	

Le tri shaker n'apporte pas grand chose au tri bulle. 

Dans le pire des cas, avec des données triées à l’envers, les parcours successifs du tableau imposent d’effectuer <b>(<em>n</em><sup>2</sup> - <em>n</em>)</b> comparaisons et <b>(<em>n</em><sup>2</sup> - <em>n</em>) / 2</b> échanges. Par exemple, pour une liste de <b><em>n</em></b> éléments, il faudra, dans le pire des cas, faire 45 comparaisons et 45 échanges [ (10<sup>2</sup> - 10) / 2 ]. La complexité en temps est donc quadratique, de l’ordre de <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

En moyenne, lorsque l'ordre initial des éléments à trier est aléatoire, on considère qu’il faudra faire <b>(<em>n</em><sup>2</sup> - <em>6*n</em>) / 4</b> échanges. C'est un peu mieux que le tri bulle classique mais la complexité reste de l'ordre de <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

Dans le meilleur des cas, quand la liste est déjà triée, il faudra <b>(<em>n</em> - 1)</b> comparaisons et aucune permutation. La complexité en temps est linéaire, en <b><span class='bigo'>O</span>(<em>n</em><sup>2</sup></b>).

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
		<tr class="w3-red">
			<th> Ville</th>
			<th> Nombre d'habitants</th>
			<th > Durée du tri</th>
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
			<td> Berlin</td>
			<td class="w3-right-align">3 520 031</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Nairobi</td>
			<td class="w3-right-align">4 734 881</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Barcelone</td>
			<td class="w3-right-align">5 407 264 </td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Rio</td>
			<td class="w3-right-align" >6 718 000</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Moscou</td>
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
			<td>Séoul</td>
			<td class="w3-right-align">26 000 782</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Manille</td>
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

Vous pouvez changer le nombre d'instructions par seconde, pour tester.

<img src="{{ 'assets/img/sort/shakersort_fr.webp' | relative_url }}" alt="Comic Strip " style="max-width: 100%;height: auto;"/> 