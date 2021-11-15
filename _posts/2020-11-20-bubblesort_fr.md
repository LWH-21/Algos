---
layout: post
title: Le tri bulle
date: 2021-11-20
category: 
 - Algorithmes de tri 
lang : fr
ref : bubblesort
custom_css:
  - http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css
custom_js:
  - http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js
  - https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js
  - sort/sort_algo.js
  - sort/sort_demo.js
---
Le principe du tri à bulles (bubble sort ou sinking sort) est de comparer deux à deux les éléments e1 et e2 consécutifs d'un tableau et d'effecteur une permutation si e1 > e2. On continue de trier jusqu'à ce qu'il n'y ait plus de permutation.

L'animation ci-après détaille le fonctionnement du tri bulle :

<div class="container">  
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
</div>

<div class="container">  
  <h2>Onglets dynamiques</h2>  
  <ul class="nav nav-tabs">  
    <li class="active"><a data-toggle="tab" href="#home">Accueil</a></li>  
    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>  
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>  
    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>  
  </ul>  
  
  <div class="tab-content">  
    <div id="home" class="tab-pane fade in active">  
      <h3>HOME</h3>  
      <p>Un langage de balisage est un langage de programmation utilisé pour rendre le texte plus
            interactif et dynamique. Il peut transformer un texte en images, tableaux, liens, etc.</p>  
    </div>  
    <div id="menu1" class="tab-pane fade">  
      <h3>Menu 1</h3>  
      <p>Java est un langage de programmation de haut niveau, robuste, sécurisé et orienté objet.</p>  
    </div>  
    <div id="menu2" class="tab-pane fade">  
      <h3>Menu 2</h3>  
      <p>SQL est juste un langage de requête, ce n'est pas une base de données. Pour effectuer des requêtes SQL,
      vous devez installer n'importe quelle base de données, par exemple Oracle, MySQL, MongoDB, PostGre SQL, SQL Server, DB2, etc.</p>  
    </div>  
    <div id="menu3" class="tab-pane fade">  
      <h3>Menu 3</h3>  
      <p>Le langage C est développé pour créer des applications système qui dirigent
       interagit avec les périphériques matériels tels que les pilotes, les noyaux, etc.</p>  
    </div>  
  </div>  
</div>  
