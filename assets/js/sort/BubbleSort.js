
function BubbleSort(r) {
	this.count = 0;
	this.step = 0;
	this.renderer = r;
	this.swap=false;
	this.data=[];
	//SortAlgo.call(this,r);
}

BubbleSort.prototype.init = function(m) {
	this.count=0;
	this.step=0;
	this.swap=false;
	this.max = m;
	//SortAlgo.call(this,m);
}

BubbleSort.prototype.render = function() {
}

BubbleSort.prototype.setup = function(n,style) {
	this.data=[];
	
	switch (style) {
		case 'A' : for (let i=0;i<n;i++){this.data.push(Math.random()*100);}
		           break;
		case 'B' : for (let i=0;i<n;i++){this.data.push(i);}
				   break;
		case 'W' : for (let i=n;i>0;i--) {this.data.push(i);}
				   break;
		
	}
}

BubbleSort.prototype.sort = function() {
	var nb_comp=0;
	var nb_ex=0;
	var swapped = true;
	var phase=0;
	var l = this.data.length - 1;
	while (swapped) 
	{
		swapped=false;
		for (let i = 0; i<l - phase;i++){
			nb_comp++;
			if (this.data[i]>this.data[i+1]) {
				swapped=true;
				nb_ex++;
				let tmp = this.data[i];
				this.data[i]=this.data[i+1];
				this.data[i+1]=tmp;
			}
		}
	}
	return[nb_comp,nb_ex];
}

BubbleSort.prototype.stop = function() {
	this.count=21;
	this.swap=false;
	if (this.renderer) { this.renderer.stop();}
}

BubbleSort.prototype.next = function() {
	if (this.renderer) {
		if (this.count<this.max - 1 - this.step) {
			let j=this.count;
			let a=this.renderer.compare(j,j+1);
			if (a>=0) {
				this.renderer.pose(j,j+1);
			} else {
				this.renderer.echange(j,j+1);
				this.swap=true;
			}
			this.count++;
		} else {
			if (this.swap) {
				this.swap=false;
				this.count=0;
				this.step++;
			} else  {
				this.renderer.stop();
			}
		}
	}
}

function opentab(tname) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tname).style.display = "block";  
}

function timetosort(nb, v, locale) {
		nb = nb * ( nb -1) / 4;
		var ti = nb / v;
		var oti = ti;
		var y,d,h,m,s;
		var res='';
		y = Math.floor(ti / (3600*24*365));
		ti = ti % (3600*24*365);
		d= Math.floor(ti / (3600*24));
		ti = ti % (3600*24);
		h = Math.floor(ti / 3600);
		ti = ti % 3600;
		m = Math.floor(ti / 60);
		s=Math.floor(ti % 60);
		res='';
		var sy,sm,sd,sh,ss;
		sy='years';sm='months',sd='days',sh='hours',ss='sec',sm='minutes';
		if (locale=='fr') {
			sy='ans';sm='mois',sd='jours',sh='heures',sm='minutes',ss='secondes';
		} else if (locale=='es') {
			sy='años';sm='meses',sd='días',sh='horas',sm='minutos',ss='segundos';
		}
		res="";
		if (y>0) { res=res+y+" "+sy+" ";}
		if (d>0) { res=res+d+" "+sd+" ";}
		if (h>0) { res=res+h+" "+sh+" ";}
		if (m>0) { res=res+m+" "+sm+" ";}
		if (s>0) { res=res+s+" "+ss+" ";}
		if ((s==0) && (m==0) && (h==0) && (d==0) && (y==0)) {
			res=(new Intl.NumberFormat(locale,{maximumSignificantDigits: 3}).format(oti))+" "+ss;
		}
		return res;
}
		
function calc_sort_speed(locale) {
		
		locale = locale.trim();
		locale = locale.toLowerCase();
		locale = locale.substring(0,2);
		var speed=document.getElementById("computerspeed").value;
		speed = speed.replace(/ /g, "");
		speed=speed.split(" ").join("");
		speed=speed.split(" ").join("");
		speed=speed.replace(/[^\d.eE-]/g, ''); 
		if (isNaN(speed)) { speed = 100;}
		if (speed < 100) { speed = 100;}
		if (speed> 1E15) {
			speed=1E15;
		}
		document.getElementById("computerspeed").value=(new Intl.NumberFormat(locale).format(speed));
		
		var array = document.getElementById("exectimes").rows; //on récupère les lignes du tableau
		var linescount = array.length;//on peut donc appliquer la propriété length
 
		for(var i=1; i<linescount; i++)//on peut directement définir la variable i dans la boucle
		{
			let Col = array[i].cells;//on récupère les cellules de la ligne
			let nb = Col[1].innerHTML;
			nb = nb.replace(/ /g, ""); 
			Col[2].innerHTML=timetosort(nb, speed,locale);
		}
}

const sortdem = new SortDemo(this,'sort_canvas');
const algo = new BubbleSort(sortdem);
sortdem.init(algo);
sortdem.renderer.render(sortdem.scene,sortdem.camera);



const sortgame = new SortGame('sortgame',5);
const gamealgo = new BubbleSort(sortgame);
sortgame.init(gamealgo);



const sortcplx = new SortCplx('sortcplx','Tcomplex');
const compalgo = new BubbleSort();
sortcplx.init(compalgo);


if(document.body.contains(document.getElementById('computerspeed'))){
	calc_sort_speed(document.getElementsByTagName("html")[0].getAttribute("lang"));
}
