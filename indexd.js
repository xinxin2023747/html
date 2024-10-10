
function appendright(para){
     para=para+"\n";
	return para;
}

var html="";
html+=appendright('<div style="position: fixed; bottom: 20%; z-index: 19999 !important; right: 2px;">');

var show1=1;
if(show1==1)
{
     html+=appendright('<style>');
    html+=appendright('#f63012 {animation-duration: 10000ms;animation-iteration-count: infinite;animation-timing-function: linear;} ');
    html+=appendright('.m{margin:10px;border-radius: 15px;border: solid 2px red;height: 75px;width: 75px;background-size: contain;}');
    html+=appendright('@keyframes spin {from {transform:rotate(0deg);}to {transform:rotate(360deg);}}');
    html+=appendright('</style>');
    
    html+=appendright('<div class="f63012" id="f63012">');
    //20琛屼笉淇敼
     html+=appendright('<img src="https://t6d.mc03rg.com/js/9S093a2F9.jpg" onclick="$(\'#f63012\').remove()" style="border-radius:50%;position:absolute;top:3px;right:3px;cursor:pointer;width:15px;height:15px;z-index:19000;"  />');
     //浼婁汉
     html+=appendright('<a target="_blank" href="https://76u2ghjt.oficovf.com/by/?channelCode=jh1057">');
     //html+=appendright('<img src="https://img.1379a.xyz/images/64c8cc903b631af06e9125fb.gif" style="margin:10px;border-radius: 15px;border: solid 2px red;" width="90px" height="90px" />');
     html+=appendright('<div  class="m" style="background-image: url(https://cg-pao-tu.nanyanglk.com/cg/tu/150-cg.gif);">.</div>');
     html+=appendright('</a>');
     html+=appendright('</div>');
}


var show2=1;
if(show2==1)
{
    html+=appendright('<style>');
    html+=appendright('#f63013 {animation-duration: 10000ms;animation-iteration-count: infinite;animation-timing-function: linear;}');
     html+=appendright('.m{margin:10px;border-radius: 15px;border: solid 2px red;height: 75px;width: 75px;background-size: contain;}');
    html+=appendright('@keyframes spin {from {transform:rotate(0deg);}to {transform:rotate(360deg);}}');
    html+=appendright('</style>');
    
    html+=appendright('<div class="f63013" id="f63013" style=" margin-top:30px;">');
    html+=appendright(' <img src="https://t6d.mc03rg.com/js/9S093a2F9.jpg" onclick="$(\'#f63013\').remove()" style="border-radius:50%;position:absolute;right:3px;cursor:pointer;width:15px;height:15px;z-index:19000;"  />');
    //右旋
    html+=appendright('<a target="_blank" href="https://dne6j.yomaoy.com/by/?channelCode=qy173">');
    //html+=appendright('<img src="https://exp-picture.cdn.bcebos.com/91091efc77f7980ed41b39c9d4db3620b83a9197.jpg" style="margin:10px;border-radius: 15px;border: solid 2px red;" width="90px" height="90px" />');
    html+=appendright('<div  class="m" style="background-image: url(https://qy-9ti83lde.suansjq.com/qy/100.gif);">.</div>');
    html+=appendright('</a>');
    html+=appendright('</div>');

}



var show3=1;
if(show3==1)
{

    html+=appendright('<style>');
    html+=appendright('#f63014 {animation-duration: 10000ms;animation-iteration-count: infinite;animation-timing-function: linear;}');
     html+=appendright('.m{margin:10px;border-radius: 15px;border: solid 2px red;height: 75px;width: 75px;background-size: contain;}');
    html+=appendright('@keyframes spin {from {transform:rotate(0deg);}to {transform:rotate(360deg);}}');
    html+=appendright('</style>');
    html+=appendright('<div class="f63014" id="f63014" style=" margin-top:30px;">');
    html+=appendright(' <img src="https://t6d.mc03rg.com/js/9S093a2F9.jpg" onclick="$(\'#f63014\').remove()" style="border-radius:50%;position:absolute;right:3px;cursor:pointer;width:15px;height:15px;z-index:19000;"  />');
    //鑹插悎
    html+=appendright('<a target="_blank" href="https://dne6j.yomaoy.com/by/?channelCode=qy173">');
    //html+=appendright('<img src="https://yvzfgigpiwmofux.com/2023/10/16/fe1aa62f2fa89.abc" style="margin:10px;border-radius: 15px;border: solid 2px red;" width="90px" height="90px" />');
    html+=appendright('<div class="m" style="background-image: url(https://tupian.usemir.com/jh/100.gif);">.</div>');
    html+=appendright('</a>');
    html+=appendright('</div>');
        
}

html+=appendright('</div>');

var rightContainer = document.createElement('div');
rightContainer.innerHTML = html;
document.body.appendChild(rightContainer);


function appendmove(para){
     para=para+"\n";
	return para;
}






        

function addEvent(obj,evtType,func,cap){
    cap=cap||false;
if(obj.addEventListener){
     obj.addEventListener(evtType,func,cap);
   return true;
}else if(obj.attachEvent){
        if(cap){
         obj.setCapture();
         return true;
     }else{
      return obj.attachEvent("on" + evtType,func);
   }
}else{
   return false;
    }
}
function getPageScroll(){
    var xScroll,yScroll;
if (self.pageXOffset) {
   xScroll = self.pageXOffset;
} else if (document.documentElement && document.documentElement.scrollLeft){
   xScroll = document.documentElement.scrollLeft;
} else if (document.body) {
   xScroll = document.body.scrollLeft;
}
if (self.pageYOffset) {
   yScroll = self.pageYOffset;
} else if (document.documentElement && document.documentElement.scrollTop){
   yScroll = document.documentElement.scrollTop;
} else if (document.body) {
   yScroll = document.body.scrollTop;
}
arrayPageScroll = new Array(xScroll,yScroll);
return arrayPageScroll;
}
function GetPageSize(){
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) { 
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight){
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else {
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) {
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) {
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    } 
    if(yScroll < windowHeight){
        pageHeight = windowHeight;
    } else { 
        pageHeight = yScroll;
    }
    if(xScroll < windowWidth){ 
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }
    arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight) 
    return arrayPageSize;
}

var AdMoveConfig=new Object();
AdMoveConfig.IsInitialized=false;
AdMoveConfig.ScrollX=0;
AdMoveConfig.ScrollY=0;
AdMoveConfig.MoveWidth=0;
AdMoveConfig.MoveHeight=0;
AdMoveConfig.Resize=function(){
    var winsize=GetPageSize();
    AdMoveConfig.MoveWidth=winsize[2];
    AdMoveConfig.MoveHeight=winsize[3];
    AdMoveConfig.Scroll();
}
AdMoveConfig.Scroll=function(){
    var winscroll=getPageScroll();
    AdMoveConfig.ScrollX=winscroll[0];
    AdMoveConfig.ScrollY=winscroll[1];
}
addEvent(window,"resize",AdMoveConfig.Resize);
addEvent(window,"scroll",AdMoveConfig.Scroll);
function AdMove(id){
    if(!AdMoveConfig.IsInitialized){
        AdMoveConfig.Resize();
        AdMoveConfig.IsInitialized=true;
    }
    var obj=document.getElementById(id);
    obj.style.position="absolute";
    var W=AdMoveConfig.MoveWidth-obj.offsetWidth;
    var H=AdMoveConfig.MoveHeight-obj.offsetHeight;
    var x = W*Math.random(),y = H*Math.random();
    var rad=(Math.random()+1)*Math.PI/6;
    var kx=Math.sin(rad),ky=Math.cos(rad);
    var dirx = (Math.random()<0.5?1:-1), diry = (Math.random()<0.5?1:-1);
    var step = 1;
    var interval;
    this.SetLocation=function(vx,vy){x=vx;y=vy;}
    this.SetDirection=function(vx,vy){dirx=vx;diry=vy;}
    obj.CustomMethod=function(){
        obj.style.left = (x + AdMoveConfig.ScrollX) + "px";
        obj.style.top = (y + AdMoveConfig.ScrollY) + "px";
        rad=(Math.random()+1)*Math.PI/6;
        W=AdMoveConfig.MoveWidth-obj.offsetWidth;
        H=AdMoveConfig.MoveHeight-obj.offsetHeight;
        x = x + step*kx*dirx;
        if (x < 0){dirx = 1;x = 0;kx=Math.sin(rad);ky=Math.cos(rad);} 
        if (x > W){dirx = -1;x = W;kx=Math.sin(rad);ky=Math.cos(rad);}
        y = y + step*ky*diry;
        if (y < 0){diry = 1;y = 0;kx=Math.sin(rad);ky=Math.cos(rad);} 
        if (y > H){diry = -1;y = H;kx=Math.sin(rad);ky=Math.cos(rad);}
    }
    this.Run=function(){
        var delay = 10;
        interval=setInterval(obj.CustomMethod,delay);
        obj.onmouseover=function(){clearInterval(interval);}
        obj.onmouseout=function(){interval=setInterval(obj.CustomMethod, delay);}
    }
}


var html="";
html+=appendmove('<style>#float_move{padding:0px 0;text-align:center;width:75px;position:fixed;left:5px;top:55%;');
html+=appendmove('background-color:#f86770;border-radius:15px;z-index:5;-moz-box-shadow:0 0 30px #888;box-shadow:0 0 30px #888;}');
html+=appendmove('.mv{height:75px;width:75px;background-size: contain; }');
html+=appendmove('</style>');
//46新葡京
html+=appendmove('<div id="float_move"  style="position: absolute; left: 380.507px; top: 131.378px;" >'); 
html+=appendmove('<a style="font-size:0px"href="https://76u2ghjt.oficovf.com/by/?channelCode=jh1057" style="display:block !important;">');
html+=appendmove('<div class="mv" border="0" style="background-image: url(https://www.imageoss.com/images/2024/03/14/100-42b7a77661cc68a66.gif);">娴间椒绗熼張锟�</div>');
html+=appendmove('</a>');
html+=appendmove('<span onclick="document.getElementById(\'float_move\').style.display = \'none\'" style="color:#fff;font-size:18px;">点关闭</span>');
html+=appendmove('</div>');

var moveContainer = document.createElement('div');
moveContainer.innerHTML = html;

var show4=1;
if(show4==1)
{
    
    document.body.appendChild(moveContainer);
    if (self == top)
    {
     var ad1=new AdMove("float_move");
     ad1.Run();
    }

}



//涓嬫偓娴�
document.writeln("<style>");
document.writeln("        body");
document.writeln("        {");
document.writeln("            padding-bottom: 125px;");
document.writeln("        }");
document.writeln("        .mbads");
document.writeln("        {");
document.writeln("            position: fixed;");
document.writeln("            bottom: 0px;");
document.writeln("            left: 0px;");
document.writeln("            right: 0px;");
document.writeln("            text-align: center;");
document.writeln("            z-index: 9999;");
document.writeln("        }");
document.writeln("        .mbads1");
document.writeln("        {");
document.writeln("            display: none;");
document.writeln("            position: fixed;");
document.writeln("            top: 0px;");
document.writeln("            left: 0px;");
document.writeln("            right: 0px;");
document.writeln("            text-align: center;");
document.writeln("            z-index: 9999;");
document.writeln("        }");
document.writeln("        @media (max-width: 720px)");
document.writeln("        {");
document.writeln("            body");
document.writeln("            {");
//document.writeln("                padding-top: 48px;");
document.writeln("                padding-bottom: 80px;");
document.writeln("            }");
document.writeln("            .mbads img");
document.writeln("            {");
document.writeln("                width: 100%;");
document.writeln("                height:75px;");
document.writeln("            }");


document.writeln("            .mbads1 img");
document.writeln("            {");
document.writeln("                width: 100%;");
document.writeln("                height:60px;");
document.writeln("            }");
document.writeln("            .mbads1");

document.writeln("            {");
document.writeln("                display: block;");
document.writeln("            }");
document.writeln("        }");
document.writeln("    </style>");

document.writeln("    <div class=\'mbads\'>");
document.writeln("        <a href=\'https://76u2ghjt.oficovf.com/by/?channelCode=jh1057\' target=\'_blank\'>");
document.writeln("            <img src=\'https://tul.xn--qrq298gm4o.com/gif/zzb960x120.gif\'/>");
document.writeln("        </a>");
document.writeln("    </div>");

//document.writeln("    <div class=\'mbads1\'>");
//document.writeln("        <a href=\'https://d.ofrul.com/2950.html\' target=\'_blank\'>");
//document.writeln("            <img src=\'https://yu.paeqmjq.cn/gif/zzb960x120.gif\'/>");
//document.writeln("        </a>");
//document.writeln("    </div>");