
function CocktailSort(r) {
	this.count = 0;
	this.renderer = r;
	this.data=[];
	this.states=[];
	this.logdata=false;
}

CocktailSort.prototype.init = function(m,t) {
	this.max = m;
	this.data=[];
	if (t) {
		for (let i=0; i<m;i++) { this.data.push(t[i]);}
	}
	this.states=[];
	this.logdata=true;
	this.sort();
}

CocktailSort.prototype.render = function() {
}

CocktailSort.prototype.setup = function(n,style) {
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

CocktailSort.prototype.log = function (a,s,d) {
	if (this.logdata) {
		let statut = {action : '_',s : 0,d :0};
		statut.action=a;
		statut.s=s;
		statut.d=d;
		this.states.push(statut);
	}
}

CocktailSort.prototype.sort = function() {
	
	var nb_comp=0,nb_ex=0;
	var upper = this.data.length - 1;
	var lower = 0;
	let swapped = true;
	while (swapped){
		swapped=false;
		for (let i = lower; i< upper;i++){
			nb_comp++;
			this.log('C',i,i+1);
			if (this.data[i] > this.data[i + 1]){
				let temp = this.data[i];
				this.data[i] = this.data[i + 1];
				this.data[i+1] = temp;
				swapped = true;
				nb_ex++;
				this.log('S',i,i+1);
				} else {this.log('P',i,i+1);}
			} 
		
		if (!swapped) break;
		swapped=false;
		upper --;
		
		for (let j = upper; j > lower; j--){
			nb_comp++;
			this.log('C',j-1,j);
            if (this.data[j-1] > this.data[j]) {
                let temp = this.data[j];
                this.data[j] = this.data[j - 1];
                this.data[j - 1] = temp;
                swapped = true;
				nb_ex++;
				this.log('S',j-1,j);
			} else { this.log('P',j-1,j);}
		}
		lower ++;
	}	
	return[nb_comp,nb_ex];
}

CocktailSort.prototype.stop = function() {
	this.states=[];
	if (this.renderer) { this.renderer.stop();}
}

CocktailSort.prototype.next = function() {
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
}

function timetosort(nb, v, locale) {
		nb = ((nb * nb) - ( 2* nb)) / 4;
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

const sortdem = new SortDemo(this,'sort_canvas');
const algo = new CocktailSort(sortdem);
sortdem.init(algo);
sortdem.renderer.render(sortdem.scene,sortdem.camera);



const sortgame = new SortGame('sortgame',5);
const gamealgo = new CocktailSort(sortgame);
sortgame.init(gamealgo);



const sortcplx = new SortCplx('sortcplx','Tcomplex');
const compalgo = new CocktailSort();
sortcplx.init(compalgo);


if(document.body.contains(document.getElementById('computerspeed'))){
	calc_sort_speed(document.getElementsByTagName("html")[0].getAttribute("lang"));
}
