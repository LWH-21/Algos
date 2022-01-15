---
layout: post
title: Tri à peigne
description: "Tri à peigne"
author: LWH
image: assets/img/sort/combsort.webp
keywords: 
 - Tri à peigne
 - comb sort
 - tri de Dobosiewicz
 - Wodzimierz Dobosiewicz
date: 2021-12-19
last_modified_at: 2021-12-19
categories: 
 - Algorithmes de tri 
lang : fr
locale : fr-FR
ref : combsort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
  -  assets/js/sort/combsort.js
  -  https://www.jdoodle.com/assets/jdoodle-pym.min.js
---

Le tri à peigne (Comb Sort en anglais) est un algorithme de tri par comparaison qui améliore de façon notable les performances du tri à bulle. Cet algorithme fut conçu en 1980 par Włodzimierz Dobosiewicz.

Il apporte une solution au problème des "lièvres" et des "tortues". Les "lièvres", sont les éléments de fin de liste qui migrent rapidement à leur place définitive et les "tortues" ceux de début de liste qui se déplacent lentement. 

Plutôt que de toujours comparer des éléments adjacents, le tri à peigne va comparer des éléments séparés d'une distance plus grande. Au départ, on compare des éléments éloignés, puis on réduit progressivement l'intervalle à chaque itération jusqu'à ce qu'il ne soit plus que de 1 en fin de traitement. Le tri à bulles est donc un cas particulier du tri à peigne dans lequel l'intervalle est toujours de 1. 

Cet algorithme est beaucoup plus performant que le tri bulle classique parce qu'il effectue davantage de comparaisons et d'échanges "à longue portée" ; la permutation de deux éléments qui sont éloignés l'un de l'autre 
permettra de les rapprocher beaucoup plus rapidement de leur position définitives que la permutation de deux éléments proches.

L'animation ci-dessous détaille le fonctionnement du tri à peigne :


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
void combsort(int vect[], int size)
{
    int gap = size;
    bool swapped = TRUE;
    int current;
    int lastswap=size;
   
    while (( swapped) || (gap>1)) {
        swapped = FALSE;
        gap = gap / 1.3;
        if (gap == 9 || gap == 10) gap = 11;
        if (gap<1) gap=1;
        for (current=0;current<size-gap;current++) {
            if (vect[current]>vect[current+gap]){
                swapped = TRUE;
                swap(&vect[current], &vect[current + gap]);
                if (gap==1) lastswap=current+gap;
            }
        }
        if (gap==1) size=lastswap;
    }
}
</code>
</pre>
</div>

<div id="python" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
<pre>
<code class="language-python">
import math

def combsort (vect):
    size,swapped = len(vect),True
    gap,lastswap = size,size
    while (swapped) or (gap>1):
        swapped=False
        gap = math.trunc(gap / 1.3)
        if (gap<1):
            gap=1
        for current in range(size-gap):
            if (vect[current]>vect[current+gap]):
                swapped=True
                vect[current], vect[current + gap] = vect[current + gap],vect[current]
                if (gap==1):
                    lastswap = current + gap
        if (gap==1):
            size=lastswap;
    return vect
</code>
</pre>
</div>		
	
<div id="pascal" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
<pre>
<code>
procedure combsort(var vect:  array of integer);

var size : integer;
    gap : integer;
    current : integer;
    swapped : boolean;
    lastswap : integer;
    tmp : integer;
    
begin
    size:=High(vect);
    gap:=size;
    lastswap:=0;
    swapped:=true;
    while (swapped) do
    begin
        gap := trunc(gap / 1.3);
        if (gap>1) then 
        begin
             gap := trunc(gap / 1.3);
             if (gap= 9) or (gap = 10) then gap := 11;
             if gap<1 then gap:=1;
        end; 
        if (gap=1) then swapped:=false;
        For current := 0 To size - gap do
        begin
            if vect[current]>vect[current+gap] Then
            begin
                tmp:=vect[current];
                vect[current]:=vect[current+gap];
                vect[current+gap]:=tmp;
                swapped:=true;
                if (gap=1) then lastswap:=current+gap;
            end;
        end;
        if (gap=1) then size:=lastswap;
    end;
end;
</code>
</pre>
</div>
	
<div id="basic" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">	
<pre>
<code>

</code>
</pre>
</div>
	
<div id="flowchart" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/comb_sort_flowchart.svg' | relative_url }}" alt="Ordinogramme du tri à peigne " style="max-width: 100%;height: auto;"/> 
</div>

<div id="nsd" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<img src="{{ 'assets/img/sort/combsort_nsd.svg' | relative_url }}" alt="Graphe NSD (Nassi-Shneidermann) du tri à peigne " style="max-width: 100%;height: auto;" /> 
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

## Variantes

<div data-pym-src="https://www.jdoodle.com/iembed/v0/lib?stdin=0&amp;arg=0&amp;rw=1"></div>


## Complexité	

La complexité du tri peigne est difficile à évaluer. Mais bon, je vais essayer. D'abord le meilleur des cas, avec une liste déjà triée ou pratiquement triée. Beaucoup d'articles sur le sujet disent que, dans le meilleur des cas, le tri peigne est plus performant que le tri bulle. C'est évidemment faux. Avec une liste déjà triée de disons 100 éléments, le tri bulle classique fera 99 comparaisons avant de s'arrêter. Le tri peigne fera une itération avec un gap de 76, puis une itération avec un gap de 58, puis avec un gap de 44... Et terminera avec un gap de 1. En tout, il fera 1003 comparaisons. Le graphique ci-dessous montre le nombre de comparaisons effectuées par un tri bulle classique (en bleu) et le tri peigne (en rouge) :
	
<div style="align:center;">
<img src="{{ 'assets/img/sort/BestCaseCombsort.webp' | relative_url }}" alt="Comparaisons dans le meilleur des cas" style="max-width: 100%;height: auto;"/> 
</div>	
La forme "en escalier" de la courbe du tri Combsort provient du nombre d'incréments qui évolue en fonction de la taille des données à trier.
	
Pour la complexité moyenne, j'ai lu un [papier](https://homepages.cwi.nl/~paulv/papers/sorting.pdf) d'un certain Paul VITANYI  qui étudiait la complexité des différents tris basés sur la complexité de Kolmogorov mais j'avoue ne pas avoir tout bien compris. Et surtout, expérimentalement, je ne trouve pas du tout les mêmes résultats. M. Vitanyi annonce une compléxité de omega (n^2/2^p) avec p, le nombre d'incréments. On peut dire que p est égal à ln(N)/ln(1.3) (avec N le nombre d'éléments à trier et un facteur de réduction de 1.3). Donc, avec N=10 on aurait 8 incréments (le nombre est un peu sur-évalué parce qu'en pratique, on arrondi à l'entier inférieur, mais bon) et 0.390625 comparaisons. 
Ok, c'est une borne inférieure, et il faudrait la multiplier par une constante. Le plus embêtant, c'est que, plus la taille des données augmente, plus le calcul n^2/2^p diminue :

| Nombre d'éléments | Nombre d'incréments | Nombre d'opérations |
|-------------------|---------------------|---------------------|
| 10                | 8                   | 0.390625            |
| 100               | 17                  | 0.07629345          |
| 1000              | 26                  | 0,014901161         | 
| 100 000           | 43                  | 0,001136868         | 
| 500 000           | 50                  | 0,000222045         | 
| 1 000 000         | 52                  | 0,000222045         | 


Est-ce que cela signifie que le nombre d'opération évolue de manière inverve avec la taille des données à trier ? C'est évidemment absurde et j'ai dû me tromper quelque part.

J'ai donc lancé l'algorithme avec quelques 100 000 jeux de données aléatoires (d'une taille entre 10 et 500 000 éléments) et j'ai ensuite analysé les résultats avec R. En moyenne, la complexité serait plutôt de 3*log2(N)*N (avec N, la taille du vecteur à trier). 
Enfin, j'ai créé un tableau avec 42 796 714	 (le nombre d'habitants de Tokyo) entiers aléatoires que j'ai trié avec cette méthode. Là encore, les résultats sont très proches de l'estimation 3*log2(N)*N  et surtout étonnement rapides pour un algorithme aussi simple.
	
Le graphique suivant donne le nombre de comparaisons pour 21255 listes aléatoires de tailles comprises entre 10 et 100 000 éléments. En bleu, la courbe d'équation y=log2(x)*x. La quasi-totalité des mesures se situe sous la courbe. Il n'y en a que deux qui la dépassent. Même si ça ne prouve rien, il semblerait que 3*log2(N)*N serait une borne supérieure pour la complexité en moyenne.

<img src="{{ 'assets/img/sort/combsort_comp.png' | relative_url }}" alt="Nombre de comparaisons en moyenne" style="max-width: 100%;height: auto;"/> 

Enfin, la complexité dans le pire des cas me pose un autre problème. Pour ce tri, le pire des cas n'est pas la liste triée en ordre inverse. Par exemple, le tri de la liste [5,4,3,2,1] nécessitera 13 comparaisons et 4 échanges tandis que celui de la liste [5,2,3,4,1] demandera 13 comparaisons et 7 échanges.
	
<div class="w3-metro-darken w3-bar">
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('A');return false;">Complexité moyenne</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('W');return false;">Données en ordre inverse</button>
<button class="w3-bar-item w3-button" onclick="sortcplx.calc('B');return false;">Données déjà triées</button>
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
	
Pour vous faire une idée plus concrète des performances de cet algorithme, supposez que vous deviez trier par ordre alphabétique le répertoire des habitants de plusieurs grandes villes. Et que la machine dont vous disposez peut effectuer disons dix millions d’instructions par seconde. Voici le temps qui serait nécessaire avec cette méthode :

<div class="w3-responsive">
<div class="w3-metro-darken w3-bar">
<label class="w3-bar-item" >Nombre d'opérations par secondes :</label>
<input class="w3-input w3-bar-item" type="text" id="computerspeed" value="10 000 000">
<button class="w3-bar-item w3-button" onclick="calc_sort_speed();return false;">Calculer</button>
</div>
<br>
<table id = "exectimes"  class="w3-table-all w3-hoverable ">
	<thead><!-- en-tête -->
		<tr class="w3-red">
			<th> Ville</th>
			<th> Nombre d'habitants</th>
			<th >Estimation de la durée du tri</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Churriana de la Vega</td>
			<td class="w3-right-align">16 689</td>
			<td class="w3-right-align"></td>
		</tr>	
		<tr>
			<td>Helsinki </td>
			<td class="w3-right-align">631 695</td>
			<td class="w3-right-align"></td>
		</tr>	
		<tr>
			<td>Palerme</td>
			<td class="w3-right-align">673 735</td>
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
			<td>Saint-Pétersbourg</td>
			<td class="w3-right-align">5 131 942</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Rio</td>
			<td class="w3-right-align" >6 718 000</td>
			<td class="w3-right-align"></td>
		</tr>
		<tr>
			<td>Bombay</td>
			<td class="w3-right-align">18 414 288</td>
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


<img src="{{ 'assets/img/sort/combsort_fr.webp' | relative_url }}" alt="Comic Strip " style="max-width: 100%;height: auto;"/> 
