window.onload = function(){
  var  box =document.querySelector('.box');
  var cart = document.querySelector('.cart');
  var text = document.querySelector('.text');
  var mi  = document.querySelector('.mi-right');
  var mi8 = document.querySelector('.mi8');
  var button = document.querySelector('.mi span');
  //获取隐藏元素
  var miLift = document.querySelectorAll('.mi-left li');
  var Aa = document.querySelectorAll('.mi-left li a');
  var NavNone = document.querySelector('.nav-Background');
  var millet = document.querySelectorAll('.millet');
  var Null = document.querySelectorAll('.conceal');
  var length = miLift.length-2;
//   轮不图
  var Bei  = document.querySelector('main .main-right');
  var Beinum = document.querySelectorAll('main .main-right ul li');
  var Arrows = document.querySelector('.arrows-left');
  var ArrowsR = document.querySelector('.arrows-right');
  var Aa = document.querySelectorAll('.main-right ul li');
  var num = 0;
  var index = 0;
//  家电隐藏
var figure =document.querySelectorAll('.HomeappliancepostersRight figure');
var review =document.querySelectorAll('.review');
//Tab 切换
var homeapp =document.querySelectorAll('.homeapp ul:nth-of-type(2) li');

var Homeapp =document.querySelectorAll('.HomeappliancepostersRight');

var Countdown =this.document.querySelectorAll('.CountdownTime li:nth-child(2n-1)');
    //   console.log(Countdown);
//轮播图
var recommmendedLunBig =document.querySelector('.recommmendedLunBig');

var recommmended = document.querySelectorAll('.recommmended span');

//底部切换 
var Longul =document.querySelectorAll('.Details-neirong2 .Details-neirong3  ul');
var SpanArrow = document.querySelectorAll('.Details-neirong2:nth-of-type(1) span');
var Dot =document.querySelectorAll('.Details-neirong2:nth-of-type(1) .Round li');


var SpanArrow2 = document.querySelectorAll('.Details-neirong2:nth-of-type(2) span');
var Dot2 =document.querySelectorAll('.Details-neirong2:nth-of-type(2) .Round li');


var SpanArrow3 = document.querySelectorAll('.Details-neirong2:nth-of-type(3) span');
var Dot3 =document.querySelectorAll('.Details-neirong2:nth-of-type(3) .Round li');


var SpanArrow4= document.querySelectorAll('.Details-neirong2:nth-of-type(4) span');
var Dot4 =document.querySelectorAll('.Details-neirong2:nth-of-type(4) .Round li');

var maintop1 =this.document.querySelectorAll('.main-top1 li');


var concealedBox2 =this.document.querySelectorAll('.concealedBox2');

var video =document.querySelectorAll('.video1 ul span');
var video1 = document.querySelectorAll('.box0');
// var video2 =document.querySelectorAll('.box1 video')
var boxA =document.querySelectorAll(".box2 p");

//侧边框
var btn = document.querySelector('.side li:nth-of-type(4)');
var clientHeight=document.documentElement.clientHeight;

var timer=null;
var istop=true;

window.onscroll=function(){
    if(!istop){
        clearInterval(timer);
    }
    istop=false;

    var high=document.documentElement.scrollTop||document.body.scrollTop;
    if(high>=clientHeight){
        btn.style.display='block';
    }else{
        btn.style.display='none';
    }
}
btn.onclick=function(){

    timer=setInterval(function() {

    var high=document.documentElement.scrollTop||document.body.scrollTop;

    var speed=Math.floor(-high/6);
    document.documentElement.scrollTop=document.body.scrollTop=high+speed;
  
    istop=true;
    if(high==0){
        clearInterval(timer);
    }
    },30);

    
}


    











 for(var i=0;i<video.length;i++){
     video[i].index = i;
     video[i].onclick  =function(){
         video1[this.index].style.display = 'block';
         var a =this.index +1
        // video2[this.index].style.background= 'url(mi/s'+a+'.jpg)';
        // video2[this.index].style.backgroundSize= '100% 100%';  
 }
     }
     for(var i=0;i<boxA.length;i++){
         boxA[i].index = i;
        boxA[i].onclick  =function(){
           video1[this.index].style.display = 'none';
       }
     }
   








 for(var i=0;i<maintop1.length;i++){
     maintop1[i].index = i
     maintop1[i].onmouseover = function(){
         for(var j=0;j<maintop1.length;j++){
            concealedBox2[j].style.display = 'none';
         }
        concealedBox2[this.index].style.display = 'block';
     }
     maintop1[i].onmouseout = function(){
        concealedBox2[this.index].style.display = 'none';
     }
 }
 
 for(var i=0;i<concealedBox2.length;i++){
    concealedBox2[i].index =i;
    concealedBox2[i].onmouseover = function(){
        concealedBox2[this.index].style.display = 'block';
     }
     concealedBox2[i].onmouseout = function(){
        concealedBox2[this.index].style.display = 'none';
     }
 }






Dot[0].style.width='7px';
Dot[0].style.height='7px';
Dot[0].style.background='rgb(255, 255, 255)';
Dot[0].style.border='1px solid red';
 SpanArrow[0].onclick  = function(){
     num = num -259;
     if(num<-518){
        num =-518;
     }
     if(num == -259){
        Dot[1].style.width='7px';
        Dot[1].style.height='7px';
        Dot[1].style.background='rgb(255, 255, 255)';
        Dot[1].style.border='1px solid red';
        Dot[0].style.width='';
        Dot[0].style.height='';
        Dot[0].style.background='';
        Dot[0].style.border='';
     }
     if(num == -518){
        Dot[2].style.width='7px';
        Dot[2].style.height='7px';
        Dot[2].style.background='rgb(255, 255, 255)';
        Dot[2].style.border='1px solid red';
        Dot[1].style.background='';
        Dot[1].style.width='';
        Dot[1].style.height='';
        Dot[1].style.border='';
    
     }
     Longul[0].style.marginLeft= num + 'px';
}
SpanArrow[1].onclick  = function(){
      
        num = num +259;
        if(num>0){
           num =0;
        }
        if(num == -259){
            Dot[1].style.width='7px';
            Dot[1].style.height='7px';
            Dot[1].style.background='rgb(255, 255, 255)';
            Dot[1].style.border='1px solid red';
            Dot[2].style.background='';
            Dot[2].style.width='';
            Dot[2].style.height='';
            Dot[2].style.border='';
        
         }
         if(num ==0){
            Dot[0].style.width='7px';
            Dot[0].style.height='7px';
            Dot[0].style.background='rgb(255, 255, 255)';
            Dot[0].style.border='1px solid red';
            Dot[1].style.background='';
            Dot[1].style.width='';
            Dot[1].style.height='';
            Dot[1].style.border='';
         }
        console.log(num);
         Longul[0].style.marginLeft= num + 'px';
}  
for(var i=0;i<Dot.length;i++){
        Dot[i].index = i;
     Dot[i].onclick = function(){
         for(var i=0;i<Dot.length;i++){
            Dot[i].style.background='';
            Dot[i].style.width='';
            Dot[i].style.height='';
            Dot[i].style.border='';
         }
         var num =-259
      
       Longul[0].style.marginLeft= this.index * num + 'px';
       Dot[this.index].style.width='7px';
       Dot[this.index].style.height='7px';
       Dot[this.index].style.background='rgb(255, 255, 255)';
       Dot[this.index].style.border='1px solid red';
       
     }
}

var n=0
Dot2[0].style.width='7px';
Dot2[0].style.height='7px';
Dot2[0].style.background='rgb(255, 255, 255)';
Dot2[0].style.border='1px solid red';
 SpanArrow2[1].onclick  = function(){

    n = n +259;
    if(n>0){
       n =0;
    }
    if(n == -259){
        Dot2[1].style.width='7px';
        Dot2[1].style.height='7px';
        Dot2[1].style.background='rgb(255, 255, 255)';
        Dot2[1].style.border='1px solid red';
        Dot2[2].style.background='';
        Dot2[2].style.width='';
        Dot2[2].style.height='';
        Dot2[2].style.border='';
    
     }
     if(n==0){
        Dot2[0].style.width='7px';
        Dot2[0].style.height='7px';
        Dot2[0].style.background='rgb(255, 255, 255)';
        Dot2[0].style.border='1px solid red';
        Dot2[1].style.background='';
        Dot2[1].style.width='';
        Dot2[1].style.height='';
        Dot2[1].style.border='';
     }
    console.log(num);
     Longul[1].style.marginLeft= n+ 'px';
}
 SpanArrow2[0].onclick  = function(){
     n = n -259;
     if(n<-518){
        n =-518;
     }
     if(n == -259){
        Dot2[1].style.width='7px';
        Dot2[1].style.height='7px';
        Dot2[1].style.background='rgb(255, 255, 255)';
        Dot2[1].style.border='1px solid red';
        Dot2[0].style.width='';
        Dot2[0].style.height='';
        Dot2[0].style.background='';
        Dot2[0].style.border='';
     }
     if(n == -518){
        Dot2[2].style.width='7px';
        Dot2[2].style.height='7px';
        Dot2[2].style.background='rgb(255, 255, 255)';
        Dot2[2].style.border='1px solid red';
        Dot2[1].style.background='';
        Dot2[1].style.width='';
        Dot2[1].style.height='';
        Dot2[1].style.border='';
    
     }
  
     Longul[1].style.marginLeft= n + 'px';
    }
 for(var i=0;i<Dot2.length;i++){
        Dot2[i].index = i;
     Dot2[i].onclick = function(){
         for(var i=0;i<Dot2.length;i++){
            Dot2[i].style.background='';
            Dot2[i].style.width='';
            Dot2[i].style.height='';
            Dot2[i].style.border='';
         }
         var n=-259
      
       Longul[1].style.marginLeft= this.index * n + 'px';
       Dot2[this.index].style.width='7px';
       Dot2[this.index].style.height='7px';
       Dot2[this.index].style.background='rgb(255, 255, 255)';
       Dot2[this.index].style.border='1px solid red';
       
     }
 }
var u=0
Dot3[0].style.width='7px';
Dot3[0].style.height='7px';
Dot3[0].style.background='rgb(255, 255, 255)';
Dot3[0].style.border='1px solid red';

 SpanArrow3[0].onclick  = function(){
     u = u -259;
     if(u<-518){
        u=-518;
     }
     if(u == -259){
        Dot3[1].style.width='7px';
        Dot3[1].style.height='7px';
        Dot3[1].style.background='rgb(255, 255, 255)';
        Dot3[1].style.border='1px solid red';
        Dot3[0].style.width='';
        Dot3[0].style.height='';
        Dot3[0].style.background='';
        Dot3[0].style.border='';
     }
     if(u == -518){
        Dot3[2].style.width='7px';
        Dot3[2].style.height='7px';
        Dot3[2].style.background='rgb(255, 255, 255)';
        Dot3[2].style.border='1px solid red';
        Dot3[1].style.background='';
        Dot3[1].style.width='';
        Dot3[1].style.height='';
        Dot3[1].style.border='';
    
     }
  
     Longul[2].style.marginLeft= u + 'px';
    }
    for(var i=0;i<Dot3.length;i++){
        Dot3[i].index = i;
     Dot3[i].onclick = function(){
         for(var i=0;i<Dot3.length;i++){
            Dot3[i].style.background='';
            Dot3[i].style.width='';
            Dot3[i].style.height='';
            Dot3[i].style.border='';
         }
         var u =-259
      
       Longul[2].style.marginLeft= this.index * u + 'px';
       Dot3[this.index].style.width='7px';
       Dot3[this.index].style.height='7px';
       Dot3[this.index].style.background='rgb(255, 255, 255)';
       Dot3[this.index].style.border='1px solid red';
       
     }
    }
   SpanArrow3[1].onclick  = function(){
    u = u +259;
    if(u>0){
       u =0;
    }
    if(u == -259){
        Dot3[1].style.width='7px';
        Dot3[1].style.height='7px';
        Dot3[1].style.background='rgb(255, 255, 255)';
        Dot3[1].style.border='1px solid red';
        Dot3[2].style.background='';
        Dot3[2].style.width='';
        Dot3[2].style.height='';
        Dot3[2].style.border='';
    
     }
     if(u ==0){
        Dot3[0].style.width='7px';
        Dot3[0].style.height='7px';
        Dot3[0].style.background='rgb(255, 255, 255)';
        Dot3[0].style.border='1px solid red';
        Dot3[1].style.background='';
        Dot3[1].style.width='';
        Dot3[1].style.height='';
        Dot3[1].style.border='';
     }
    console.log(num);
     Longul[2].style.marginLeft= u + 'px';
}



var m=0
Dot4[0].style.width='7px';
Dot4[0].style.height='7px';
Dot4[0].style.background='rgb(255, 255, 255)';
Dot4[0].style.border='1px solid red';

SpanArrow4[1].onclick  = function(){
    m= m +259;
    if(m>0){
       m =0;
    }
    if(m == -259){
        Dot4[1].style.width='7px';
        Dot4[1].style.height='7px';
        Dot4[1].style.background='rgb(255, 255, 255)';
        Dot4[1].style.border='1px solid red';
        Dot4[2].style.background='';
        Dot4[2].style.width='';
        Dot4[2].style.height='';
        Dot4[2].style.border='';
    
     }
     if(m ==0){
        Dot4[0].style.width='7px';
        Dot4[0].style.height='7px';
        Dot4[0].style.background='rgb(255, 255, 255)';
        Dot4[0].style.border='1px solid red';
        Dot4[1].style.background='';
        Dot4[1].style.width='';
        Dot4[1].style.height='';
        Dot4[1].style.border='';
     }
    console.log(num);
     Longul[3].style.marginLeft= m + 'px';
}
SpanArrow4[0].onclick  = function(){
    m = m -259;
    if(m<-518){
       m =-518;
    }
    if(m == -259){
       Dot4[1].style.width='7px';
       Dot4[1].style.height='7px';
       Dot4[1].style.background='rgb(255, 255, 255)';
       Dot4[1].style.border='1px solid red';
       Dot4[0].style.width='';
       Dot4[0].style.height='';
       Dot4[0].style.background='';
       Dot4[0].style.border='';
    }
    if(m == -518){
       Dot4[2].style.width='7px';
       Dot4[2].style.height='7px';
       Dot4[2].style.background='rgb(255, 255, 255)';
       Dot4[2].style.border='1px solid red';
       Dot4[1].style.background='';
       Dot4[1].style.width='';
       Dot4[1].style.height='';
       Dot4[1].style.border='';
    }
    Longul[3].style.marginLeft= m + 'px';
   }
   for(var i=0;i<Dot4.length;i++){
       Dot4[i].index = i;
    Dot4[i].onclick = function(){
        for(var i=0;i<Dot4.length;i++){
           Dot4[i].style.background='';
           Dot4[i].style.width='';
           Dot4[i].style.height='';
           Dot4[i].style.border='';
        }
        var m =-259
     
      Longul[3].style.marginLeft= this.index * m + 'px';
      Dot4[this.index].style.width='7px';
      Dot4[this.index].style.height='7px';
      Dot4[this.index].style.background='rgb(255, 255, 255)';
      Dot4[this.index].style.border='1px solid red';
      
    }
   }


console.log( SpanArrow);
recommmended [1].onclick = function(){
     num = 0 -1210;
     if(num<-3000){
         num =0;
     }
     for(var i=0;i<recommmended.length;i++){
        recommmended [i].style.color='';
     }
     recommmendedLunBig.style.marginLeft= num + 'px';
     recommmendedLunBig.style.transition= 'all 1.5s';
     recommmended [1].style.color='orange';
 }
 recommmended [0].onclick = function(){
    num = 0 +1210;
    if(num<3000){
        num =0;
    }
    for(var i=0;i<recommmended.length;i++){
        recommmended [i].style.color='';
     }
    recommmendedLunBig.style.marginLeft= num + 'px';
    recommmendedLunBig.style.transition= 'all 1.5s';
    recommmended [0].style.color='orange';
}






//  倒计时
setInterval(timeday,1000);
function timeday(){
    var startTime = new Date();
   
    var time = new Date('2018 9 22 22:00:00');
     //取到毫秒
     var timenum =Math.floor(time- startTime)/1000;
     
//    var getDate = Math.floor(timenum/60/60/24);
   var getHours = Math.floor(timenum/60/60%24);
   var getMinute = Math.floor(timenum/60%60)
   var getSecond =Math.floor(timenum%60);
//    if (day <= 9) day = '0' + day;
   if(getHours <10){
    getHours= '0' + getHours;
   } 
   if( getMinute <10){
    getMinute= '0' + getMinute;
   } 
   if( getSecond <10){
    getSecond= '0' +  getSecond;
   } 
//    if (minute <= 9) minute = '0' + minute;
//    if (second <= 9) second = '0' + second;
   Countdown[0].innerHTML = getHours;
   Countdown[1].innerHTML = getMinute;
   Countdown[2].innerHTML = getSecond;
  
}  
// *****************************************************
for ( var i=0;i<homeapp.length;i++){
 
    homeapp[i].index=i;
    homeapp[i].onmouseover=function () {
  
for (var j=0;j<homeapp.length;j++){
       console.log(j);
       homeapp[j].className='';
    Homeapp[j].style.display='none';
    // console.log()
}
   homeapp[this.index].className='active';
    Homeapp[this.index].style.display='block';
    Homeapp[0].style.display='block';
    Homeapp[5].style.display='block';
    Homeapp[8].style.display='block';
    Homeapp[13].style.display='block';
    Homeapp[18].style.display='block';
}
    }

/************************************* */
var lun = figure.length;

for(var i = 0;i < lun;i++){ 
    figure[i].index = i;
    figure[i].onmouseover = function () {
        review[this.index].style.height = 70 + 'px';
    }
        figure[i].onmouseout = function () {
            review[this.index].style.height = 0 + 'px';
    }
}
/**************************************************** */
  var  button = document.querySelectorAll('.jiantou span')
  var  AFlanshblock = document.querySelector('.Flansh_block');
//   console.log(button[0]);
  button[1].onclick = function(){
    num = 0 -725;
    if(num<-1300){
        num =0;
    }
    for(var i=0;i<  button.length;i++){
       button[i].style.color='';
    }
    AFlanshblock.style.marginLeft= num + 'px';
    AFlanshblock.style.transition= 'all 1.5s';
    button[1].style.color='orange';
}
button[0].onclick = function(){
   num = 0 +725;
   if(num<1300){
       num =0;
   }
       for(var i=0;i<  button.length;i++){
             button[i].style.color='';
       }
   AFlanshblock.style.marginLeft= num + 'px';
   AFlanshblock.style.transition= 'all 1.5s';
   button[0].style.color='orange';
}

//   var Maintop =document.querySelectorAll('.main-top ul li');
//   var Amainnnone = document.querySelectorAll('.main_none');
//   for(var i = 0;i <Maintop.length;i++){
//     Maintop[i].index = i;
//     Maintop[i].onmouseover = function () {
//         for(var j = 0;j < Null.length;j++){
//             Amainnnone[j] .style.display = 'none';
//         }
//         Amainnnone [this.index].style.display = 'block';
//     }

// }
//  ************************************************************************
  var num = 0;
    Arrows.onclick = function(){
        if(num >Beinum.length-1){
            num= 0;
      }
      for(var a =0;a<Aa.length;a++){
                    Aa[a].style.background = '';
                 }
     Aa[num].style.background = '#ccc';
      console.log(num);
      ++num;
      Bei.style. backgroundImage = 'url(mi/lun'+num+'.jpg)'
      Bei.style.opacity = '1';
    clearInterval(start); 
    }
    ArrowsR.onclick = function(){
         
       if(num >Beinum.length-1){
           num = 0;  
     }
     for(var a =0;a<Aa.length;a++){
        Aa[a].style.background = '';
     }
     Aa[num].style.background = '#ccc';
     console.log(num);
     ++num;
     Bei.style. backgroundImage = 'url(mi/lun'+num+'.jpg)'
     Bei.style.opacity = '1';
     clearInterval(start); 
  }

 for(var i=0;i<Aa.length;i++){
    console.log( Aa[i]);
     Aa[i].index = i;
     Aa[i].onclick = function(){
        for(var a =0;a<Aa.length;a++){
            Aa[a].style.background = '';
         }
         var b= this.index+1;
         Aa[this.index].style.background = '#ccc';
        Bei.style. backgroundImage = 'url(mi/lun'+b+'.jpg)'
        clearInterval(start); 
     }

 }
 setInterval(start,5000);
 function start(){

    index = index +1
     if(index>8){
        index = 1;
     }
     for(var a =0;a<Aa.length;a++){
        Aa[a].style.background = '';
     }
     console.log(num)
     Bei.style. backgroundImage = 'url(mi/lun'+index+'.jpg)'
     Aa[index-1].style.background = '#ccc';
     console.log(Aa[index-1])
     Bei.style.opacity = '1';
 }

//  *************************************************************************/
for(var i = 0;i < length;i++){
    miLift[i].index = i;
    miLift[i].onmouseover = function () {
        NavNone.style.height = 230 + 'px';
        for(var j = 0;j < Null.length;j++){
            Null[j].style.display = 'none';
        }
        Null[this.index].style.display = 'block';
    }
    miLift[i].onmouseout = function () {
        NavNone.style.height = 0 + 'px';
    }
    NavNone.onmouseover = function () {
        NavNone.style.height = 230 + 'px';
    }
    NavNone.onmouseout = function () {
        NavNone.style.height = 0 + 'px';
    }
}

//************************************************************************************* */

    cart.addEventListener('mousemove',function(){
     box.style.height =120+'px';
     text.style.color = 'orange';
     box.style.transition = 'all 1.5s';
    })
    cart.addEventListener('mouseout',function(){
      box.style.height = 0+'px';
      text.style.color = '';
    })
     mi.onfocus = function(){
       mi8.style.display = 'none';
       button.style.border = '1px solid rgb(243,158,0)';
       mi.style.border = '1px solid rgb(243,158,0)';
     }
     mi.onblur = function(){
        mi8.style.display = 'block';
        button.style.border = '';
        mi.style.border = '';
    }
    




}