
Elt.prototype.getCanvasPos = function() {
	let x = this.obj.position.x;
	let y = this.obj.position.y;
	x = (x+25) * 12;
	y =  -160+ 12*this.obj.position.z;
	
	return [x,y];
}

function InsertionSort(r) {
	this.count = 0;
	this.renderer = r;
	this.data=[];
	this.states=[];
	this.logdata=false;
}

InsertionSort.prototype.init = function(m,t,tid) {
	this.max = m;
	this.data=[];
	this.data_id=[];
	if (t) {
		for (let i=0; i<m;i++) { this.data.push(t[i]);}
	}
	if (tid) {
		for (let i=0; i<m;i++) { this.data_id.push(tid[i]);}
	}
	this.states=[];
	this.logdata=true;
	this.sort();
}

InsertionSort.prototype.render = function() {
}

InsertionSort.prototype.setup = function(n,style) {
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

InsertionSort.prototype.log = function (a,s,d) {
	if (this.logdata) {
		let statut = {action : '_',s : 0,d : 0, id : -1,  x : 0, y : 0, z : 0};
		statut.action=a;
		statut.s=s;
		statut.d=d;
		this.states.push(statut);
	}
}

InsertionSort.prototype.log = function (a,id,x,y,z) {
	if (this.logdata) {
		let statut = {action : '_',s : 0,d : 0, id : -1,  x : 0, y : 0, z : 0};
		statut.action=a;
		statut.s=-1;
		statut.d=-1;
		statut.id = id;
		statut.x=x;
		statut.y=y;
		statut.z =z
		this.states.push(statut);
	}	
}

InsertionSort.prototype.sort = function() {
	
	var nb_comp=0,nb_ex=0;
	var upper = this.data.length ;
	
	var d = false;
	var currentid =-1;
	if (this.data_id) {
		d=true;
	}

	for (let i = 1; i < upper; i++) {
		
		
		let current = this.data[i];
		
		if (d) { 
			currentid = this.data_id[i];
			this.log('L',currentid,i,3,0);
		}
		let j = i-1;
		
				
		nb_comp ++;
		while ((j > -1) && (current < this.data[j])) {
				if (d) { this.log('N',currentid,this.data_id[j]);}
				this.data[j+1] = this.data[j];
				if (d) {this.data_id[j+1] = this.data_id[j];}
				
				if (d) {this.log('E',currentid,this.data_id[j+1]);}
				nb_ex++;
				
				if (d) {
					this.log('L',currentid,j+1,3,0.5);
					this.log('L',this.data_id[j+1],j+1,0,0.5);				
					this.log('L',this.data_id[j+1],j+1,0,0);
				}
				j--;
				
				nb_comp++;
            }
		if (d) {
			this.log('L',currentid,j+1,3,0.5);
			this.log('L',currentid,j+1,0,0);
			this.data_id[j+1]=currentid;
		}
        this.data[j+1] = current;
	}
	return[nb_comp,nb_ex];
}

InsertionSort.prototype.stop = function() {
	this.states=[];
	if (this.renderer) { this.renderer.stop();}
}

InsertionSort.prototype.next = function() {
	if (this.renderer) {
		if (this.states.length>0) {
			var statut = this.states.shift();			
			if (statut.action=='C') {this.renderer.compare(statut.s,statut.d);}
			if (statut.action=='D') {this.renderer.decale(statut.s,statut.d);}
			if (statut.action=='E') {this.renderer.note_echange(statut.id,statut.x);}
			if (statut.action=='L') {this.renderer.place(statut.id,statut.x, statut.y, statut.z);}
			if (statut.action=='N') {this.renderer.note_compare(statut.id,statut.x);}
			if (statut.action=='S') { this.renderer.echange(statut.s,statut.d);}
			if (statut.action=='P') { this.renderer.pose(statut.s,statut.d);}
			if (statut.action=='R') { this.renderer.reserve(statut.s,statut.d);}
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
		nb = nb * (nb - 2) / 4;
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
const algo = new InsertionSort(sortdem);
sortdem.init(algo);
sortdem.renderer.render(sortdem.scene,sortdem.camera);


const sortcplx = new SortCplx('sortcplx','Tcomplex');
const compalgo = new InsertionSort();
sortcplx.init(compalgo);


if(document.body.contains(document.getElementById('computerspeed'))){
	calc_sort_speed(document.getElementsByTagName("html")[0].getAttribute("lang"));
}