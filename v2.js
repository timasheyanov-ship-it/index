/* MAD LAB v2 — дополнение. Подключается после основного скрипта. */
(function(){
var stl=document.createElement("style");
stl.textContent="@keyframes dMelt{0%{transform:none}60%{transform:scale(1.1,.5) translateY(14px);filter:hue-rotate(90deg) saturate(4)}100%{transform:scale(1.5,.05) translateY(40px);opacity:0}}"+
"@keyframes dFrz{0%{filter:none}30%{filter:grayscale(1) brightness(2) hue-rotate(160deg)}50%,70%{transform:translateX(-5px)}60%,80%{transform:translateX(5px)}100%{transform:scale(.2) rotate(40deg);opacity:0}}"+
"@keyframes dBurn{0%{filter:none}30%{filter:brightness(1.8) sepia(1) saturate(6)}100%{filter:brightness(.1);transform:scale(.7) translateY(10px);opacity:.2}}"+
"@keyframes dBoom{0%{transform:scale(1)}40%{transform:scale(2.2);filter:brightness(3)}100%{transform:scale(3);opacity:0}}"+
"@keyframes dZap{0%,20%,40%,60%{filter:invert(1)}10%,30%,50%,70%{filter:none;transform:translateX(4px)}100%{filter:brightness(.2);transform:none}}"+
"@keyframes dVoid{0%{transform:none}100%{transform:rotate(720deg) scale(0);opacity:0}}"+
"@keyframes dFlat{0%{transform:none}100%{transform:scale(1.6,.1) translateY(30px)}}"+
"@keyframes dSteam{0%{opacity:1}100%{opacity:0;transform:translateY(-60px) scale(1.4);filter:blur(8px)}}"+
"@keyframes oSink{to{transform:translateY(66px) rotate(200deg)}}"+
"@keyframes oFloat{0%{transform:translateY(0)}40%{transform:translateY(24px)}100%{transform:translateY(20px) rotate(10deg)}}"+
".fxe{font-size:40px;display:block;position:absolute;left:0;right:0;top:-6px;animation:wob 1s infinite}";
document.head.appendChild(stl);

/* ---------- данные ---------- */
var NS=[["Сухой песок","🏜️","#e0c27a"],["Мокрый песок","🟫","#a8864f"],["Глина","🧱","#b5651d"],["Мука","🌾","#f5efe0"],["Какао","☕","#5a3825"],["Мёд","🍯","#e8a317"],["Спирт","🍸","#dff"],["Перекись","🧴","#cdeaff"],["Сода","🥄","#f4f4f4"],["Желе","🍮","#ff77aa"],["Опилки","🪵","#c49a6c"],["Гравий","🪨","#888"]];
var SAND=S.length,WET=SAND+1;
NS.forEach(function(a){S.push({n:a[0],e:a[1],c:a[2]})});
R.push([[SAND,27],WET]);
NM.splice(0,NM.length,"Тимофей","Тимоша","Тимка","Тимофеич","Раш","Гигл","Халт","Дюп","Глитч","Бублик","Гром","Соня");
Object.assign(FM,{smoke:"Из колбы валит густой дым!",glow:"Смесь вспыхнула неоновым светом.",foam:"Поднялась пена и пузыри!",freeze:"Всё мгновенно замёрзло.",expand:"Смесь раздулась и полезла вверх!",boom:"БАБАХ! Маленький мультяшный взрыв!",crystal:"В колбе вырастают кристаллы.",mutate:"Смесь мутирует и меняет цвет!",color:"Цвет смеси переливается.",calm:"Ничего не произошло... пока. Где-то хлопнула дверь."});
DN.splice(0,DN.length,"Открой 3 вещества","Открой 10 веществ","Вызови взрыв","Вырасти кристалл","Проведи 3 эксперимента","Сделай 15 смесей","Получи Квинтэссенцию");
DF.splice(0,DF.length,"В животе найден маленький ключик 🔑","Внутри что-то светится","Под рёбрами спрятан крестик","В лапе остаток витаминов: бежит быстрее","В костях нашлась зажигалка","В костях звенят 2 монетки","Скелет выглядит довольным","Рядом с мышью проскочил Rush: ШУУУ!","Из кишечника смотрят глаза. Не смотрите в ответ!");
var PL=["Хотя бы цвет сменила!","Мышь сменила цвет!"];
var TXT=["Мышь сменила цвет!","Мышь начала светиться!","Мышь стала огромной!","Мышь стала крошечной!","Суперскорость! Мышь исчезла в размытом пятне.","Мышь парит в воздухе!","Мышь превратилась в фантастическое существо!","От мыши идёт пар! Она вся в облачках.","Мышь обрела мультяшную суперсилу!","Ничего не произошло.","Мышь стала странной и довольной.","Мышь превратилась в стальной танк!"];
OUT.forEach(function(o,i){if(TXT[i])o[1]=TXT[i]});
var K=0;
OUT[0][2]=function(m){m.h=(m.h+60+K%200)%360};
OUT[6][2]=function(m){m.e=["🦄","🐲","👁️","🕷️","👻","🧚"][K%6]};
OUT[10][2]=function(m){m.h=K%360;m.s=1.2;m.t="Странная"};

/* ---------- реалистичная мышь ---------- */
var MS='<svg viewBox="0 0 100 64" style="width:1em;height:.64em;vertical-align:middle">'+
'<path d="M16 50 C-6 52 -4 22 10 20" stroke="#d9a5a5" stroke-width="3" fill="none" stroke-linecap="round"/>'+
'<ellipse cx="30" cy="59" rx="7" ry="3" fill="#e8b4b8"/><ellipse cx="68" cy="59" rx="7" ry="3" fill="#e8b4b8"/>'+
'<ellipse cx="50" cy="42" rx="34" ry="18" fill="#8b8680"/><ellipse cx="52" cy="49" rx="24" ry="9" fill="#b5afa8"/>'+
'<ellipse cx="80" cy="40" rx="15" ry="11" fill="#9a948d"/><path d="M90 34 L100 41 L90 47Z" fill="#8f8a84"/>'+
'<circle cx="99" cy="41" r="2.6" fill="#e88"/><circle cx="72" cy="26" r="9" fill="#9a948d"/><circle cx="72" cy="26" r="5.5" fill="#e8b4b8"/>'+
'<circle cx="86" cy="27" r="7" fill="#9a948d"/><circle cx="86" cy="27" r="4" fill="#e8b4b8"/>'+
'<circle cx="87" cy="37" r="2.4" fill="#111"/><circle cx="87.7" cy="36.3" r=".8" fill="#fff"/>'+
'<path d="M92 42 L108 36 M92 43 L108 44 M92 45 L106 51" stroke="#ddd" stroke-width=".8"/></svg>';
function fixMice(r){r.querySelectorAll(".mo").forEach(function(o){if(o.textContent=="🐭")o.innerHTML=MS})}
var mo0=mice;mice=function(){mo0();fixMice(document);rebuildSel()};
var sp0=showPop;showPop=function(){sp0.apply(this,arguments);fixMice($("#pb"))};
var xr0=$("#xray").onclick;$("#xray").onclick=function(){xr0();fixMice($("#pb"))};

/* ---------- имена: Тимофей ---------- */
D.mice.forEach(function(m){if(m.n=="Тимоти"){m.n="Тимофей";m.p="Тот самый Тимофей"}if(m.n=="Сик"){m.n="Тимоша";m.p="Тёзка Тимофея"}});save();
$("#deliv").onclick=function(){var T=["Тимофей","Тимоша","Тимка","Тимофеич"],TP=["Тёзка того самого Тимофея","Любимец Тимофея","Мышиная копия Тимофея","Родня Тимофея"],O=["Раш","Гигл","Халт","Дюп","Глитч","Бублик","Гром","Соня"];
var pk=function(a,n){return a.slice().sort(function(){return Math.random()-.5}).slice(0,n)},r=function(a){return a[Math.random()*a.length|0]};
var ns=pk(T,2).map(function(n){return{n:n,p:r(TP)}}).concat(pk(O,2).map(function(n){return{n:n,p:r(PS)}})).sort(function(){return Math.random()-.5});
D.mice=ns.map(function(x){return{n:x.n,p:x.p,h:Math.random()*360|0,s:1,g:0,f:0,e:"🐭",t:"Здорова",st:0}});sel=0;D.deliv=(D.deliv||0)+1;D.hist.unshift("📦 Новая поставка мышей №"+D.deliv);snd.disc();save();mice();$("#mlog").textContent="Пришла новая поставка: 4 свежие мыши!"};

/* ---------- перемешивание ---------- */
var mixed=false,ph=null;
var add0=add;add=function(i){var n=mix.length;add0(i);if(mix.length>n)mixed=false};
var shk0=shake;shake=function(){if(mix.length<2){shk0();return}shk0();mixed=true;shk=100;spawn("foam",25,W/2,H*.5,col);try{navigator.vibrate&&navigator.vibrate([60,40,60,40,60,40,120])}catch(e){}snd.shake();setTimeout(snd.shake,350)};
$("#shake").onclick=shake;
var pr0=$("#pour").onclick;$("#pour").onclick=function(){pr0();mixed=false;ph=null};
$("#savem").onclick=function(){if(!mix.length)return;if(!mixed){say("Сначала встряхните колбу: зелье надо перемешать!");return}
D.potions=D.potions||[];var nm="Зелье №"+(D.potions.length+1)+(ph?" 📷":"")+" ("+(mix.length>1?mix.map(function(i){return S[i].e}).join(""):S[mix[0]].n)+")";
D.potions.push({n:nm,c:col,ids:mix.slice(),ph:ph?{img:ph.img,o:ph.o,person:ph.person}:null});say("Сохранено: "+nm+". Его можно испытать на мышах.");save()};

/* ---------- панель в лаборатории: фото + предметы ---------- */
var OB=[["🪙","Монета","metal"],["🔩","Гвоздь","metal"],["🍎","Яблоко","org"],["🍃","Лист","org"],["🧀","Сыр","org"],["🥚","Яйцо","org"],["🍫","Шоколадка","org"],["🪵","Щепка","wood"],["🦆","Резиновая уточка","plastic"],["🧸","Мишка","plastic"],["🪨","Камешек","stone"]];
var bar=document.createElement("div");bar.className="row";
bar.innerHTML='<button id="phc" style="flex:0 0 auto">📷</button><button id="phg" style="flex:0 0 auto">🖼</button><select id="osel">'+OB.map(function(o,i){return'<option value="'+i+'">'+o[0]+" "+o[1]+"</option>"}).join("")+'</select><button id="odrop" style="flex:0 0 auto">Бросить</button>';
$("#lab").insertBefore(bar,$("#inv"));
$("#phcam").parentNode.style.display="none";
$("#phc").onclick=function(){phOpen(1)};$("#phg").onclick=function(){phOpen(0)};
phf.onchange=function(){var f=phf.files&&phf.files[0];if(!f)return;var url=URL.createObjectURL(f),im=new Image();
im.onload=function(){try{var c=document.createElement("canvas");c.width=c.height=48;var k=c.getContext("2d"),q=Math.min(im.width,im.height);k.drawImage(im,(im.width-q)/2,(im.height-q)/2,q,q,0,0,48,48);
var d=k.getImageData(0,0,48,48).data,r=0,g=0,b=0,n=0,sk=0;
for(var i=0;i<d.length;i+=4){var R_=d[i],G=d[i+1],B=d[i+2];r+=R_;g+=G;b+=B;n++;if(R_>95&&G>40&&B>20&&Math.max(R_,G,B)-Math.min(R_,G,B)>15&&Math.abs(R_-G)>15&&R_>G&&R_>B)sk++}
var person=sk/n>.22,cc=hex([r/n,g/n,b/n]),img=c.toDataURL("image/jpeg",.7);
var fin=function(p){ph={img:img,o:Math.random()*OUT.length|0,person:p};mixed=false;if(mix.length){var a=rgb(col),z=rgb(cc);col=hex([(a[0]+z[0])/2,(a[1]+z[1])/2,(a[2]+z[2])/2])}else col=cc;
spawn("foam",10,W/2,H*.5,col);snd.disc();say("Фото добавлено в зелье! Встряхните колбу и сохраните: эффект узнаете на мыши.")};
if("FaceDetector" in window){try{new FaceDetector().detect(im).then(function(fs){fin(fs.length>0||person)}).catch(function(){fin(person)})}catch(e){fin(person)}}else fin(person)}
catch(e){say("Не удалось обработать фото.")}URL.revokeObjectURL(url)};
im.onerror=function(){say("Не удалось открыть фото.");URL.revokeObjectURL(url)};im.src=url};

/* ---------- бросить предмет в колбу ---------- */
function objRes(t){var h=function(f){return mix.some(function(i){return f(S[i])})},
acid=h(function(s){return s.acid}),cold=mix.some(function(i){return i==3||i==24}),hot=mix.some(function(i){return i==25||i==13}),
oil=h(function(s){return s.n=="Масло"}),thick=h(function(s){return/Глина|песок|Опилки|Гравий/.test(s.n)}),sug=h(function(s){return/Сахар|Мёд|Желе/.test(s.n)}),salt=h(function(s){return s.n=="Соль"||s.n=="Сода"});
if(!mix.length)return["Колба пуста: предмет просто звякнул о дно.","oSink"];
if(acid)return t=="metal"?["Растворяется с шипением, пузыри во все стороны!","dMelt"]:t=="stone"?["Лежит на дне и просто пузырится: камню всё равно.","oSink"]:t=="plastic"?["Плавится в бесформенный комок.","dMelt"]:["Чернеет, тает и обугливается.","dBurn"];
if(hot)return t=="metal"?["Раскаляется докрасна и тонет.","oSink"]:t=="stone"?["Раскаляется, но остаётся целым.","oSink"]:["Вспыхивает и сгорает до пепла!","dBurn"];
if(cold)return["Мгновенно покрывается инеем и примерзает. Дзынь!","dFrz"];
if(thick)return["Вязнет в густой массе и медленно тонет.","oSink"];
if(oil)return t=="metal"||t=="stone"?["Тонет сквозь масло, оставляя след.","oSink"]:["Лениво плавает на масляной плёнке.","oFloat"];
if(sug)return["Липнет к стенке и обволакивается сиропом.","oFloat"];
if(salt)return["Покрывается белой коркой кристаллов.","oFloat"];
return t=="metal"||t=="stone"?["Тонет на дно.","oSink"]:["Плавает на поверхности.","oFloat"]}
$("#odrop").onclick=function(){var o=OB[+$("#osel").value],r=objRes(o[2]);ac();snd.pour();spawn("foam",8,W/2,H*.4,col);
$("#pb").innerHTML='<div style="width:120px;height:120px;margin:6px auto;border:3px solid #9ef3ff;border-radius:6px 6px 30px 30px;background:linear-gradient(transparent 28%,'+(mix.length?col:"transparent")+' 28%);position:relative;overflow:hidden"><span id="oi" style="position:absolute;left:40px;top:0;font-size:36px;animation:'+r[1]+' 2.2s ease-in forwards">'+o[0]+'</span></div><h3 style="margin:6px 0">'+o[0]+" "+o[1]+'</h3><div style="font-size:16px;margin:6px 0">'+r[0]+'</div><button class="go" style="width:100%" id="pok">Ок</button>';
$("#pop").classList.add("on");$("#pok").onclick=function(){$("#pop").classList.remove("on")};D.hist.unshift(o[1]+" → "+r[0]);gain(2)};

/* ---------- мыши: только зелья, без случайности ---------- */
function rebuildSel(){var pv=$("#msub").value,pt=D.potions||[],h=(mixed&&mix.length)?'<option value="c">🧫 Текущая колба ('+mix.length+")</option>":"";
h+=pt.map(function(p,i){return'<option value="p'+i+'">🧪 '+p.n+"</option>"}).join("");if(!h)h='<option value="">Нет зелий: смешайте и сохраните</option>';
$("#msub").innerHTML=h;if([].some.call($("#msub").options,function(o){return o.value==pv}))$("#msub").value=pv}
getItem=function(v){if(!v)return null;var t=v[0],n=+v.slice(1);
if(t=="p"){var p=(D.potions||[])[n];if(!p)return null;return{e:p.ph?'<img src="'+p.ph.img+'" style="width:1.4em;height:1.4em;border-radius:6px;vertical-align:middle">':"🧪",n:p.n,k:"p"+p.ids.join("-")+(p.ph?"ph"+p.ph.o:""),ids:p.ids,ph:p.ph,heal:p.ids.indexOf(TK)>=0}}
if(t=="c"&&mixed&&mix.length)return{e:"🧫",n:"Текущая смесь",k:"c"+mix.join("-"),ids:mix.slice(),ph:ph,heal:mix.indexOf(TK)>=0};return null};
var CL={melt:"🟢",freeze:"❄️",burn:"🔥",boom:"💥",zap:"⚡",void:"🌀",flat:"🛡️",steam:"♨️"},AN={melt:"dMelt",freeze:"dFrz",burn:"dBurn",boom:"dBoom",zap:"dZap",void:"dVoid",flat:"dFlat",steam:"dSteam"};
function cause(ids,k){for(var j=0;j<ids.length;j++){var s=S[ids[j]];if(s.acid)return["melt",s.d]}
var h=function(x){return ids.indexOf(x)>=0};
if(h(TK))return["flat","раздавлена танком Сталиниума"];if(h(25))return["burn","упала в лаву"];if(h(13))return["zap","получила разряд электроплазмы"];if(h(36))return["void","засосана Тёмной материей"];if(h(3)||h(24))return["freeze","заморожена и рассыпалась"];if(h(14))return["melt","утонула в токсичной слизи"];
var a=[["boom","взорвалась мультяшным салютом"],["steam","испарилась в облачко пара"],["burn","сгорела до уголька"],["freeze","превратилась в ледышку"],["zap","получила разряд искр"],["void","улетела в воронку и не вернулась"],["melt","растеклась лужицей"]];
return k%13==0?["void","Rush пронёсся по колбе: ШУУУУ!"]:a[k%a.length]}
function popDeath(m,c,it){var alive=Object.assign({},m,{dead:0});
$("#pb").innerHTML='<div class="mw" style="height:130px"><span class="fxe">'+CL[c[0]]+'</span><div class="mo" id="dmo" style="font-size:'+70*m.s+"px;filter:"+mf(alive)+";animation:"+AN[c[0]]+' 2.2s ease-in forwards">'+(m.e=="🐭"?MS:mi(alive))+'</div></div><h3 style="margin:8px 0">'+m.n+" + "+it.e+" "+it.n+'</h3><div style="font-size:17px;margin:6px 0">Мышь погибла: '+c[1]+'</div><button class="go" style="width:100%" id="pok">Ок</button>';
$("#pop").classList.add("on");$("#pok").onclick=function(){$("#pop").classList.remove("on")};
setTimeout(function(){var e=$("#dmo");if(e){e.style.animation="none";e.style.filter="grayscale(1)";e.style.opacity=1;e.style.transform="none";e.textContent="💀"}},2300)}
$("#test").onclick=function(){var it=getItem($("#msub").value);
if(!it){$("#mlog").textContent="Нужно зелье: смешайте вещества в колбе (встряхните) и нажмите «Сохранить». Давать мышам можно только зелья.";return}
var m=D.mice[sel];if(m.dead&&!it.heal){$("#mlog").textContent=m.n+" мертва: "+m.dead+". Выберите другую мышь.";return}
var u=+$("#un").value,k=hash(it.k),b=Object.assign({},m),o,death=null;
if(it.heal)o=HEAL;
else if(it.ph){K=it.ph.o;o=it.ph.person?["love",m.n+" влюбилась в человека с фото! «Я влюблена!» 💕",function(x){x.t="Влюблена 💕"}]:OUT[it.ph.o%OUT.length].slice()}
else{K=k;var dng=it.ids.some(function(i){return S[i].acid||[3,13,14,24,25,36].indexOf(i)>=0});
if((k>>5)%100<8+10*u+(dng?30:0))death=cause(it.ids,k);o=OUT[k%OUT.length].slice();if(k%8==0)o[1]+=" (Где-то вдалеке хлопнула дверь.)"}
if(death){m.dead=death[1];m.t="Погибла";m.st=0;m.f=0;m.g=0;D.st.dead=(D.st.dead||0)+1;o=["dead","Мышь погибла: "+death[1]]}
else{o[2](m);if(o[3])m.t=o[3]}
m.l=m.l||[];m.l.unshift(it.n+": "+o[1]);m.l.length=Math.min(m.l.length,5);D.st.tests++;D.hist.unshift(m.n+" + "+it.n+" → "+o[1]);D.hist.length=Math.min(D.hist.length,40);
$("#mlog").textContent=m.n+" ("+m.p+"): "+o[1];
if(death){popDeath(m,death,it);beep(200,.6,"sawtooth",.4,40)}else{showPop(m,o,it,u,b);if(o[0]=="love"||o[0]=="fantasy"||o[0]=="weird")snd.disc();else snd.bub()}
gain(10+u*3);mice();chk();if(D.mice.every(function(x){return x.dead}))$("#mlog").textContent="Все мыши погибли! Нажмите «Новая поставка мышей»."};
$("#ul").parentNode.firstChild.textContent="Опасность зелья: ";

/* ---------- перевернул телефон: зелье пролилось ---------- */
var spOn=false;
function spill(){if(!mix.length||spOn)return;spOn=true;var w=innerWidth,h=innerHeight,cl=col,c=document.createElement("canvas");
c.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;z-index:15;touch-action:none";c.width=w;c.height=h;document.body.appendChild(c);var g=c.getContext("2d");
g.fillStyle=cl;g.globalAlpha=.88;
function blob(x,y,rx,ry){g.beginPath();for(var a=0;a<=6.4;a+=.3){var q=1+.18*Math.sin(a*3+x)+.1*Math.sin(a*5+y);g.lineTo(x+Math.cos(a)*rx*q,y+Math.sin(a)*ry*q)}g.closePath();g.fill()}
var cx0=w*.5,cy0=h*.32;blob(cx0,cy0,w*.3,h*.09);blob(cx0-w*.18,cy0+h*.07,w*.12,h*.05);blob(cx0+w*.2,cy0+h*.06,w*.1,h*.04);
for(var i=0;i<8;i++){var x=w*(.22+.56*Math.random()),y0=cy0+h*.03,len=h*(.12+.38*Math.random());g.fillRect(x-4,y0,8,len);g.beginPath();g.arc(x,y0+len,6,0,6.3);g.fill()}
for(i=0;i<9;i++)blob(w*Math.random(),h*(.25+.6*Math.random()),4+Math.random()*9,4+Math.random()*9);
g.globalAlpha=.25;g.strokeStyle="#fff";g.lineWidth=3;g.beginPath();g.arc(cx0-w*.1,cy0-h*.01,w*.09,3.4,4.6);g.stroke();g.globalAlpha=1;
var img=g.getImageData(0,0,w,h).data,pts=[];for(var yy=0;yy<h;yy+=14)for(var xx=0;xx<w;xx+=14){if(img[(yy*w+xx)*4+3]>40)pts.push((yy*w+xx)*4+3)}var tot=pts.length;
var bn=document.createElement("div");bn.style.cssText="position:fixed;top:8px;left:8px;right:8px;z-index:16;background:#120f1f;border:2px solid #ff3df0;border-radius:12px;padding:8px;text-align:center;color:#e8e4ff";bn.textContent="Колба опрокинулась! Протрите экран тряпкой 🧽";document.body.appendChild(bn);
var rag=document.createElement("div");rag.textContent="🧽";rag.style.cssText="position:fixed;z-index:17;font-size:48px;pointer-events:none;left:"+(w/2-24)+"px;top:"+(h*.7)+"px";document.body.appendChild(rag);
mix=[];ph=null;mixed=false;fxK="";snd.pour();try{navigator.vibrate&&navigator.vibrate([80,40,80])}catch(e){}
var down=false,lx=0,ly=0,lastChk=0;g.lineCap="round";g.lineJoin="round";
function chkc(){var d=g.getImageData(0,0,w,h).data,left=0;for(var j=0;j<pts.length;j++)if(d[pts[j]]>40)left++;if(left<tot*.06){c.remove();bn.remove();rag.remove();spOn=false;say("Экран вытерт. Колба пустая.");snd.disc()}}
function mv(e){rag.style.left=(e.clientX-24)+"px";rag.style.top=(e.clientY-24)+"px";if(!down)return;g.globalCompositeOperation="destination-out";g.lineWidth=70;g.beginPath();g.moveTo(lx,ly);g.lineTo(e.clientX,e.clientY);g.stroke();g.globalCompositeOperation="source-over";lx=e.clientX;ly=e.clientY;var n=Date.now();if(n-lastChk>350){lastChk=n;chkc()}}
c.onpointerdown=function(e){down=true;lx=e.clientX;ly=e.clientY;mv(e)};c.onpointermove=mv;c.onpointerup=c.onpointercancel=function(){down=false;chkc()}}
try{matchMedia("(orientation:landscape)").addEventListener("change",function(e){if(e.matches)spill()})}catch(e){}

hud();inv();rebuildSel();
})();
