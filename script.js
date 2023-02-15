var inputElement = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function addtoList(){
    if(inputElement.value){
    var li = document.createElement("li");
    li.textContent= inputElement.value;
    ol.appendChild(li);
    inputElement.value= "";
    }
}

btn.addEventListener("click", addtoList);
