window.onload = function() {
    function myFn(param1,param2){
		var myli = document.getElementById(param1);
		var myul = document.getElementById(param2);
		myli.onmouseover = function(){
		  myul.style.display = 'block';
		}
		myli.onmouseout = function(){
		   myul.style.display = 'none';
	   }
	}
	myFn('mm1','submenu1');
	myFn('mm2','submenu2');
	myFn('mm3','submenu3');
	myFn('mm4','submenu4');
	myFn('mm5','submenu5');
	myFn('mm6','submenu6');
	myFn('mm7','submenu7');
	myFn('mm8','submenu8');
	myFn('mm9','submenu9');
}