
function Combsort(r) {
	this.count = 0;
	this.renderer = r;
	this.data=[];
	this.states=[];
	this.logdata=false;	
}

Combsort.prototype.init = function(m,t) {
	this.max = m;
	this.data=[];
	if (t) {
		for (let i=0; i<m;i++) { this.data.push(t[i]);}
	}
	this.states=[];
	this.logdata=true;
	this.sort();
}

Combsort.prototype.render = function() {
}

Combsort.prototype.setup = function(n,style) {
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

Combsort.prototype.log = function (a,s,d) {
	if (this.logdata) {
		let statut = {action : '_',s : 0,d :0};
		statut.action=a;
		statut.s=s;
		statut.d=d;
		this.states.push(statut);
	}
}

Combsort.prototype.sort = function() {
	
	var nb_comp=0,nb_ex=0;
	var l = this.data.length;
	var gap = l;
	var lastswap = l;
	var swapped=true;

	while (gap > 1 || swapped) {
		gap = Math.trunc(gap * 10 /13);
		if (gap == 9 || gap == 10) gap = 11;
		if (gap < 1) gap = 1;
		swapped=false;
		for (let i = 0; i+gap < l; i++) {
			nb_comp++;
			this.log('C',i,i+gap);
			if (this.data[i] > this.data[i+gap]) {
				let temp = this.data[i];
				this.data[i] = this.data[i + gap];
				this.data[i+gap] = temp;
				swapped = true;
				nb_ex++;
				if (gap==1) lastswap=i+gap;
				this.log('S',i,i+gap);
				} else {this.log('P',i,i+gap);}
			}
			if (gap==1) l=lastswap;
	}
	return[nb_comp,nb_ex];
}

Combsort.prototype.stop = function() {
	this.states=[];
	if (this.renderer) { this.renderer.stop();}
}

Combsort.prototype.next = function() {
	if (this.renderer) {
		if (this.states.length>0) {
			var statut = this.states.shift();			
			if (statut.action=='C') {this.renderer.compare(statut.s,statut.d);}
			if (statut.action=='S') { this.renderer.echange(statut.s,statut.d);}
			if (statut.action=='P') { this.renderer.pose(statut.s,statut.d);}
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
  if (sortdem) {sortdem.settab(tname); }
}

function timetosort(nb, v, locale) {
		// y = 0,0028x2 - 5,4959x
		//nb = 0.003*nb*nb - 5.5*nb;
		// 3*log2(n) * nb
		nb = 3 * Math.log2(nb) * nb;
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
		if (! locale) {
			locale=document.getElementsByTagName("html")[0].getAttribute("lang");
		}
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

SortDemo.prototype.shuffle = function(k) {
	var temp;
	var j;
	this.algo.stop();
	switch (k) {
		case 'A':
			for (let j=0;j<5;j++) {
				for (let i=0;i<20;i++) {
					let b = Math.floor(Math.random() * 20);
					temp = this.elts[i];
					this.elts[i] = this.elts[b];
					this.elts[b] = temp;
				};
			};
			break;
		case 'B':
			this.elts.sort(function (a, b) { return a.value - b.value;});
			break;
		case 'I':
			this.elts.sort(function (a, b) { return b.value - a.value;});
			break;			
		case 'W':
			this.elts.sort(function (a, b) { return a.value - b.value;});
			var t = [5, 5, 3, 4, 3, 9, 5, 4, 7, 6, 2, 8, 9, 8, 2, 3, 9, 1, 3, 1];
			for (let i=0;i<20;i++) {
				if (this.elts[i].value != t[i]) {
					for (let j=i+1;j<20;j++) {
						if (this.elts[j].value==t[i]) {
							tmp=this.elts[i];
							this.elts[i]=this.elts[j];
							this.elts[j]=tmp;
							break;
						}
					}
				
				}
			}
			break;
	}
	for (let i=0;i<20;i++) {
		let ob = this.elts[i];
		let b = Math.floor(Math.random() * 3);
		ob.posdest.push([ob.obj.position.x,-2+b,ob.obj.position.z]);
		ob.posdest.push([-13+(i+1)*2,b,ob.obj.position.z +1 - b]);
		ob.posdest.push([-26.5+(i+1)*2.5,-4.9,15]);
	}
	this.swap=[];
	this.comp=[];
}

const sortdem = new SortDemo(this,'sort_canvas');
const algo = new Combsort(sortdem);
sortdem.init(algo);
sortdem.renderer.render(sortdem.scene,sortdem.camera);




const sortcplx = new SortCplx('sortcplx','Tcomplex');
const compalgo = new Combsort();
sortcplx.init(compalgo);


if(document.body.contains(document.getElementById('computerspeed'))){
	calc_sort_speed(document.getElementsByTagName("html")[0].getAttribute("lang"));
}
