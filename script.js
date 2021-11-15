const formSearch = document.querySelector("#form-search");
const list = document.querySelector("#todo");

const addForm = document.querySelector("#add-form");

const tasks = [];

const generateTemp = () => {
    let html = '';
    tasks.forEach(task => {
        html += `
        <li id="${task.id}">
            <span>${task.todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `;
    });

    list.innerHTML = html;
};

const deleteTodos = e => {
    if (e.target.classList.contains('delete'))
        e.target.parentElement.remove();
}

const filterTodos = (term) => {

    const filteredTasks = Array.from(list.children);

    filteredTasks.forEach(task => {
        console.log(task.innerText);
        if (task.innerText.toLowerCase().includes(term)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });

}

const submitHandler = (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo !== '') {
        const id = Math.round(Math.random() * 1000000);
        const taskObj = {
            id: id,
            todo: todo
        };
        tasks.push(taskObj);
        generateTemp();
        addForm.reset();
    }
};

addForm.addEventListener('submit', submitHandler);
list.addEventListener('click', deleteTodos);
formSearch.search.addEventListener('input', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});