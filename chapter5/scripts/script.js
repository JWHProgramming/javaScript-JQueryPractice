var list = document.getElementsByTagName("ul")[0];

function addItemLast(){

    var newItemLast = document.createElement('li');
    newItemLast.className = 'hot';
    var newTextLast = document.createTextNode('Cream');
    newItemLast.appendChild(newTextLast);

    list.appendChild(newItemLast);


}

function addItemFirst(){
    var newItemFirst = document.createElement('li');
    newItemFirst.className= 'hot';
    var newTextFirst = document.createTextNode('cream');
    newItemFirst.appendChild(newTextFirst);

    list.insertBefore(newItemFirst, list.firstChild);
}

var listItems = document.querySelectorAll('li');

var i = 0;
for(i = 0; i < listItems.length; i++){
    listItems.item(i).className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;