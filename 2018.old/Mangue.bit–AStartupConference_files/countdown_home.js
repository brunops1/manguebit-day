
var aa = 2017
var mm = 03
var dd = 23
var hh = 09
var mi = 00

function setcountdown(theyear,themonth,theday,hour,minutes) {
yr=theyear;mo=themonth;da=theday
} setcountdown(aa,mm,dd)

var occasion="Mangue.Bit 2017"
var message_on_occasion="É hoje"

var countdownwidth='510px'
var countdownheight='200px'
var countdownbgcolor='#00FFFFF'
var opentags='<font face="Montserrat" size="15" color="#FFFFFF">'
var closetags='</font>'

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
var crosscount=''

function start_countdown(){
if (document.layers)
document.countdownnsmain.visibility="show"
else if (document.all||document.getElementById)
crosscount=document.getElementById&&!document.all?document.getElementById("countdownie") : countdownie
countdown()
}

if (document.all||document.getElementById)
document.write('<span id="countdownie" style="width:'+countdownwidth+'; background-color:'+countdownbgcolor+'"></span>')

window.onload=start_countdown

function countdown(){
var today=new Date()
var todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todayh=today.getHours()
var todaymin=today.getMinutes()
var todaysec=today.getSeconds()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
futurestring=montharray[mo-1]+" "+da+", "+yr
dd=Date.parse(futurestring)-Date.parse(todaystring)
dday=Math.floor(dd/(60*60*1000*24)*1)
dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
//if on day of occasion
if(dday<=0&&dhour<=0&&dmin<=0&&dsec<=1&&todayd==da){
if (document.layers){
document.countdownnsmain.document.countdownnssub.document.write (opentags+message_on_occasion+closetags)
document.countdownnsmain.document.countdownnssub.document.close()
}
else if (document.all||document.getElementById)
crosscount.innerHTML=opentags+message_on_occasion+closetags
return
}
//if passed day of occasion
else if (dday<=-1){
if (document.layers){
document.countdownnsmain.document.countdownnssub.document.write(opentags+"Occasion already passed! "+closetags)
document.countdownnsmain.document.countdownnssub.document.close()
}
else if (document.all||document.getElementById)
crosscount.innerHTML=opentags+"Evento realizado!"+closetags
return
}
//else, if not yet
else{
if (document.layers){
document.countdownnsmain.document.countdownnssub.document.write(opentags+dday+ " days, "+dhour+" hours, "+dmin+" minutes, and "+dsec+" "+occasion+closetags)
document.countdownnsmain.document.countdownnssub.document.close()
}
else if (document.all||document.getElementById)
crosscount.innerHTML=opentags+dday+ " dias, "+dhour+" horas, "+dmin+" minutos "+dsec+" segundos<b>"+closetags
}
  setTimeout("countdown()",1000)
  }
