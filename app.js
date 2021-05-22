const addBtn = document.querySelector(".addBtn");
const input = document.querySelector(".input");
const taskContainer = document.querySelector(".task-container");
const mainContainer = document.querySelector(".main-container");
const completedTasks = document.querySelector(".completed");
const tasks = document.querySelector(".tasks");

addBtn.addEventListener("click", (e) => {
    input.style.display = "block";
    mainContainer.style.opacity = 0.8;
    

})
input.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        let taskVal = input.value;
        let task = document.createElement("div");
        task.setAttribute("class", "task");
        task.setAttribute("contenteditable", "true");
        task.innerHTML = `<input type="checkbox" name="" id="checkbox">
        

        <div class="task-desc">
            ${taskVal}
        </div>

        <i class="fas fa-times cross"></i>`
        taskContainer.appendChild(task);
        input.style.display = "none";
        mainContainer.style.opacity = 1;
        input.value = "";
        
    }
    
})

taskContainer.addEventListener("click", (e) => {
    if(e.target.className === "fas fa-times cross"){
        e.target.parentElement.remove();
    }
})

completedTasks.addEventListener("click", () => {
    completedTasks.style.backgroundColor = "#e780b9";
    tasks.style.backgroundColor = "white";
    const allTasks = document.querySelectorAll(".task");
    for(let i = 0 ; i < allTasks.length ; i++){
        if(allTasks[i].children[0].checked == true){

            allTasks[i].style.display = "flex";

        }
        else{

            allTasks[i].style.display = "none";
            
        }
    }
})

tasks.addEventListener("click", () => {
    tasks.style.backgroundColor = "#e780b9";
    completedTasks.style.backgroundColor = "white";
    const allTasks = document.querySelectorAll(".task");
    for(let i = 0 ; i < allTasks.length ; i++){
        
        if(allTasks[i].children[0].checked == false){

            allTasks[i].style.display = "flex";

        }
        else{

            allTasks[i].style.display = "none";
            
        }           
       
    }
})
