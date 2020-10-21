const addButton = document.querySelector('.add__button');
const addInput = document.querySelector('.add__input');
const findButton = document.querySelector('.find__button');
const findInput = document.querySelector('.find__input');
const table = document.querySelector('.table');//создаем переменную которая находит таблицу
const list = [];

const dell = function (id) {
    table.innerHTML = '';//очищает таблицу
    const array = list.filter(function (value, index, array) {
        return index !== id;
    })
    console.log(array);
    return (array);
}

const createTable = function (list) {//создаем таблиццу и заполняем ее из массива
    const header = document.createElement("th");
    header.innerText = 'Список';
    header.className = "table";
    table.appendChild(header);
    list.forEach(function (value, index, array) {
        const line = document.createElement("tr");//создаем строку
        const cell = document.createElement("td");//создаем ячейку
        const button = document.createElement("button");//создам кнопку
        button.className = "del";//присваивае стиль кнопке
        button.id = index;//присваиваем индекс кнопке
        button.innerHTML = '&#10008'; //записываем в кнопку крестик
        cell.innerText = value;//записываем в ячейку текст из массива
        cell.className = "td";//присваиваем ячейке класс
        line.appendChild(cell);//добавляем в строку ячейку
        line.appendChild(button);//добавляем в строку кнопку
        table.appendChild(line);//добавляем  строку в таблицу
        document.getElementById(index).addEventListener('click', function () {           //отслеживаем нажатие каждой новой кнопки
            dell(index);
            const list = dell(index);
        })

    })


}

const compareTable = function () {//создаем таблиццу и заполняем ее из массива
    const header = document.createElement("th");
    header.innerText = 'Список';
    header.className = "table";
    table.appendChild(header);
    const comparate = find__input.value
    list.forEach(function (value, index, array) {
        const line = document.createElement("tr");//создаем строку
        const cell = document.createElement("td");//создаем ячейку
        const button = document.createElement("button");
        button.className = "del";
        button.id = index;
        button.innerHTML = '&#10008';
        cell.innerText = value;//записываем в ячейку текст из массива
        if (comparate === value) {
            cell.className = "td td_compare";
        } else {
            cell.className = "td";
        }
        line.appendChild(cell);//добавляем в строку ячейку
        line.appendChild(button);
        table.appendChild(line);//добавляем  строку в таблицу


        document.getElementById(index).addEventListener('click', function () {
            console.log(index);
            dell(index);
        })

    })


}

findButton.onclick = function () {//функция отслеживает нажати кнопки
    if (findInput.value === "") {
        return
    } else {
        table.innerHTML = '';//очищает таблицу
        compareTable();
        findInput.value = '';//очищает поле ввода


    }
}

addButton.onclick = function () {//функция отслеживает нажати кнопки
    if (addInput.value === "") {
        return
    } else {
        table.innerHTML = '';//очищает таблицу
        list.push(addInput.value);
        addInput.value = '';//очищает поле ввода
        createTable(list);
    }
}





