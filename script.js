var btn=document.getElementById("count");
var inp=document.getElementById("enter");
var curr=document.querySelector(".curr");
var next=document.querySelector(".next");
var curr2=document.querySelector(".curr2");
var next2=document.querySelector(".next2");
var curr3=document.querySelector(".curr3");
var next3=document.querySelector(".next3");
var curr4=document.querySelector(".curr4");
var next4=document.querySelector(".next4");

function counter1(t){
let c=1;
	let id=setInterval(function(){
		if(c<=t){
			// if(t>0 && t<=9)
          animate(c);
			c++;
		}
		else
		{ 

			clearInterval(id);
			alert("counter stopped");
			return;
		}
	},1000);
};

function counter2(t){
let c=1;
	let id=setInterval(function(){
		if(c<=t){
			animate(c);
			
			c++;
		}
		else
		{ 

			clearInterval(id);
			alert("counter stopped");
			return;
		}
	},1000);

};

function counter3(t){
let c=1;
	let id=setInterval(function(){
		if(c<=t){
			animate(c);
			
			c++;
		}
		else
		{ 

			clearInterval(id);
alert("counter stopped");
			return;
		}
	},1000);

};
function counter4(t){
let c=1;
	let id=setInterval(function(){
		if(c<=t){
			animate(c);
			
			c++;
		}
		else
		{ 

			clearInterval(id);
alert("counter stopped");
			return;
		}
	},1000);

};
function counter5(t){
let c=1;
	let id=setInterval(function(){
		if(c<=t){
			animate(c);
			
			c++;
		}
		else
		{ 

			clearInterval(id);
			alert("counter stopped");
			return;
		}
	},1000);

};
// declaring animate function
function animate(c){
	if(c>0 && c<=9){
	next.classList.add("trans");
	next.innerText=c;
	setTimeout(function(){
		curr.innerText=c;
		next.classList.remove("trans");
},500);
}
else if(c>=10 && c<=99)
{
let t=c.toString();
next.classList.add("trans");
	next.innerText=t.charAt(1);
	if(t.charAt(1)==0){
next2.classList.add("trans");
	next2.innerText=t.charAt(0);}
	setTimeout(function(){
		// let p=c.toString();
	curr.innerText=t.charAt(1);
		next.classList.remove("trans");
		curr2.innerText=t.charAt(0);
		next2.classList.remove("trans");
},500);
}

else if(c>=100 && c<=999)
{
let t=c.toString();
	next.innerText=t.charAt(2);
	next.classList.add("trans");
	if(t.charAt(2)==0){
	next2.innerText=t.charAt(1);
next2.classList.add("trans");}
	if(t.charAt(1)==0 && t.charAt(2)==0){
	next3.innerText=t.charAt(0);
next3.classList.add("trans");}
	setTimeout(function(){
	curr.innerText=t.charAt(2);
		next.classList.remove("trans");
	if(t.charAt(2)==0){
		curr2.innerText=t.charAt(1);
		next2.classList.remove("trans");
	}
	if(t.charAt(1)==0 && t.charAt(2)==0){
		curr3.innerText=t.charAt(0);
		next3.classList.remove("trans");}
},500);
}
else if(c>=1000 && c<=9999)
{
let t=c.toString();
next.classList.add("trans");
	next.innerText=t.charAt(3);
	if(t.charAt(3)==0){
next2.classList.add("trans");
	next2.innerText=t.charAt(2);}
	if(t.charAt(2)==0 && t.charAt(3)==0){
	next3.classList.add("trans");
	next3.innerText=t.charAt(1);}
	if(t.charAt(1)==0 && t.charAt(2)==0 && t.charAt(3)==0){
	next4.classList.add("trans");
	next4.innerText=t.charAt(0);}
	setTimeout(function(){
		curr.innerText=t.charAt(3);
			next.classList.remove("trans");
			if(t.charAt(3)==0){
		curr2.innerText=t.charAt(2);
		next2.classList.remove("trans");}
		if(t.charAt(2)==0 && t.charAt(3)==0){
		curr3.innerText=t.charAt(1);
		next3.classList.remove("trans");}
		if(t.charAt(1)==0 && t.charAt(2)==0 && t.charAt(3)==0){
		curr4.innerText=t.charAt(0);
		next4.classList.remove("trans");}
},500);
}
}

			btn.addEventListener("click",function(){
let t=inp.value;
// counter1(t);
if(t>0 && t<=9)
{
	counter1(t);
}
else if(t>=10 && t<=99)
{
	counter2(t);
}
else if(t>=100 && t<=999)
{
	counter3(t);
}
else if(t>=1000 && t<=9999)
{
	counter4(t);
}
else if(t>=10000 && t<=99999)
{
	counter5(t);
}
});