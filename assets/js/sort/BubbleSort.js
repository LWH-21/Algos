function opentab(tname) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tname).style.display = "block";  
}

const sortdem = new SortDemo(this,'sort_canvas');
const algo = new SortAlgo(sortdem);
sortdem.init(algo);  
sortdem.renderer.render(sortdem.scene,sortdem.camera);