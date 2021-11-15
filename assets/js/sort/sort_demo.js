"use strict";

var data = new Array();
var asort = null;
var asort = {encours : false, phase : 0, i : 0, t : 0, nb_comp : 0, nb_echanges : 0, courant : null, oldpos : 0, tri_en_cours : false, num_etape : 0, etapes : []};
var vitesse = 100;

function init_tempo() {
    if (asort.encours) setTimeout("init_tempo()",5);
    if (asort.timer) {
        window.clearInterval(asort.timer);
        asort.encours = true;
    }       
    switch (document.getElementsByName("o2")[0].value.substr(0,1)) {
        case "0" : vitesse = 0;break;
        case "1" : vitesse = 500;break;
        case "2" : vitesse = 250;break;
        case "3" : vitesse = 100;break;
        case "4" : vitesse = 10;break;
        default : vitesse = 100;
    }
    var options;
    if (vitesse==0) {
        switch (asort.lang){
            case 'fr' : options = { label: "Suivant", icons: { primary: "ui-icon-play" } };break;
            case 'es' : options = { label: "Siguiente", icons: { primary: "ui-icon-play" } };break;
            default   : options = { label: "Next", icons: { primary: "ui-icon-play" } };break;
        }        
    } else {
        switch (asort.lang){
            case 'fr' : options = { label: "Stop", icons: { primary: "ui-icon-play" } };break;
            case 'es' : options = { label: "Stop", icons: { primary: "ui-icon-play" } };break;
            default   : options = { label: "Stop", icons: { primary: "ui-icon-play" } };break;
        }     
    }
    $("#play").button( "option", options );
    if ((asort.encours) || (asort.tri_en_cours)) {  
            if (vitesse>0) asort.timer = window.setInterval('f_sd_sort(asort,data)',vitesse);
            asort.encours = false;        
    }
}

function add_etape(action,o,d) {
    asort.etapes[asort.num_etape]= { action: action, el1 : o, el2 : d } ;
}

function init_sort(){
    var i,t,j,trouve;
    var ref =   [{v:1, color:"#000000"},{v: 2, color:"#1a0e00"},{v: 3, color:"#261b00"},{v: 4, color:"#022433"},{v: 5, color:"#081040"},
                {v: 6, color:"#4c2800"},{v: 7, color:"#594000"},{v: 8, color:"#044866"},{v: 9, color:"#0f1d73"},{v:10, color:"#804400"},
                {v:11, color:"#8c6500"},{v:12, color:"#076c99"},{v:13, color:"#162aa6"},{v:14, color:"#b25f00"},{v:15, color:"#bf8900"},
                {v:16, color:"#0990cc"},{v:17, color:"#1c36d9"},{v:18, color:"#e67a00"},{v:19, color:"#f2ae00"},{v:20, color:"#0bb5ff"}];    
    switch (document.getElementsByName("o1")[0].value.substr(0,1)) {

        case "1" : /*Ordre inverse"*/
            asort.datastyle=1;
            data=[];
            for (i = 0; i < 20; i++) {
                data[i] =  ref[19 - i];
            }
            break;
        case "2" : /*Déjà trié*/
            data=[];
            asort.datastyle=2;
                for (i = 0; i < 20; i++) {
                data[i] = ref[i];
            }
            break;
        case "4" : /*Le pire des cas*/
            data=[];
            asort.datastyle=4;
            pire_des_cas(data);
            break;   
        case "5" : /*Le meilleur des cas*/
            data=[];
            asort.datastyle=5;
            meilleur_des_cas(data);
            break; 
        case "6" : // défini par l'utilisateur
            asort.datastyle=6;  
            $("#ins_cnv" ).mousemove(mousemove);              
            $("#ins_cnv" ).mousedown(mousedown);
            $("#ins_cnv" ).mouseup(mouseup);
            $("#ins_cnv" ).mouseleave(mouseleave);             
            if (! data) data=[];                 
            if (data.length<20) {
                for (i = 0; i < 20; i++) {
                    data[i] = ref[i];
                } 
            } else {
                for (i=0;i<20;i++) {
                    if (! data[i]) {
                        t=0;trouve=false;
                        while ((! trouve) && (t<20)) {
                            trouve=true;
                            for (j=0;j<20;j++) {
                                if (data[j]==ref[t]) {
                                    trouve=false;
                                    break;
                                }
                            }
                            if (trouve) data[i]=ref[t];
                            t++;
                        }
                    }
                }
            }
            break;
        default : /* aleatoire */
            data=[];
            asort.datastyle=3;
            for (i = 0; i < 20; i++) {
                t = Math.floor((Math.random() * 20));
                while (! ref[t]) {
                    t = Math.floor((Math.random() * 20));
                }
                data[i] =ref[t];
                ref[t] = null;
            }
            break;
    }
    for (i = 0; i < 20; i++) {
        data[i].etapes = [i];
        data[i].x=20+(i*43);
        data[i].y=100;
        data[i].drag=false;
    }
    
    asort.lang = $('html')[0].lang;
    var options
    switch (asort.lang){
        case 'fr' : options = { label: "Trier", icons: { primary: "ui-icon-play" } };break;
        case 'es' : options = { label: "Ordenar", icons: { primary: "ui-icon-play" } };break;
        default   : options = { label: "Sort", icons: { primary: "ui-icon-play" } };break;
    }    
    
    $("#play").button( "option", options );
    $( "#o2" ).selectmenu( "option", "disabled", false );
    $( "#o1" ).selectmenu( "option", "disabled", false );     
    draw_sd();
}

function get_pos() {
    var i=0;
    for (i=0;i<20;i++) {
        data[i].etapes.push(i);
    }
    draw_graph();
}

function start_sort() {
        var options;

        switch (asort.lang){
            case 'fr' : options = { label: "Suivant", icons: { primary: "ui-icon-play" } };break;
            case 'es' : options = { label: "Siguiente", icons: { primary: "ui-icon-play" } };break;
            default   : options = { label: "Next", icons: { primary: "ui-icon-play" } };break;
        } 
        
        asort.num_etape = 0;
        asort.etapes = [] ;
        if (! asort.tri_en_cours) {
            init_sort();
            init_tempo();
            asort.encours=false;
            asort.phase=0;
            asort.i = 0;
            asort.t=0;
            asort.nb_comp=0;
            asort.nb_echanges=0;
            asort.courant = null;
            asort.oldpos=0;
            asort.tri_en_cours=true;
        }
        if (vitesse > 0) {
            options = { label: "Stop", icons: { primary: "ui-icon-stop" } };
            $("#play").button( "option", options );
            asort.timer = window.setInterval('f_sd_sort(asort,data)',vitesse);
        } else {
                    $("#play").button( "option", options );
                    f_sd_sort(asort);                    
        }
        $( "#o1" ).selectmenu( "option", "disabled", true );            
        draw_sd();
}
function stop_sort() {
        if (asort.timer) {
            window.clearInterval(asort.timer);
            asort.timer = null;
        }
        asort.en_cours = false;        
        asort.tri_en_cours=false;   
        asort.phase=0;   
        for (i=0;i<data.length;i++) {
            if ( ! data[i]) {                
                init_sort();
                break;
            } else {
                data[i].drag=false;
                data[i].x=20+(i*43);
            }
        }
        draw_sd();        
        
        var options
        switch (asort.lang){
            case 'fr' : options = { label: "Trier", icons: { primary: "ui-icon-play" } };break;
            case 'es' : options = { label: "Ordenar", icons: { primary: "ui-icon-play" } };break;
            default   : options = { label: "Sort", icons: { primary: "ui-icon-play" } };break;
        }          

        $("#play").button( "option", options );
        $( "#o2" ).selectmenu( "option", "disabled", false );
        $( "#o1" ).selectmenu( "option", "disabled", false );        
}

function surligne(id,lg) {

    if ((! id) || (id<' ')) return;
    var i = 0, lst, ol, rows, hidden;

    lst = document.getElementById(id);
    if (lst) {
        ol= lst.getElementsByTagName("ol")[0];
        if (ol) {
            rows  = ol.getElementsByTagName("li");
            for (i=0;i<rows.length;i++) {
                if (lg.indexOf((i+1)) > -1) {
                    rows[i].style.border = '1px solid red';
                } else {
                    rows[i].style.border = "none";
                }
            }
        }
    }

}

function draw_schema() {
    var canvas = document.getElementById('schema'), ech = 0;    
    if (canvas) {
        var w = canvas.width, h = canvas.height, ctx=canvas.getContext("2d"),i=0, j=0,x=0,y=0,y1=0,echy=0,echx=20;
        ctx.clearRect ( 0 , 0 , w,h );
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.strokeStyle="#0000FF";
        echy = h / 21;

        echx=9;
        

    i = 10+(9 * (asort.etapes.length));
    w = $( "#schema" )[0].width;
    
        if (i>w) {
        i=i+100;
        canvas.width = i;
            $( "#ins_graph" )[0].width = i;         
        };    

        for (i=0;i<20;i++) {
            ctx.moveTo(5,10+(i*echy));
            ctx.lineTo(w - 5,10+(i*echy));
        }
        ctx.stroke();
        ctx.beginPath();  
        
// action: action, el1 : o, el2 : d    
        ctx.fillStyle="#000000";
        for (i=0;i<asort.etapes.length;i++) {
            if ((asort.etapes[i]) && ((5+i*echx)<w)) {                
                if (asort.etapes[i].action=='S') {
                    ctx.lineWidth=2;
                    ctx.strokeStyle="#FF0000";
                } else {
                    ctx.lineWidth=1;
                    ctx.strokeStyle="#000000";
                }                
                ctx.beginPath();
                y = asort.etapes[i].el1; 
                ctx.moveTo(5+(i*echx),10+(y*echy));
                y1 = asort.etapes[i].el2;
                ctx.lineTo(5+(i*echx),10+(y1*echy));
                ctx.stroke();
                ctx.fillRect(3+(i*echx),8+(y*echy),4,4);
                ctx.fillRect(3+(i*echx),8+(y1*echy),4,4);
            }
        }
        ctx.stroke();
        ctx.beginPath();
    }
}

function draw_graph() {
    var canvas = document.getElementById('ins_graph'), ech = 0;
    if (canvas) {

        var w = canvas.width, h = canvas.height, ctx=canvas.getContext("2d"),i=0, j=0,x=0,y=0,t=0,echy=0,echx=20;
        ctx.clearRect ( 0 , 0 , w,h );
        
        echy = Math.floor(h / 21);       
        
        for (i=0;i<20;i++) {
            if (data[i]) {
            
                if (data[i].etapes.length>0) {
                    echx = Math.floor(w / data[i].etapes.length);
                    if (echx>20) echx=20; else if (echx<5) echx=5;
                } else echx=20;  
            
            
                ctx.strokeStyle = data[i].color;
                ctx.lineWidth=10;
                ctx.beginPath();
                ctx.lineCap="round";

                for (j=0;j<data[i].etapes.length;j++) {
                    y = 5+data[i].etapes[j]*echy;  
                    x = 5+(j*echx);
                    if (j==0) {
                        x=5;
                        ctx.moveTo(5,y);
                        ctx.lineTo(x,y);
                        ctx.globalAlpha=1;
                    } else  ctx.globalAlpha=0.5;
                    //x=t+((j+1) * t);
                    ctx.lineTo(x,y);
                }
                ctx.lineTo(w-5,y);
                ctx.stroke();
            }
        }
    }
}

function end_drag(p) {
    var i=0,dest=0,temp,j;
    if (p) {
        while ((i<data.length) && (data[i]) && (! data[i].drag)) i++;
        if ((i>0) && (data[i]) && (p.x>=20) && (p.x<880)) {
            dest = Math.floor((p.x-20) / 43);
            if ((dest>=0) && (dest<20)) {
                temp = data[i];
                if (dest  < i) {
                    for (j=i;j>dest;j--) {
                        data[j] = data[j-1];
                    }
                    data[dest]=temp;
                } else
                if (dest > i) {
                    for (j=i;j<dest;j++) {
                        data[j] = data[j+1];
                    }
                    data[dest]=temp;            
                }
            }
        }
    }
    for (i=0;i<data.length;i++) if (data[i]) data[i].drag=false; 
    draw_sd(); 
}

function mousemove(e) { 
          if ((asort.datastyle===6) && (! asort.en_cours) && (! asort.tri_en_cours)) {
            var pos = getmousepos(this,e),i=0;
            while ((i<data.length) &&  (data[i]) && (! data[i].drag)) i++;
            if ((i<20) && (data[i]) && (data[i].drag)) {
                data[i].x = pos.x-21;
                data[i].y = pos.y;
                draw_sd();                
            }            
          }
};

function mousedown(e) {
          if ((asort.datastyle===6) && (! asort.en_cours) && (! asort.tri_en_cours)) {
            var pos = getmousepos(this,e), i=0,trouve=false;              
            for (i=0;i<20;i++) data[i].drag=false; 
            i=0;trouve=false;           
            while ((i<20) && (! trouve)) {
                if (true) {
                    if ((pos.x>=data[i].x) && (pos.x<=data[i].x+43)) {
                        trouve=true;
                        data[i].drag=true;
                        draw_sd();                        
                    }
                }
                i++;
            }            
          }        
};
function mouseup(e) {
          if ((asort.datastyle===6) && (! asort.en_cours) && (! asort.tri_en_cours)) {
            var pos = getmousepos(this,e);  
            end_drag(pos);                        
            draw_sd();
          }
};
function mouseleave(e) {
          if ((asort.datastyle===6) && (! asort.en_cours) && (! asort.tri_en_cours)) {
            var pos = getmousepos(this.canvas,e);
            end_drag(pos);
          }    
};

function getmousepos(c,e) {
    if (!c) return;
    var rect = c.getBoundingClientRect();
    return {
        x: (e.clientX-rect.left)/(rect.right-rect.left)*c.width,
        y: (e.clientY-rect.top)/(rect.bottom-rect.top)*c.height
    };
}  
