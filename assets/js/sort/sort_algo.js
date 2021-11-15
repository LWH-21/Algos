"use strict";


function comparaison(a, b) {
    if (a > b) return true; else return false;
}

function selection_sort(tab, t, compar) {
    var comp = [0,0], i = 0, j=0, nb_comp=0,nb_ech = 0, mi=0, temp=0;
    if (!compar) {
        compar = function(a,b) {nb_comp++;if (a>b) return true;else return false;};
    }
    for (i=0;i< (t - 1);i++) {
        mi = i;
        for (j=i+1;j<t;j++) {
            if (compar(tab[mi],tab[j])) mi=j;
        }
        if (mi != i) {
            nb_ech ++;
            temp = tab[mi];tab[mi]=tab[i];tab[i]=temp;
        }
    }
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp;

    return comp;
}

function insertion_sort (tab,t,compar) {
    var comp = [0,0], i = 0, j=0, nb_comp=0,nb_ech = 0, k=0;
    if (!compar) {
        compar = function(a,b) {nb_comp ++;if (a>b) return true;else return false;};
    }
    for (i = 0; i < t; i++) {
        k = tab[i];
        for (j = i; j > 0; j--) {
            if (compar(tab[j-1],k)) {
                tab[j] = tab[j - 1];
                nb_ech ++;
            } else break;
        }
        tab[j] = k;
    }
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp;

    return comp;
}

function bubble_sort (tab,t,compar) {
    var comp = [0,0], i = 0, j=0, temp, nb_comp=0,nb_ech = 0, p=0, done=false;
    if (!compar) {
        compar = function(a,b) {nb_comp ++;if (a>b) return true;else return false;};
    }
    while (!done) {
        done = true;
        for (i = 1; i<t-p; i++) {
            if (compar(tab[i-1],tab[i])) {
                done = false;
                nb_ech ++;
                temp = tab[i-1];tab[i-1]=tab[i];tab[i]=temp;
            }
        }
        p++;
    }
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp;

    return comp;
}

function cocktail_sort(tab,t,compar) {
    var comp = [0,0], i = 0, j=0, nb_comp=0,nb_ech = 0, debut=0, fin = t, done=false,sens=1,chg=true,temp=0;
    if (!compar) {
        compar = function(a,b) {nb_comp ++;if (a>b) return true;else return false;};
    }
    while (!done) {
        done = true;chg=false;
        while ((!chg) && (debut<fin)) {
            if (sens==1) {
                if (compar(tab[i],tab[i+1])) {
                    temp = tab[i+1];tab[i+1]=tab[i];tab[i]=temp;
                    //tab[i+1], tab[i] = tab[i], tab[i+1]
                    done=false;
                    nb_ech ++;
                }
            } else {
               if (compar(tab[i-1],tab[i])) {
                    temp = tab[i-1];tab[i-1]=tab[i];tab[i]=temp;
                    //tab[i-1], tab[i] = tab[i], tab[i-1]
                    done=false;
                    nb_ech ++;
                }
            }
            i += sens;
            if ((sens==1) && (i>fin-2)) {
                sens = -1;
                fin --;
                i = fin;
                chg=true;
            } else if (i<debut+1) {
                sens = 1;
                debut++;
                i = debut;
                chg=true;
            }
        }
    }
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp;

    return comp;
}

function oyelami_sort(tab,t,compar) {
    var comp = [0,0], i = 0, j=0, nb_comp=0,nb_ech = 0, debut=0, fin = t, done=false,sens=1,chg=true,temp=0;
    if (!compar) {
        compar = function(a,b) {nb_comp ++;if (a>b) return true;else return false;};
    }
    i=0;j= t - 1;
    while (i < j) {
        if (compar(tab[i],tab[j])) {
            temp = tab[i];tab[i]=tab[j];tab[j]=temp;
            done=false;
            nb_ech ++;        
        }
        i++;
        j--;
    }        
    while (!done) {
        done = true;chg=false;
        while ((!chg) && (debut<fin)) {
            if (sens==1) {
                if (compar(tab[i],tab[i+1])) {
                    temp = tab[i+1];tab[i+1]=tab[i];tab[i]=temp;
                    //tab[i+1], tab[i] = tab[i], tab[i+1]
                    done=false;
                    nb_ech ++;
                }
            } else {
               if (compar(tab[i-1],tab[i])) {
                    temp = tab[i-1];tab[i-1]=tab[i];tab[i]=temp;
                    //tab[i-1], tab[i] = tab[i], tab[i-1]
                    done=false;
                    nb_ech ++;
                }
            }
            i += sens;
            if ((sens==1) && (i>fin-2)) {
                sens = -1;
                fin --;
                i = fin;
                chg=true;
            } else if (i<debut+1) {
                sens = 1;
                debut++;
                i = debut;
                chg=true;
            }
        }
    }
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp;
    return comp;
}


function comb_sort(tab,t,compar) {
    var comp = [0,0], i = 0, j=0, nb_comp=0,nb_ech = 0, gap=1, done=false,temp=0;
    if (!compar) {
        compar = function(a,b) {nb_comp ++;if (a>b) return true;else return false;};
    }
    gap = t-1;
    while ((gap>1) || (! done)) {
        gap = Math.floor(gap / 1.3);
        if (gap<1) gap=1;
        done = true;
        for (i=0; i<t-gap;i++) {
            if (compar(tab[i],tab[i+gap])) {
                nb_ech ++;
                temp=tab[i];tab[i]=tab[i+gap];
                tab[i+gap]=temp;
                done=false;
            }
        }
    }
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp;

    return comp;
}


function gnome_sort(tab,t,compar) {
    var comp = [0,0], i = 0, j=0, nb_comp=0,nb_ech = 0, p=0, done=false;
    if (!compar) {
        compar = function(a,b) { nb_comp ++;if (a>b) return true;else return false;};
    }
    function moveBack(i) {
        for( ; i > 0 && compar(tab[i-1],tab[i]); i--) {
            var t = tab[i];
            tab[i] = tab[i-1];
            tab[i-1] = t;
            nb_ech ++;
        }
    }
    for (i = 1; i < t; i++) {
        if (compar(tab[i-1] ,tab[i])) moveBack(i);
    }
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp;

    return comp;
}

function shell_sort(tab,t,compar) {
    var comp = [0,0], nb_comp=0,nb_ech = 0, p=0, done=false;
    if (!compar) {
        compar = function(a,b) { nb_comp ++;if (a>b) return true;else return false;};
    }
    for (var h = t; h = parseInt(h / 2);) {
        for (var i = h; i < t; i++) {
            var k = tab[i];
            for (var j = i; j >= h ; j -= h) {
                if (compar(tab[j - h],k)) {
                    tab[j] = tab[j - h];
                    nb_ech ++;
                } else break;
            }
            tab[j] = k;
        }
    }    
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp; 
    return comp;
}


function merge_sort(tab,t,compar) {
    var comp = [0,0], nb_comp=0,nb_ech = 0, p=0, done=false;
    if (!compar) {
        compar = function(a,b) {if (a>b) return true;else return false;};
    }
    
    function merge(left, right, arr) {
        var a = 0;
        while (left.length && right.length) {
                nb_comp++;
                if (compar(left[0],right[0])) {
                    arr[a]=right.shift();
                    nb_ech ++;
                } else {
                    arr[a] = left.shift();
                    nb_ech ++;
                }
                a++;
        }
        while (left.length)  { arr[a++] = left.shift(); nb_ech++;}
        while (right.length) { arr[a++] = right.shift();nb_ech++;}
    }
    function mSort(arr, tmp, len) {
        if (len == 1) return;
        var     m = Math.floor(len / 2),
            tmp_l = tmp.slice(0, m),
            tmp_r = tmp.slice(m);
        mSort(tmp_l, arr.slice(0, m), m);
        mSort(tmp_r, arr.slice(m), len - m);
        merge(tmp_l, tmp_r, arr);
    }    
        
    mSort(tab, tab.slice(0,t),t,comp,compar);
   
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp;    

    return comp;
}

function quick_sort(tab,t,compar) {

    var comp = [0,0], nb_comp=0,nb_ech = 0, p=0, done=false;
    if (!compar) {
        compar = function(a,b) {nb_comp++;if (a>b) return true;else return false;};
    }
 
    function swap(i, j) { var t=tab[i]; tab[i]=tab[j]; tab[j]=t;nb_ech++; }

    function quicksort(left, right) {

        if (left < right) {

            var pivot = tab[(left + right) >> 1];
            var left_new = left, right_new = right;

            do {
                while (compar( pivot,tab[left_new])) left_new++;
                while (compar(tab[right_new], pivot)) right_new--;
                if (left_new  <= right_new) swap(left_new++, right_new--);
            } while (left_new  <= right_new);

            quicksort(left, right_new);
            quicksort(left_new, right);

        }
    }

    quicksort(0, t-1);
 
    comp[0] = t; comp[1] = nb_ech;comp[2]=nb_comp;    
    return comp;
}



function tmp_sort(tab,t,compar){

    var comp = [0,0], nb_comp=0,nb_ech = 0, p=0, done=false, phase=0;
  
    var o = new Object(), data=[], tri_en_cours = false;
    o.en_cours = false;
    o.phase = 0;
        
    
    for (p=0;p<t;p++) {
        data[p] = new Object();
        data[p].v = tab[p];
        data[p].couleur='';
    }
  
    var s='Entree : ',i=0;
    for (i=0;i<t;i++) {
        s=s+data[i].v+', ';        
    }
    console.log(s);
  
    while (o.phase<90) {
        f_sd_sort(o,data);  
    }
       
    for (i=0;i<t;i++) {
        s=s+data[i].v+', ';        
    }
    console.log(s,' Echanges : ',o.nb_echanges,' Comparaisons : ',o.nb_comp);
    
    comp[0] = t; comp[1] = o.nb_echanges;comp[2]=o.nb_comp;      
    return comp;
    
}
