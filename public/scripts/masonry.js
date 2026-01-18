const container = document.querySelector(".tasks-container");
const tasks = document.querySelectorAll(".task-item");


const resize = function() {
    tasks.forEach((task) => {
    const height = task.firstElementChild.clientHeight; 
    console.log(height);
    const span = Math.ceil(height/(10+10));
    console.log(span);
    task.style.gridRowEnd = `span ${span}`;
})  
}

resize();
window.addEventListener("resize", resize)



