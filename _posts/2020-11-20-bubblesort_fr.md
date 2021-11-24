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
custom_css:
 - https://www.w3schools.com/w3css/4/w3.css
---
Le principe du tri à bulles (bubble sort ou sinking sort) est de comparer deux à deux les éléments e1 et e2 consécutifs d'un tableau et d'effecteur une permutation si e1 > e2. On continue de trier jusqu'à ce qu'il n'y ait plus de permutation.

L'animation ci-après détaille le fonctionnement du tri bulle :

<canvas id="ins_cnv" height="300" width="900" style="border:1px solid #000000;width:100%"></canvas>

<div class="w3-container">
  <h2>Tabs</h2>
  <p>Tabs are perfect for single page web applications, or for web pages capable of displaying different subjects. Click on the links below.</p>
</div>

<div class="w3-bar w3-black">
  <button class="w3-bar-item w3-button" onclick="openCity('London')">London</button>
  <button class="w3-bar-item w3-button" onclick="openCity('Paris')">Paris</button>
  <button class="w3-bar-item w3-button" onclick="openCity('Tokyo')">Tokyo</button>
</div>

<div id="London" class="w3-container city">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="w3-container city" style="display:none">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" class="w3-container city" style="display:none">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

<script>
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}
</script>
