var box=document.querySelectorAll(".ticToe")
var msg=document.querySelector("#msg")
var h1=document.querySelector("h1")
var count=0
var flag=0
var button=document.querySelector("button")
for(i=0;i<box.length;i++){
	box[i].addEventListener("click",function(){
			if(count%2==0 && this.textContent==""&&flag==0){
				this.textContent="O"
				check(count)
				count++	
			}
			else if(count%2!=0 && this.textContent==""&&flag==0){
				this.textContent="X"
				check(count)
				count++
			}
	})
}


function check(count){
	a=[]
	for(var i=0;i<box.length;i++){
		a.push(box[i].textContent)
	}
	if(a[0]==a[1]&&a[1]==a[2]&&(a[0]=="O"||a[0]=="X")){
		flag=1
		colorChange(count,0,1,2)
	}
	else if(a[3]==a[4]&&a[4]==a[5]&&(a[3]=="O"||a[3]=="X")){
		flag=1
		colorChange(count,3,4,5)	
	}
	else if(a[6]==a[7]&&a[7]==a[8]&&(a[6]=="O"||a[6]=="X")){
		flag=1
		colorChange(count,6,7,8)
	}
	else if(a[0]==a[3]&&a[3]==a[6]&&(a[0]=="O"||a[0]=="X")){
		flag=1
		colorChange(count,0,3,6)
	}
	else if(a[1]==a[4]&&a[4]==a[7]&&(a[1]=="O"||a[1]=="X")){
		flag=1
		colorChange(count,1,4,7)
	}
	else if(a[2]==a[5]&&a[5]==a[8]&&(a[2]=="O"||a[2]=="X")){
		flag=1
		colorChange(count,2,5,8)
	}
	else if(a[0]==a[4]&&a[4]==a[8]&&(a[0]=="O"||a[0]=="X")){
		flag=1
		colorChange(count,0,4,8)
	}
	else if(a[2]==a[4]&&a[4]==a[6]&&(a[2]=="O"||a[2]=="X")){
		flag=1
		colorChange(count,2,4,6)
	}
	else if(count==8&&flag==0){
		msg.textContent="Game Draw"
		msg.style.color="red"
		flag=1
		draw()
	}
}


function colorChange(count,x,y,z){
	if(count%2==0){
		msg.textContent="O - wins"
		msg.style.color="green"
	}
	else{
		msg.style.color="green"
		msg.textContent="X - wins"
	}
	box[x].style.color="green"
	box[y].style.color="green"
	box[z].style.color="green"
	h1.style.background="green"
	button.style.color="green"
}

function draw(){
	for(var i=0;i<box.length;i++){
		box[i].style.color="red"
	}
	h1.style.background="red"
	button.style.color="red"
}

button.addEventListener("mouseover",function(){
	button.style.color="white"
	button.style.background=h1.style.background
})

button.addEventListener("mouseout",function(){
	button.style.color=h1.style.background
	button.style.background="none"
})

button.addEventListener("click",function(){
	reset()
})

function reset(){
	flag=0
	count=0
	h1.style.background="steelblue"

	for(var i=0;i<box.length;i++){
		box[i].textContent=""
		box[i].style.color="white"
	}
	msg.textContent=""
}




