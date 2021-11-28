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
last_modified_at: 2021-11-14
category: 
 - Algorithmes de tri 
lang : fr
locale : fr-FR
ref : bubblesort
custom_js:
  -  assets/js/three/three.min.js
  -  assets/js/three/OrbitControls.js
  -  assets/js/sort/SortDemo.js
  -  assets/js/sort/BubbleSort.js
---


Le principe du <em>tri à bulles</em> (bubble sort ou sinking sort en anglais) est très simple : pour trier une liste, on compare son premier et son second élément et on les échange si nécessaire. Puis on fait la même chose pour le second et le troisième, puis pour le troisième et le quatrième... jusqu'à ce qu'on arrive à la fin de la liste. Ensuite, on recommence à partir du début. Jusqu'à ce que la liste soit triée.

On sait que la liste est triée si on peut la parcourir en entier sans effectuer de permutation.

On remarque, qu'après la première itération, l'élément le plus grand se trouve à la fin de la liste. Il est donc inutile de le comparer avec le précédent. A la fin de la seconde itération, les deux éléments les plus grands qui sont à la fin de la liste. A chaque itération, on peut donc s'arrêter un peu plus tôt.

L’animation ci-dessous détaille le fonctionnement du <mark>tri bulle</mark> :
	
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
<pre class="C">	
void bubble_sort(int* list, int size)
{
	int pass = 0;
	bool swapped = true;
	int current;
	while (swapped) {
	    swapped = false;
	    pass ++;
	    for (current=0;current<size-pass;current++) {
		if (lst[current]>lst[current+1]){
		    swapped = true;
		    // On permute les deux éléments
		    int temp = lst[current];
		    lst[current] = lst[current+1];
		    lst[current+1] = temp;
		}
	    }
	}
}
</pre>
</div>

<div id="python" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
<pre class="python">
def bubble_sort(lst):
swapped = True
pass = 0
while swapped == True:
    swapped = False
    pass = pass + 1
    for current in range(0, len(tableau) - passage):
	if lst[current] > lst[current + 1]:
	    swapped = True
	    # On echange les deux elements
	    lst[current], lst[current + 1] = lst[current + 1],lst[current]
return tableau  
</pre>	
</div>		
	
<div id="pascal" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
<pre class="pascal">
type tab = array[1..20] of integer;
procedure bubble_sort(var tableau : tab);
    
var swapped : boolean;
    current : integer;
    temp : integer;
    pass : integer;
     
begin
  pass := 1;
  REPEAT
    swapped := false;
    for current := 1 to 20 - pass do
    begin
	if (lst[current] > lst[current + 1]) then
	begin
	    { on échange les deux éléments }
	    temp := lst[current];
	    lst[current]:=lst[current + 1];
	    lst[current + 1]:=temp;
	    swapped := true;
	end;
    end;
    pass := pass + 1;
    UNTIL (not swapped);
end;
</pre>
</div>
	
<div id="caml" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">	
<pre class="caml">	
let bublle_sort lst =
        let pass= ref 1 and swapped = ref true in
        while (!swapped = true) do
            swapped := false;
            pass := !pass + 1;
            for current = 0 to (Array.length lst) - !pass do
                if lst.(current) > lst.(current + 1) then
                begin
                    (* On echange les deux elements *)
                    swapped := true;
                    let temp = lst.(current) in
                    begin
                       lst.(current) <- lst.(current + 1);
                       lst.(current + 1) <- temp;
                    end
                end
            done;
        done;
    lst;;
 </pre>
</div>
	
<div id="flowchart" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">		
<svg xmlns="http://www.w3.org/2000/svg" style="background-color: rgb(255, 255, 255);" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="571px" height="611px" viewBox="-0.5 -0.5 571 611"><defs/><g><path d="M 81 41 L 81 72.76" fill="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 81 78.76 L 77 70.76 L 81 72.76 L 85 70.76 Z" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="1" y="1" width="160" height="40" rx="6" ry="6" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 21px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><b>START</b></div></div></div></foreignObject><text x="81" y="25" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">START</text></switch></g><path d="M 261 391 L 261 512.76" fill="none" stroke="#3700cc" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 261 518.76 L 257 510.76 L 261 512.76 L 265 510.76 Z" fill="#3700cc" stroke="#3700cc" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 405px; margin-left: 263px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); background-color: rgba(255, 255, 255, 1); "><div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; background-color: rgb(255, 255, 255); white-space: nowrap;">No</div></div></div></foreignObject><text x="263" y="408" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="11px" text-anchor="middle">No</text></switch></g><path d="M 311 351 L 352.76 351" fill="none" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 358.76 351 L 350.76 355 L 352.76 351 L 350.76 347 Z" fill="#005700" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 351px; margin-left: 336px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); background-color: rgba(255, 255, 255, 1); "><div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; background-color: rgb(255, 255, 255); white-space: nowrap;">Yes</div></div></div></foreignObject><text x="336" y="354" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="11px" text-anchor="middle">Yes</text></switch></g><path d="M 261 311 L 311 351 L 261 391 L 211 351 Z" fill="#99ffff" stroke="#3333ff" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 349px; margin-left: 216px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">cpt &lt; Passnum</div></div></div></foreignObject><text x="261" y="353" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">cpt &lt; Passnum</text></switch></g><path d="M 261 561 L 261 601 L 561 601 L 561 141 L 89.24 141" fill="none" stroke="#3700cc" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 83.24 141 L 91.24 137 L 89.24 141 L 91.24 145 Z" fill="#3700cc" stroke="#3700cc" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="201" y="521" width="120" height="40" rx="6" ry="6" fill="#99ffff" stroke="#3333ff" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 541px; margin-left: 202px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Passnum = passnum - 1</div></div></div></foreignObject><text x="261" y="545" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">Passnum = passnum - 1</text></switch></g><path d="M 131 201 L 261 201 L 261 232.76" fill="none" stroke="#001dbc" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 261 238.76 L 257 230.76 L 261 232.76 L 265 230.76 Z" fill="#001dbc" stroke="#001dbc" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 206px; margin-left: 160px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); background-color: rgba(255, 255, 255, 1); "><div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; background-color: rgb(255, 255, 255); white-space: nowrap;">Yes</div></div></div></foreignObject><text x="160" y="209" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="11px" text-anchor="middle">Yes</text></switch></g><path d="M 81 241 L 81 512.76" fill="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 81 518.76 L 77 510.76 L 81 512.76 L 85 510.76 Z" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 370px; margin-left: 82px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); background-color: rgba(255, 255, 255, 1); "><div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; background-color: rgb(255, 255, 255); white-space: nowrap;">No</div></div></div></foreignObject><text x="82" y="373" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="11px" text-anchor="middle">No</text></switch></g><path d="M 81 161 L 131 201 L 81 241 L 31 201 Z" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 199px; margin-left: 36px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Passnum&gt;0 ?</div></div></div></foreignObject><text x="81" y="203" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">Passnum&gt;0 ?</text></switch></g><path d="M 261 281 L 261 301 L 261 291 L 261 302.76" fill="none" stroke="#3700cc" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 261 308.76 L 257 300.76 L 261 302.76 L 265 300.76 Z" fill="#3700cc" stroke="#3700cc" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="201" y="241" width="120" height="40" rx="6" ry="6" fill="#99ffff" stroke="#3333ff" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 261px; margin-left: 202px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">cpt = 1</div></div></div></foreignObject><text x="261" y="265" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">cpt = 1</text></switch></g><path d="M 421 461 L 421 512.76" fill="none" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 421 518.76 L 417 510.76 L 421 512.76 L 425 510.76 Z" fill="#005700" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="361" y="421" width="120" height="40" rx="6" ry="6" fill="#ccffe6" stroke="#4d9900" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 441px; margin-left: 362px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">swap arr[cpt] arr[cpt+1]</div></div></div></foreignObject><text x="421" y="445" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">swap arr[cpt] arr[cp...</text></switch></g><path d="M 81 121 L 81 152.76" fill="none" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 81 158.76 L 77 150.76 L 81 152.76 L 85 150.76 Z" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="1" y="81" width="160" height="40" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 101px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Passnum = len(arr) - 1</div></div></div></foreignObject><text x="81" y="105" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">Passnum = len(arr) - 1</text></switch></g><rect x="1" y="521" width="160" height="40" rx="6" ry="6" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 541px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><b>END</b></div></div></div></foreignObject><text x="81" y="545" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">END</text></switch></g><path d="M 421 391 L 421 411 L 421 401 L 421 412.76" fill="none" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 421 418.76 L 417 410.76 L 421 412.76 L 425 410.76 Z" fill="#005700" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 406px; margin-left: 421px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); background-color: rgba(255, 255, 255, 1); "><div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; background-color: rgb(255, 255, 255); white-space: nowrap;">Yes</div></div></div></foreignObject><text x="421" y="409" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="11px" text-anchor="middle">Yes</text></switch></g><path d="M 481 351 L 501 351 L 501 491 L 429.24 491" fill="none" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 423.24 491 L 431.24 487 L 429.24 491 L 431.24 495 Z" fill="#005700" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 451px; margin-left: 501px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); background-color: rgba(255, 255, 255, 1); "><div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; background-color: rgb(255, 255, 255); white-space: nowrap;">No</div></div></div></foreignObject><text x="501" y="454" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="11px" text-anchor="middle">No</text></switch></g><path d="M 421 311 L 481 351 L 421 391 L 361 351 Z" fill="#ccffe6" stroke="#4d9900" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 351px; margin-left: 362px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><div>arr[cpt] <br /></div><div>&gt;<br /></div><div>arr[cpt+1]<br /></div></div></div></div></foreignObject><text x="421" y="355" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">arr[cpt]...</text></switch></g><path d="M 481 541 L 531 541 L 531 291 L 269.24 291" fill="none" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 263.24 291 L 271.24 287 L 269.24 291 L 271.24 295 Z" fill="#005700" stroke="#005700" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="361" y="521" width="120" height="40" rx="6" ry="6" fill="#ccffe6" stroke="#4d9900" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 541px; margin-left: 362px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgba(0, 0, 0, 1); "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">cpt = cpt + 1</div></div></div></foreignObject><text x="421" y="545" fill="rgba(0, 0, 0, 1)" font-family="Helvetica" font-size="12px" text-anchor="middle">cpt = cpt + 1</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">SVG 1.1 non pris en charge</text></a></switch></svg></div>	

<div id="nsd" class="w3-container tab animation" style="display:none ;   width:100%;  height:395px; background-color:white;  overflow:scroll;">
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

Cet algorithme n'est pas très performant. Il est souvent décrié, voire considéré comme "naïf" et réservé à des fins pédagogiques. Toutefois, il a le mérite d'être suffisament performant sur de petites listes ou des listes déjà partiellement triéés. 
	
Pour vous faire une petite idée des performances de cet algorithme, supposez que vous deviez trier les noms des habitants de plusieurs grandes villes. Et que la machine dont vous disposez peut effecter disons un million d'instructions par seconde (on ne tient pas compte des problèmes de mémoire,de disques etc...). Voici le temps que mettrait le tri avec cette méthode :

<div class="w3-responsive">
<div class="w3-metro-darken w3-bar">
<label class="w3-bar-item" >Nombre d'opérations par secondes :</label>
<input class="w3-input w3-bar-item" type="text" id="computerspeed" value="10 000 000">
<button class="w3-bar-item w3-button" onclick="calc_sort_speed('fr');return false;">Calculer</button>
</div>
<table id = "exectimes"  class="w3-table-all w3-responsive">
	<thead><!-- en-tête -->
		<tr><!-- première ligne -->
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

