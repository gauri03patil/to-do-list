function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskValue = taskInput.value.trim();

  if (taskValue !== "") {
    const li = document.createElement("li");
    li.textContent = taskValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}
