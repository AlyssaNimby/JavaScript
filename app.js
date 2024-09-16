const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addList() {
    if(inputBox.value === '') {
        alert("You must write a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveList();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveList();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveList();

    }
}, false);

function saveList() {
    localStorage.setItem("list", listContainer.innerHTML);
}

function displayList(){
    listContainer.innerHTML = localStorage.getItem("list");
}
displayList();
