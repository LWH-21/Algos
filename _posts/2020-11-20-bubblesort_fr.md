---
layout: post
title: Le tri bulle
date: 2021-11-20
category: 
 - Algorithmes de tri 
lang : fr
ref : bubblesort
custom_css:
  - "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css
custom_js:
  - http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js
  - sort/sort_algo.js
  - sort/sort_demo.js
---
Le principe du tri à bulles (bubble sort ou sinking sort) est de comparer deux à deux les éléments e1 et e2 consécutifs d'un tableau et d'effecteur une permutation si e1 > e2. On continue de trier jusqu'à ce qu'il n'y ait plus de permutation.

L'animation ci-après détaille le fonctionnement du tri bulle :

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>

  <ul class="nav nav-tabs">  
    <li class="active"><a href="#">Accueil</a></li>  
    <li class="dropdown">  
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu 1 <span class="caret"></span></a>  
      <ul class="dropdown-menu">  
        <li><a href="#">Submenu 1-1</a></li>  
        <li><a href="#">Submenu 1-2</a></li>  
        <li><a href="#">Submenu 1-3</a></li>                          
      </ul>  
    </li>  
    <li><a href="#">Menu 2</a></li>  
    <li><a href="#">Menu 3</a></li>  
  </ul>  
