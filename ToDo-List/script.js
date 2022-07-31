
function onRemove(e){
    e.target.parentElement.remove()
}
/*function onDone(){
    document.getElementsByTagName("span").style.background = "green";
}*/
function listOfItems(){
    var catchItem = document.getElementById('item').value;
    let list = document.getElementById("myList");
    let li = document.createElement("li");

    let title = document.createElement("span");
    title.innerText = catchItem;
    title.setAttribute("id", "titleItem");

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "x";
    removeBtn.setAttribute("id", "removeBtn");
    removeBtn.addEventListener('click', onRemove);

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.setAttribute("id", "doneBtn");
    //doneBtn.addEventListener('click', onDone);

    
    li.appendChild(title);
    li.appendChild(removeBtn);
    li.appendChild(doneBtn);
    
    list.appendChild(li); 
}
function clearList(){
    let list = document.getElementById("myList");
    list.innerHTML = '';
}

