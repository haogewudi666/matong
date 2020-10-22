var tie=new Date('2020-10-26:18:00:00');
var jishi = document.getElementsByClassName("daojishi")[0];
function diffTime(time){
	var ti=new Date();
	var arr=[];
	var cut=time.getTime()-ti.getTime();
	var hour=Math.floor(cut / 1000 / 60 / 60);
	var min=Math.floor((cut / 1000 / 60) % 60);
	var sen=Math.floor((cut / 1000) % 60);
	arr.push(hour);
	arr.push(min);
	arr.push(sen);
	return arr;
};
var timer=setInterval(function(){
	var arr=diffTime(tie);
	jishi.innerHTML = "倒计时为"+arr[0]+"小时"+arr[1]+"分"+arr[2]+"秒";
},200)