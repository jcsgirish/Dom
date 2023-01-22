var form = document.getElementById('addForm');
var item = document.getElementById('items');
var itemList=document.getElementsByClassName("list-group-item")
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
item.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


for(let i=0;i<itemList.length;i++)
{
  var  editBtn =document.createElement('button')
  editBtn.className='btn btn-sm float-right editBtn';
  editBtn.appendChild(document.createTextNode('EDIT'))

  itemList[i].appendChild(editBtn)


}
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var otheritem = document.getElementById('otheritem').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(otheritem))

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
// Append button to li
  li.appendChild(deleteBtn);
  

  //edit button

  const editBtn =document.createElement('button')
  editBtn.className='btn btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('EDIT'))

  // Append li to list
  item.appendChild(li);
 
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      item.removeChild(li);
    }
  }
}


// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = item.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    const otheritem =item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || otheritem.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}