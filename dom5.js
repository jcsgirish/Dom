




var newDiv=document.createElement('div')

newDiv.className='hello'

newDiv.id='hello'

newDiv.setAttribute('titile',"hello")

var newDivText=document.createTextNode('hello world')

newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1= document.querySelector("header h1")
container.insertBefore(newDiv,h1)


var li =document.createElement("li");

li.className="list-group-item";

var text=document.createTextNode("hello");

li.appendChild(text);

var parent=document.querySelector("#items");
var child=document.querySelectorAll(".list-group-item");
parent.insertBefore(li,child[0]);
