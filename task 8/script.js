const addButton = document.querySelector('.add__button');
const addInput = document.querySelector('.add__input');
const findButton = document.querySelector('.find__button');
const findInput = document.querySelector('.find__input');
const table = document.querySelector('.table');//создаем переменную которая находит таблицу
const list = [];

const dellElement = function (id, arr) {
    const rez = arr.filter(function (value, index, array) {
        return index !== id;
    })
    arr.length = 0;
    rez.forEach(function (value, index, array) {
        arr.push(value)
    })
}

const ButtonDellСlick = function (index, array,) {
    document.getElementById(index).addEventListener('click', function () {
        dellElement(index, array);
        createTable(array);
    })
}

const createTable = function (array) {
    table.innerHTML = '';
    const comparate = findInput.value
    const header = document.createElement("th");
    header.innerText = 'Список';
    header.className = "table";
    table.appendChild(header);
    array.forEach(function (value, index, array) {
        const line = document.createElement("tr");
        const cell = document.createElement("td");
        const button = document.createElement("button");
        button.className = "del";
        button.id = index;
        button.innerHTML = '&#10008';
        cell.innerText = value;
        if (comparate === value) {
            cell.className = "td td_compare";
        } else {
            cell.className = "td";
        }
        line.appendChild(cell);
        line.appendChild(button);
        table.appendChild(line);
        ButtonDellСlick(index, array);
    })

}


findButton.onclick = function () {
    addInput.value = '';
    if (findInput.value === "") {
        return
    } else {
        createTable(list)
        findInput.value = '';
    }
}

addButton.onclick = function () {
    findInput.value = '';
    if (addInput.value === "") {
        return
    } else {
        list.push(addInput.value);
        addInput.value = '';
        createTable(list);
    }
}





