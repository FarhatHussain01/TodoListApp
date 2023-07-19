const addTodoBtn = document.getElementById("add-todo-btn");
const todoItem = document.getElementById("todo-item");
const list = document.getElementById("list");
const deleteAllBtn = document.getElementById("del-all-btn");


const addTodo = (e) => {
    e.preventDefault();
    list.className = "relative"
    const li = document.createElement("li");
    const liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);
    li.className = "flex flex-col sm:flex-row justify-between py-3 px-4 border-b border-gray-300"; // Updated class for li

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex items-center justify-center gap-2"; // New class for button container

    const deleteBtn = document.createElement("button");
    const delText = document.createTextNode("Delete");
    deleteBtn.appendChild(delText);
    deleteBtn.setAttribute("id", "del-btn");
    deleteBtn.setAttribute("onclick", "deleteItems(this)");
    deleteBtn.className = "px-3  py-2 bg-red-500 text-white rounded  right-1 absolute"; // Updated class for delete button
    buttonContainer.appendChild(deleteBtn);

    const updateBtn = document.createElement("button");
    const updateText = document.createTextNode("Update");
    updateBtn.appendChild(updateText);
    updateBtn.setAttribute("id", "update-btn");
    updateBtn.setAttribute("onclick", "updateItems(this)");
    updateBtn.className = "px-3 py-2 bg-blue-500 text-white rounded  absolute right-20"; // Updated class for update button
    buttonContainer.appendChild(updateBtn);

    li.appendChild(buttonContainer);
    list.appendChild(li);
    todoItem.value = "";
};

addTodoBtn.addEventListener("click", addTodo);

const deleteItems = (e) => {
    e.parentNode.parentNode.remove(); // Updated parent node selection
};

const deleteAll = () => {
    list.innerHTML = "";
};

const updateItems = (e) => {
    let value = e.parentNode.parentNode.firstChild.nodeValue; // Updated parent node selection
    let updatedValue = prompt("Enter the updated text", value);
    e.parentNode.parentNode.firstChild.nodeValue = updatedValue; // Updated parent node selection
};
