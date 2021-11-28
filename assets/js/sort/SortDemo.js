"use strict";


function SortAlgo(r) {
	this.count = 0;
	this.step = 0;
	this.renderer = r;
	this.swap=false;
}

SortAlgo.prototype.init = function() {
	this.count=0;
	this.step=0;
	this.swap=false;
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
        if (this.count<19-this.step) {
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

SortDemo.prototype.start = function(a) {
	this.algo=a;
	this.running=true;
	this.algo.init();
	this.swap = [];
	this.comp = [];
	this.algo.next();	
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
			var swap=true;
			j = 19;
			do {
				swap=false;
				for (let i=0;i<j;i++){
					if (this.elts[i].value>this.elts[i+1].value) {
						temp = this.elts[i];
						this.elts[i] = this.elts[i+1];
						this.elts[i+1] = temp;
						swap=true;
					}
				}
				j--;
			} while (swap);
			break;
		case 'W':
			var swap=true;
			j = 19;
			do {
				swap=false;
				for (let i=0;i<j;i++){
					if (this.elts[i].value<this.elts[i+1].value) {
						temp = this.elts[i];
						this.elts[i] = this.elts[i+1];
						this.elts[i+1] = temp;
						swap=true;
					}
				}
				j--;
			} while (swap);
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