const container = document.querySelector(".tasks-container");
const tasks = document.querySelectorAll(".task-item");


const resize = function() {
    
    const styles = getComputedStyle(container);
    const gap = parseInt(styles.getPropertyValue("gap"));
    const rowHeight = parseInt(styles.getPropertyValue("grid-auto-rows"));

    tasks.forEach((task) => {

        const contentHeight = task.firstElementChild.clientHeight;
        

        const span = Math.ceil(
            (contentHeight + gap) / (rowHeight + gap)
        );
        

        task.style.gridRowEnd = `span ${span}`;

    })

}

resize();
window.addEventListener("resize", resize)



