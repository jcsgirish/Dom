



var items=document.querySelector(".list-group-item")

items.style.backgroundColor="green"

var thirditem=document.querySelector(".list-group-item:nth-child(3)")
thirditem.remove()


var allitems=document.querySelectorAll(".list-group-item")

allitems[1].style.color="green"

var odd = document.querySelectorAll(".list-group-item:nth-child(odd)")

for(var i=1;i<odd.length;i++)

{
    odd[i].style.backgroundColor="green"
}

