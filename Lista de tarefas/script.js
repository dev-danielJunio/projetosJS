window.onload = function () {

    let taskButton = document.querySelector('.addBtn');
    let taskInput = document.querySelector('.inputTask')
    let TaskUl = document.querySelector('.lis-work')

    taskButton.addEventListener('click', function () {
        createTask()
        clearInput()
    });

    //enter recarrega a pagina
    taskInput.addEventListener("keypress", function (e) {
        if (e.keyCode == 13) {
            createTask()
            clearInput()
        }
    })

    function clearInput() {
        taskInput.value = "";
    }

    function createTask() {
        let work = document.createElement("div");
        work.classList.add("work")
        TaskUl.insertBefore(work, TaskUl.firstChild);
        creatText(work)
        creatDelete(work)
    }

    function creatCheck(work) {
        let check = document.createElement("input")
        check.type = "checkbox"
        check.classList.add("work-check")
        work.appendChild(check)

        let text = work.querySelector('.work-text')
        check.addEventListener('change', function () {  
            if (this.checked) {
                text.style.textDecoration = "line-through"
                text.style.color = "gray"
            } else {
                text.style.color = "black"
                text.style.textDecoration = ""
            }
        })
    }

    function creatText(work) {
        let text = document.createElement("div")
        text.classList.add("work-text")
        text.innerHTML = taskInput.value
        work.appendChild(text)

        creatCheck(work);
    }

    function creatDelete(work){
        let remove = document.createElement("div")
        remove.classList.add("work-delete")
        remove.innerHTML = '<span class="material-symbols-outlined">delete</span>';
        work.appendChild(remove)
        remove.addEventListener('click', function () {
            work.parentNode.removeChild(work);
        });
    }
            
}
