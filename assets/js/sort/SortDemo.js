"use strict";

/* ***************************************************** */
/* SORTALGO ******************************************** */
/* ***************************************************** */

function SortAlgo(r) {
	this.count = 0;
	this.step = 0;
	this.renderer = r;
	this.swap=false;
}

SortAlgo.prototype.init = function(m) {
	this.count=0;
	this.step=0;
	this.swap=false;
	this.max = m;
}

SortAlgo.prototype.render = function() {
}

SortAlgo.prototype.setup = function() {
}

SortAlgo.prototype.stop = function() {
	this.count=21;
	this.swap=false;
}

SortAlgo.prototype.next = function() {		
		if (this.count<this.max -1 -this.step) {
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
			}
		}
}

function Elt(n, col, size) {

	const material = new THREE.MeshLambertMaterial({ //MeshPhongMaterial
		color: col,    //
		//flatShading: true,
		polygonOffsetFactor: 1,
		polygonOffsetUnits:1,
		//shininess: 100,
		alphaTest:0.102,
		fog:false
		});
	const Geometry = new THREE.BoxGeometry(1.5,size,1.5);
	Geometry.translate( 0,size / 2,0 );
	this.obj = new THREE.Mesh(Geometry,material);
	this.obj.name = n+'_'+size;
	this.value = size;
	this.color = col;
	this.posdest=[];
	this.poscnv=[];
}

Elt.prototype.getCanvasPos = function() {
	let x = this.obj.position.x;
	let y = this.obj.position.y;
	x = (x+25) * 12;
	y = -2*y + 20;
	return [x,y];
}

/* ***************************************************** */
/* SORTDEMO ******************************************** */
/* ***************************************************** */

SortDemo.prototype.animate = function(o) {
    o.render();
}

function SortDemo(parent,name) {
	this.aparent = parent;
	this.name = name;
	this.running = false;
	this.WIDTH = 640;
	this.HEIGHT = 295;
	this.speed = 0.5;
	this.swap = [];
	this.comp = [];
}

SortDemo.prototype.render_schema = function() {
	var ctx = this.schemcanvas.getContext("2d");
	ctx.font = "12px Arial";
	var a,b,x;
	var obja,objb;
	const h = 14;
	ctx.clearRect(0, 0, 640, 295);
	var nb = this.swap.length;
	
	let tab=[];
	for (let i=0;i<20;i++) {
		tab[i] = this.elts[i];
	}		
	for (let i=nb;i>0;i--) {
		[a,b]=this.swap[i - 1];		
		let temp = tab[a];
		tab[a] = tab[b];
		tab[b] = temp;
	}
	nb = this.comp.length;
	var size = 600 / (nb + 1);
	if (size>10) {size=10 };
	
	x=15;
	for (let i=0;i<20;i++) {

			ctx.strokeStyle = "black";
			ctx.lineWidth = 1;
			ctx.fillStyle = "#"+tab[i].color.toString(16);
			ctx.fillRect(2,7+i*h, 15, 15);
			ctx.strokeRect(2,7+i*h, 15, 15);
			

			ctx.fillStyle = "#"+this.elts[i].color.toString(16);
			ctx.fillRect(623,7+i*h, 15, 15);
			ctx.strokeRect(623,7+i*h, 15, 15);
			
			ctx.fillStyle = "black";
			ctx.fillText(tab[i].value, 5, 18+i*h);
			ctx.fillText(this.elts[i].value, 630, 18+i*h);
	}
	
	for (let i=0;i<20;i++) {
			ctx.beginPath();
			ctx.strokeStyle="blue";
			ctx.lineWidth = 1;
			ctx.moveTo(x,15+i*h);
			ctx.lineTo(623,15+i*h)
			ctx.stroke();
	}
	x=20;
	for (let i=0;i<nb;i++) {
		[a,b] =this.comp[i];
		ctx.beginPath();
		ctx.strokeStyle="red";
		ctx.lineCap = "round";
		ctx.lineWidth = 2;
		ctx.moveTo(x+size*(i+1),15+a*h);
		ctx.lineTo(x+size*(i+1),15+b*h);
		ctx.stroke();
	}
}

SortDemo.prototype.render_graph = function() {
	var ctx = this.graphcanvas.getContext("2d");
	ctx.font = "12px Arial";
	var a,b,x;
	var obja,objb;
	const h = 14;
	ctx.clearRect(0, 0, 640, 295);
	var nb = this.swap.length;
	var size = 600 / (nb + 1);
	if (size>20) {size=20 };
	
	let tab=[];
	for (let i=0;i<20;i++) {
		tab[i] = this.elts[i];
	}		
	for (let i=nb;i>0;i--) {
		[a,b]=this.swap[i - 1];		
		let temp = tab[a];
		tab[a] = tab[b];
		tab[b] = temp;
	}		
	x=15;
	for (let i=0;i<20;i++) {
			ctx.beginPath();
			ctx.strokeStyle="#"+tab[i].color.toString(16);
			ctx.lineWidth = 4;
			ctx.lineCap = "round";
			ctx.moveTo(x,15+i*h);
			if (nb==0) {
				ctx.lineTo(623,15+i*h)
			} else {
				ctx.lineTo(x+size,15+i*h);
			}
			ctx.stroke();
			ctx.strokeStyle = "black";
			ctx.lineWidth = 1;
			ctx.fillStyle = "#"+tab[i].color.toString(16);
			ctx.fillRect(2,7+i*h, 15, 15);
			ctx.strokeRect(2,7+i*h, 15, 15);
			

			ctx.fillStyle = "#"+this.elts[i].color.toString(16);
			ctx.fillRect(623,7+i*h, 15, 15);
			ctx.strokeRect(623,7+i*h, 15, 15);
			
			ctx.fillStyle = "black";
			ctx.fillText(tab[i].value, 5, 18+i*h);
			ctx.fillText(this.elts[i].value, 630, 18+i*h);
	}
	x=15+size;
	for (let j=0;j<nb;j++) {		
		[a,b] = this.swap[j];
		for (let i=0;i<20;i++) {
			ctx.beginPath();
			ctx.strokeStyle="#"+tab[i].color.toString(16);
			ctx.lineWidth = 4;
			ctx.lineCap = "round";
			if (i==a) {
				ctx.moveTo(x,15+i*h);
				ctx.lineTo(x+size,15+b*h);
				if (j==(nb - 1)) {ctx.lineTo(621,15+b*h);}
			} else
			if (i==b) {
				ctx.moveTo(x,15+i*h);
				ctx.lineTo(x+size,15+a*h);
				if (j==(nb - 1)) {ctx.lineTo(621,15+a*h);}				
			} else {
				ctx.moveTo(x,15+i*h);
				ctx.lineTo(x+size,15+i*h);
				if (j==(nb - 1))  {ctx.lineTo(621,15+i*h);}
				
			}	
			ctx.stroke();
		}
		let temp=tab[a];
		tab[a]=tab[b];
		tab[b]=temp;
		x=x+size;
	}
}

SortDemo.prototype.render_layer = function() {
	var ctx = this.layercanvas.getContext("2d");
	var x,y;
	ctx.clearRect(0, 0, 640, 295);
	ctx.font = "20px Arial";
	for (var i=0;i<20;i++) {
		ctx.strokeStyle = "black";
		ctx.fillStyle = "#"+this.elts[i].color.toString(16);
		[x,y] = this.elts[i].getCanvasPos();
		
		ctx.fillRect(x,y, 30, 30);
		ctx.strokeRect(x,y, 30, 30);

		ctx.fillStyle = "black";
		ctx.fillText(this.elts[i].value, x+7, y+20);
		/*y=25+i*30;
		ctx.fillRect(y,20, 30, 30);
		ctx.strokeRect(y,20, 30, 30);
		ctx.fillStyle = "black";
		ctx.fillText(this.elts[i].value, y+10, 40);*/
	}
}

SortDemo.prototype.render = function() {

	this.ready=true;
	var d = this.speed;
	for (var i=0;i<20;i++) {
		var e = this.elts[i];
		if (e.posdest.length>0) {
			this.ready=false;
			var [px,py,pz] = e.posdest[0];
			if ((px==e.obj.position.x) && (py==e.obj.position.y) && (pz==e.obj.position.z)) {
				e.posdest.shift();
			} else {
				if ( e.obj.position.y < py) {
					e.obj.position.y+=d;
					if (e.obj.position.y>py) e.obj.position.y=py;
				} else
				if ( e.obj.position.y > py) {
					e.obj.position.y-=d;
					if (e.obj.position.y<py) e.obj.position.y=py;
				}
				if ( e.obj.position.x < px) {
					e.obj.position.x+=d;
					if (e.obj.position.x>px) e.obj.position.x=px;
				} else
				if ( e.obj.position.x > px) {
					e.obj.position.x-=d;
					if (e.obj.position.x<px) e.obj.position.x=px;
				}
				if ( e.obj.position.z < pz) {
					e.obj.position.z+=d;
					if (e.obj.position.z>pz) e.obj.position.z=pz;
				} else
				if ( e.obj.position.z > pz) {
					e.obj.position.z-=d;
					if (e.obj.position.z<pz) e.obj.position.z=pz;
				}
			}
		}

	}
	if ((this.ready) && (this.running)) {
		this.algo.next();
	}
	
	if (this.algo) {
		this.algo.render();
	}

	requestAnimationFrame((e) => { this.animate(this);}	);

	this.renderer.render(this.scene,this.camera);
	this.controls.update();
	this.render_layer();
	
	this.render_graph();
	this.render_schema();
}

SortDemo.prototype.setSpeed = function(s) {
	this.speed=s;
	console.log(this.speed);
}

SortDemo.prototype.start = function() {
	if (this.algo) {
		this.running=true;
		this.algo.init(20);
		this.swap = [];
		this.comp = [];
		this.algo.next();
	}
}

SortDemo.prototype.stop = function() {
	if (this.algo) {
		this.algo.stop();
	}
}

SortDemo.prototype.compare = function(a,b) {
	var res = 0;
	if (this.elts[a].value>this.elts[b].value) {
		res = -1;
	} else if (this.elts[a].value<this.elts[b].value) {
		res=1;
	}
	this.elts[a].posdest.push([this.elts[a].obj.position.x,1,this.elts[a].obj.position.z]);
	this.elts[b].posdest.push([this.elts[b].obj.position.x,1,this.elts[b].obj.position.z]);
	this.comp.push([a,b]);
	return res;
}

SortDemo.prototype.echange = function(a,b) {
	var oa = this.elts[a];
	var ob = this.elts[b];
	ob.posdest.push([oa.obj.position.x,1,oa.obj.position.z-3]);
	oa.posdest.push([ob.obj.position.x,1,ob.obj.position.z+3]);
	ob.posdest.push([oa.obj.position.x,oa.obj.position.y,oa.obj.position.z]);
	oa.posdest.push([ob.obj.position.x,ob.obj.position.y,ob.obj.position.z]);
	this.elts[a]=ob;
	this.elts[b]=oa;
	this.elts[a].state='E';
	this.elts[b].state='E';
	this.swap.push([a,b]);
}

SortDemo.prototype.pose = function(a,b) {
	var oa = this.elts[a];
	var ob = this.elts[b];
	ob.posdest.push([ob.obj.position.x,ob.obj.position.y,ob.obj.position.z]);
	oa.posdest.push([oa.obj.position.x,oa.obj.position.y,oa.obj.position.z]);
	this.elts[a].state='_';
	this.elts[b].state='_';
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
		case 'W':
			this.elts.sort(function (a, b) { return b.value - a.value;});
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

SortDemo.prototype.init = function(a) {
    var mcanvas = document.getElementById(this.name);
	this.layercanvas = document.getElementById(this.name+'_layer');
	this.graphcanvas = document.getElementById(this.name+'_graph');
	this.schemcanvas = document.getElementById(this.name+'_schem');
	this.elts = [];
	this.swap=[];
	this.comp=[];
	this.algo = a;
    var WIDTH=mcanvas.width;
    var HEIGHT = mcanvas.height;

    // renderer
	this.renderer = new THREE.WebGLRenderer({canvas:mcanvas, antialias:true, preserveDrawingBuffer: false, alpha: false,  });
	
    this.renderer.setClearColor( 0xFFFFFF,0.5 );
    this.renderer.shadowMap.enabled=false;
    this.renderer.setPixelRatio(window.DevicePixelRatio);
	// Scene
    this.scene = new THREE.Scene();
	this.scene.background = new THREE.Color( 0xEEEEEE );
	//Camera
	const fov = 45;
	const aspect = WIDTH / HEIGHT;  // the canvas default
	const near = 0.1;
	const far = 100;
	this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	this.camera.position.set(0,7, 42);
    // Light
	const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    this.scene.add(light );
	const color = 0xFFFFFF;
    const intensity = 1;
    const light1 = new THREE.DirectionalLight(color, intensity);
    light1.position.set(10, 20,10);
    light1.target.position.set(5, 0, 0);
    this.scene.add(light1);
    this.scene.add(light1.target);
	// Ground
	const planeSize = 50;
	const planeGeo = new THREE.PlaneGeometry(60, 30);
    const planeMat = new THREE.MeshPhongMaterial({
		color: 0x1D1D1D,    // 0x1D1D1D
		flatShading: true,
		polygonOffsetFactor: 1,
		polygonOffsetUnits:1,
		shininess: 100,
		alphaTest:0.102,
		fog:false,
		side: THREE.DoubleSide
	});
	const mesh = new THREE.Mesh(planeGeo, planeMat);
	mesh.rotation.x = Math.PI * -.5;
	this.scene.add(mesh);
	mesh.position.set(0,-5,10);

	// elements
	let values = [3,1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4 ];
	let colors = [0xE3C800,0xF0A30A,0xFA6800,0xF472D0,0x00CCFF,0xD80073,0xDC4FAD,0xAA00FF,0x6A00FF,0x0050EF];
	var e;
	for (var i=1;i<21;i++) {
		e=new Elt('n_'+i,colors[values[i - 1] - 1],values[i - 1]);
		this.scene.add(e.obj);
		e.obj.position.set(-26.5+i*2.5,-4.9,15);
		this.elts.push(e);
	}

	this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
	this.controls.update();
	
	this.algo.setup();

	this.renderer.render(this.scene,this.camera);

	this.render();

}

/* ***************************************************** */
/* SORTGAME ******************************************** */
/* ***************************************************** */

function Barril(p,aparent) {
	this.parent = aparent;
	this.valeur=0;
	this.index=p;
	this.position=[[p,0]];
	[this.x,this.y]=this.getPos();
	this.sel = false;
	this.visible=true;
	this.drag = false;
	this.color='#FFFFFF';
}	

Barril.prototype.getPos = function() {
	if (! this.visible) { return [0,0];}
	if (! this.drag) {
		var p,w;
		[p,w] = this.position[0];
		var balsens = '=';
		let x=0;
		let y=0;
		switch (p) {
			case  0:
			case  1:
			case  2:
			case  3:
			case  4:
			case  5:
			case  6:
			case  7:
			case  8:
			case  9:
			case 10:
				y=200;
				x=20+((p-1)*45);
				break;
			case 11:
					balsens = this.parent.getBalsens();
					x=322;
					y=35;
					switch(balsens) {
						case '>' : y=25;break;
						case '<' : y=45;break;			
					}
					break;
			case 13:
					balsens = this.parent.getBalsens();
					x=415;
					y=35;
					switch(balsens) {
						case '<' : y=25;break;
						case '>' : y=45;break;			
					}
					break;					
			case 14:
			case 15:
			case 16:
			case 17:
				y=105;
				x=10+(p-14)*45;
				break;
			case 18:
			case 19:
			case 20:
			case 21:
				y=15;
				x=10+(p-18)*45;
				break;
		}
		return [x,y];
	} else {	
		return [this.x,this.y];
	}
}

Barril.prototype.move = function() {
	if ((! this.drag) && (this.visible)) {		
		var x,y,p,phase;
		var d=5;
		[x,y]=this.getPos();
		if ((x==this.x) && (y==this.y)) {
			if (this.position.length>1) {
				[p,phase] = this.position.shift();							
			}
			return;
		}
		if (this.x<x) {
			this.x+=d;
			if (this.x>x) { this.x=x;};
		}
		if (this.x>x) {
			this.x-=d;
			if (this.x<x) { this.x=x;};
		}
		if (this.y>y) {
			this.y-=d;
			if (this.y<y) { this.y=y;};
		}		
		if (this.y<y) {
			this.y+=d;
			if (this.y>y) { this.y=y;};
		}		
	}	
}

Barril.prototype.draw = function(ctx) {
	if (! this.visible) {
			return;
	}
	var x,y;
	x=this.x;
	y=this.y;
	
	ctx.lineWidth=1;
	ctx.lineJoin="round";
	ctx.lineCap="round";
	if (this.sel) {
		ctx.strokeStyle="#FF0000";
	} else {
		ctx.strokeStyle="#000000";
	}
	ctx.fillStyle=this.color;
	ctx.beginPath();ctx.moveTo(x+5,y);ctx.lineTo(x+35,y);ctx.bezierCurveTo(x+40,y,x+40,y+65,x+35,y+65);ctx.lineTo(x+5,y+65);ctx.bezierCurveTo(x,y+65,x,y,x+5,y);ctx.fill();ctx.stroke();
	ctx.beginPath();ctx.moveTo(x+10,y);ctx.bezierCurveTo(x+5,y,x+5,y+65,x+10,y+65);ctx.stroke();
	ctx.beginPath();ctx.moveTo(x+30,y);ctx.bezierCurveTo(x+35,y,x+35,y+65,x+30,y+65);ctx.stroke();
	ctx.beginPath();ctx.moveTo(x+20,y);ctx.lineTo(x+20,y+65);ctx.stroke();
	ctx.fillStyle="#9a9c9f";
	ctx.beginPath();ctx.moveTo(x+1,y+10);ctx.lineTo(x+39,y+10);ctx.lineTo(x+40,y+15);ctx.lineTo(x,y+15);ctx.closePath();ctx.fill();ctx.stroke();
	ctx.beginPath();ctx.moveTo(x,y+27);ctx.lineTo(x+40,y+27);ctx.lineTo(x+40,y+32);ctx.lineTo(x,y+32);ctx.closePath();ctx.fill();ctx.stroke();
	ctx.beginPath();ctx.moveTo(x,y+45);ctx.lineTo(x+40,y+45);ctx.lineTo(x+39,y+50);ctx.lineTo(x+1,y+50);ctx.closePath();ctx.fill();ctx.stroke();
	if (true) {
			ctx.fillStyle = "#000000";
			ctx.fillRect(x+10,y+20,20,20);
			ctx.fillStyle = "#ffffff";
			ctx.fillText(this.valeur,x+20,y+35);
	}
	
}

Barril.prototype.endDrag = function(p) {	
	var newpos=this.parent.getNearest(p.x,p.y);
	this.drag=false;
	if ((newpos>0) && (newpos<22)) { this.position[0]=[newpos,0];}
}

Barril.prototype.GetRect = function() {
	var rect = {};	
	rect.x1=this.x;rect.y1=this.y;rect.x2=this.x+40;rect.y2=this.y+65;
	if (!this.visible) {
		rect.x1=0;rect.y1=0;rect.x2=0;rect.y2=0;
	}
	return rect;
}

Barril.prototype.ready = function() {
	var result = false;
	var x,y;
	[x,y]=this.getPos();
	if ((x==this.x) && (y==this.y)) {
		if (this.position.length==1) {
			result=true;
		}
	}
	return result;
}

Barril.prototype.setPos = function(x,y) {
	this.x = x;
	this.y = y;
	this.destx = x;
	this.desty = y;
}

function SortGame (cnv,n) {
	var self = this;
	this.canvas = document.getElementById(cnv);
	document.getElementById(cnv).addEventListener("mousemove", (e) => { this.mousemove(e,this);});
	document.getElementById(cnv).addEventListener("mousedown", (e) => { this.mousedown(e,this);});
	document.getElementById(cnv).addEventListener("mouseup", (e) => { this.mouseup(e,this);});
	document.getElementById(cnv).addEventListener("mouseleave",(e) => { this.mouseleave(e,this);});		
	this.data=[];
	this.phase=0;
	if ((n<1) || (n>10)) { n=10;}
	this.nb=n;
	this.shuffle(self);
	this.currentphase = 0;
	this.draw();
	this.timer= window.requestAnimationFrame(function(){ self.draw(); }, 25);
}

SortGame.prototype.compare = function(a,b) {
	var res = 0;
	if (this.data[a].valeur>this.data[b].valeur) {
		res = -1;
	} else if (this.data[a].valeur<this.data[b].valeur) {
		res=1;
	}
	this.phase++;
	this.data[a].position.push([11,this.phase]);
	this.data[b].position.push([13,this.phase]);
	return res;
}

SortGame.prototype.pose = function(a,b) {
	this.phase++;
	this.data[a].position.push([a + 1,this.phase]);
	this.data[b].position.push([b + 1,this.phase]);
}

SortGame.prototype.echange = function(a,b) {
	this.phase++;
	this.data[a].position.push([b + 1,this.phase]);
	this.data[b].position.push([a + 1,this.phase]);
}

SortGame.prototype.init = function(al) {
	this.algo = al;
	this.algo.init(this.nb);
}

SortGame.prototype.shuffle = function(self) {
	var colors = ['#60A917','#00ABA9','#A20025','#76608A','#87794E','#63362F','#F472D0','#003E00','#16499A','#FFC194','#7AD61D','#45FFFD','#78AA1C','#AA00FF','#A4C400'];
	var l = colors.length;
	for (let i=0;i<20;i++) {
		let a=Math.floor((Math.random() * l));
		let b=Math.floor((Math.random() * l));
		if (a != b) {
			let t=colors[a];
			colors[a]=colors[b];
			colors[b]=t;
		}
	}
	this.auto=false;
	this.busy=false;
	this.balsens='=';
	this.phase=1;
	for (let i=0; i<10; i++) {
		if (! this.data[i]) {
			this.data[i]=new Barril(i+1,self);
		} else {
			let a=Math.floor((Math.random() * this.nb));
			this.data[i].x=this.data[a].x;
			this.data[i].y=this.data[i].y-50-Math.floor((Math.random() * 100));
		}		
		this.data[i].valeur = Math.floor((Math.random() * 90) + 1);
		this.data[i].color = colors[i];
		this.data[i].position.push([i+1,this.phase]);
		if (i>=this.nb) {this.data[i].visible = false;}
	}
	if (this.algo) { this.algo.init(this.nb); }
}

SortGame.prototype.solve = function(a) {
	this.auto = true;
}	

SortGame.prototype.getBalsens = function() {
	var res='=';
	var left,right;
	var p,w;
	for (let i=0;i<10;i++) {
		[p,w] = this.data[i].position[0];
		if (p==11) {
			left=this.data[i];
		} else
		if (p==13) {
			right=this.data[i];
		} 				
	}	
	if (left) {			
		res='<';
		if (right) {
			if (left.valeur==right.valeur) {
				res='=';
			} else
			if (left.valeur<right.valeur) {
				res='>';
			}
		}
	}
	if (right) {
		res='>';
		if (left) {
			if (left.valeur==right.valeur) {
				res='=';
			} else
			if (left.valeur>right.valeur) {
				res='<';
			}
		}
	}	
	return res;
}

SortGame.prototype.draw_plateau = function(x,y,ctx) {
		ctx.save();
		ctx.fillStyle="#E3C800";
		ctx.strokeStyle="#000000";
		ctx.lineJoin="round";
		ctx.lineCap="round";
		ctx.lineWidth=1;
		ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+70,y);ctx.lineTo(x+70,y+4);ctx.lineTo(x,y+4);ctx.closePath();ctx.fill();ctx.stroke();
		ctx.beginPath();ctx.moveTo(x,y+4);ctx.lineTo(x+7,y+10);ctx.lineTo(x+63,y+10);ctx.lineTo(x+70,y+4);ctx.closePath();ctx.fill();ctx.stroke();
		ctx.beginPath();ctx.moveTo(x+25,y+10);ctx.lineTo(x+25,y+20);ctx.lineTo(x+45,y+20);ctx.lineTo(x+45,y+10);ctx.closePath();ctx.fill();ctx.stroke();
		ctx.fillStyle="#737373";
		ctx.fillRect(x+30,y+20,10,120-y);
		ctx.restore();
	}

SortGame.prototype.draw_balance = function(ctx) {
		var i,j;
		var rot;
		ctx.fillStyle="#825A2C";
		ctx.fillRect(305,140,170,5);
		ctx.fillRect(300,145,180,15);
		ctx.beginPath();ctx.moveTo(300,160);ctx.lineTo(480,160);ctx.lineTo(480,180);ctx.lineTo(470,180);ctx.bezierCurveTo(470,160,310,160,310,180);ctx.lineTo(300,180);ctx.closePath();ctx.fill();
		ctx.beginPath();ctx.moveTo(380,140);ctx.lineTo(380,120);ctx.arc(390,120,10,1*Math.PI,0*Math.PI) ;ctx.lineTo(400,140);ctx.closePath();ctx.fill();
		ctx.save();
		ctx.translate(390, 140);
		this.balsens = this.getBalsens();
		switch(this.balsens) {
			case '<' : rot=-0.1;break;
			case '>' : rot=0.1;break;
			default	 :
		}
		//if (rot!=0) ctx.rotate(rot);
		ctx.beginPath();ctx.moveTo(-50,-10);ctx.lineTo(50,-10);ctx.lineTo(50,-2);ctx.lineTo(40,-2);
		ctx.bezierCurveTo(40,-10,-40,-10,-40,-2);ctx.lineTo(-50,-2);ctx.closePath();ctx.fill();
		ctx.translate(-390, -140);
		//if (rot!=0) ctx.rotate(-rot);
		ctx.restore;
		switch(this.balsens) {
			case '<' : i=110;j=90;break;
			case '>' : i=90;j=110;break;
			default	 : i=100;j=100;
		}
		this.draw_plateau(310,i,ctx);
		this.draw_plateau(400,j,ctx);
		ctx.fillStyle="#825A2C";
		
}


SortGame.prototype.draw = function() {
	if (this.wait > 0) {
		this.wait --;
		return;
	}
	if (this.busy) return;
	this.busy=true;
	var ready=true;	
	var i = 0, j=0, ctx=this.canvas.getContext("2d");
	
	var p, phase;
	//[p,mini] = this.data[0].position[0];
	for (i=1;i<this.nb;i++) {
		[p,phase]=this.data[0].position[0];
	}
	
	
	var w = this.canvas.width, h = this.canvas.height,x=0,y=0;
	ctx.clearRect ( 0 , 0 , w,h );
	ctx.font="bold 16px Courier";
	ctx.textAlign="center";
	var my_gradient=ctx.createLinearGradient(0,0,0,300);
	my_gradient.addColorStop(1,"#00356A");
	my_gradient.addColorStop(0.3,"#eff4ff");
	my_gradient.addColorStop(0,"#eff4ff");
	ctx.fillStyle=my_gradient;
	ctx.fillRect(0,0,w,h);	
	/* Balance */	
	this.draw_balance(ctx);
	/* Etagere */;
	ctx.lineWidth=5;
	ctx.lineCap="round";
	ctx.strokeStyle="#825A2C";
	ctx.beginPath();
	ctx.moveTo(15,80);ctx.lineTo(210,80);
	ctx.moveTo(15,170);ctx.lineTo(210,170);
	ctx.stroke();
	ctx.stroke();
	// Barrils
	for (i=0;i<this.nb;i++) {
		this.data[i].move();
		this.data[i].draw(ctx); 
		if (ready) { 
			ready = this.data[i].ready();
		}
	}
	if ((this.auto) && (this.algo) && (ready)) this.algo.next();
	this.busy=false;
}

SortGame.prototype.getNearest = function(x,y) {
	var posi=[];
	var res = -1;	
	for (let i=0;i<30;i++) {
		//  1 -> 10 : base
		// 11  balance G
		// 13  balance D
		// 14 -> 17 etagere H
		// 18 -> 21 etagere B
		posi.push('');
	}
	for (let i=0;i<10;i++) {
		if ((! this.data[i].drag) && (this.data[i].visible)) {
			let [j,w] = this.data[i].position[0];
			posi[j]=this.data[i];
		}		
	}
	if ((x<230) && (y<145)){ // Etagere
		if (y<55) {  // Etagère Haut
			n = Math.floor((x - 5) / 43)+18; 
			if ((n<18) || (n>21)) {n = 19}
			if (posi[n]==='') return n;
			if ((n>18) && (posi[n - 1]==='')) return n -1;
			if ((n<21) && (posi[n + 1]==='')) return n + 1;
			if ((n>19) && (posi[n - 2]==='')) return n - 2;
			if ((n<20) && (posi[n + 2]==='')) return n + 2;
			for (let i=18;i<21;i++) { if (posi[i]==='') return i;}
		}
		// Etagère bas
		n = Math.floor((x - 5) / 43)+14; 
		if ((n<14) || (n>17)) {n = 16}
		if (posi[n]==='') return n;
		if ((n>14) && (posi[n - 1]==='')) return n -1;
		if ((n<17) && (posi[n + 1]==='')) return n + 1;
		if ((n>15) && (posi[n - 2]==='')) return n - 2;
		if ((n<16) && (posi[n + 2]==='')) return n + 2;
		for (let i=14;i<17;i++) { if (posi[i]==='') return i;}
		n = Math.round((x -20) / 45)+1;	
		if (n<1) { n=1;}
		if (n>10) {n=10;} 
		if (posi[n]==='') return n;
		for (let i=1;i<11;i++) { if (posi[i]==='') return i;}		
	}	
	if ((x>=290) && (x<=350) && (y<60)) {
			if (posi[11]==='') return 11;
	}
	if ((x>=385) && (y<60)) {
			if (posi[13]==='') return 13;
	}
	
	n = Math.round((x -20) / 45)+1;	
	if (n<1) { n=1;}
	if (n>10) {n=10;} 
	if (posi[n]==='') return n;
	for (let i=1;i<11;i++) { if (posi[i]==='') return i;}		
	return -1;
}

SortGame.prototype.mousemove = function(e,o) {
	if (o.auto) return;
	var pos = o.getmousepos(this.canvas,e);
	e = e || window.event;
	var button = e.which || e.button;
	if (1==button) {
		for (let i=0;i<10;i++) {
			if (o.data[i].drag) {
				o.data[i].setPos(pos.x - (10),pos.y - (32));
			}
		}
	}
	o.draw();
};
SortGame.prototype.mousedown =function(e,o) {
	if (o.auto) return;
	var pos = o.getmousepos(this.canvas,e);
	var i = 0;
	var rect={};
	for (i=0;i<10;i++) {
		o.data[i].sel=false;
		o.data[i].drag=false;
		rect = o.data[i].GetRect();
		if (o.pointinrectangle(pos,rect)) {
			o.data[i].sel=true;
			o.data[i].drag=true;
		}
	}
	o.draw();
};
SortGame.prototype.mouseup = function(e,o) {
	if (o.auto) return;
	var i = 0;
	for (i=0;i<10;i++) {
		o.data[i].sel=false;
		if (o.data[i].drag) {
			let pos = o.getmousepos(this.canvas,e);
			o.data[i].endDrag(pos);
		}
	}
	o.draw();
};
SortGame.prototype.mouseleave = function(e,o) {
	if (o.auto) return;
	var pos = o.getmousepos(this.canvas,e);
	pos.x = -1;pos.y = -1;
	if (this.drag>=0) {this.enddrag(pos);}
};
SortGame.prototype.getmousepos = function(c,e) {
	var rect = c.getBoundingClientRect();
	return {
		x: Math.round(e.clientX - rect.left),
		y: Math.round(e.clientY - rect.top)
	};
};
SortGame.prototype.pointinrectangle = function(p, r) {
	return p.x > r.x1 && p.x < r.x2 && p.y > r.y1 && p.y < r.y2;
};


/* ***************************************************** */
/* SORTCOMPLEX ***************************************** */
/* ***************************************************** */

function SortCplx(cnv,tab) {
	this.data=[];
	this.canvas = document.getElementById(cnv);
	this.draw();
	this.table = document.getElementById(tab);
	this.maxi = 200;
}

SortCplx.prototype.init = function(al) {
	this.algo = al;
	this.data=[];
	this.draw();
	this.style='A';
}


SortCplx.prototype.next = function(w) {
	
	var l = w.data.length + 1;
	var nb_comp,nb_ex;
	nb_comp=0;
	nb_ex=0;
	var m = 1;
	if (this.style=='A') { m = 10;}
	for (let j=0;j<m;j++){
		w.algo.setup(l*10,w.style);
		let [a,b] = w.algo.sort();
		nb_comp = nb_comp+a;
		nb_ex = nb_ex+b;
	}	
	nb_comp = Math.floor(nb_comp / m);
	nb_ex = Math.floor(nb_ex / m);
	w.data.push([nb_comp,nb_ex]);
	
	var row = w.table.insertRow(l);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	
	cell1.innerHTML =new Intl.NumberFormat().format(l * 10);
	cell2.innerHTML = new Intl.NumberFormat().format(nb_comp);
	cell3.innerHTML = new Intl.NumberFormat().format(nb_ex);
	cell4.innerHTML = new Intl.NumberFormat().format(nb_comp+nb_ex);
	if (l>=w.maxi) {
		clearInterval(w.timer); 
	} 
	w.draw();
}

SortCplx.prototype.calc = function(style) {
	var ex, cp;
	var nb_comp,nb_ex;	
	this.data=[];
	var self = this;
	this.style = style;
       
	var rowCount = this.table.rows.length;
	for (let j = 1; j < rowCount; j++) {
		this.table.deleteRow(1);
	}
	//setTimeout(this.next(self),100);
	this.timer=setInterval(function () { self.next(self);},25);
	this.draw();
		
}

SortCplx.prototype.draw = function() {
	var ctx=this.canvas.getContext("2d");
	var w = this.canvas.width, h = this.canvas.height;
	var lg = this.data.length;
	if (lg>this.maxi) { lg = this.maxi;}
	ctx.clearRect ( 0 , 0 , w,h );
	ctx.font="bold 16px Courier";
	ctx.textAlign="center";
	var my_gradient=ctx.createLinearGradient(0,0,0,300);
	my_gradient.addColorStop(1,"#EEEEEE");
	//my_gradient.addColorStop(0.7,"#ffffff");
	my_gradient.addColorStop(0,"#eff4ff");
	ctx.fillStyle=my_gradient;
	ctx.fillRect(0,0,w,h);
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth = 2;
	ctx.moveTo(5,5);
	ctx.lineTo(5,h-5);
	ctx.lineTo(w-5,h-5);
	ctx.stroke();
	
	
	var p = (w-5) / this.maxi;	
	
	for (let i=20;i<this.maxi;i+=20) {
		let pos = 10+(i * p);
		ctx.beginPath();
		ctx.moveTo(pos,h-1);
		ctx.lineTo(pos,h-6);
		ctx.stroke();
	}
	
	var nb_comp, nb_ex;
	var maxi = 100;
	
	for (let i=0;i<lg;i++) {
		[nb_comp,nb_ex]=this.data[i];
		nb_comp = nb_comp+nb_ex;
		if (nb_comp>maxi)  { maxi = nb_comp;};
	}
	var ech = (h-10) / maxi;
	var pas = Math.floor(maxi / 20);
	
	for (let i=pas;i<maxi;i+=pas) {
		let pos = h - 6 -(i*ech)
		ctx.beginPath();
		ctx.moveTo(1,pos);
		ctx.lineTo(5,pos);
		ctx.stroke();
	}
	
	ctx.lineWidth = 1;
	for (let i=0;i<lg;i++) {
		ctx.beginPath();
		ctx.strokeStyle = "green";
		[nb_comp,nb_ex]=this.data[i];
		ctx.moveTo(10+(i*p),h-6);
		ctx.lineTo(10+(i*p),h - 6 -(nb_comp*ech));
		ctx.stroke()
		ctx.beginPath();
		ctx.strokeStyle = "red";
		ctx.moveTo(10+(i*p),h - 6 -(nb_comp*ech));
		ctx.lineTo(10+(i*p),h - 6 -((nb_comp+nb_ex)*ech));
		ctx.stroke()
	}

}
