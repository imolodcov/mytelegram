let add__button = document.querySelector('.add__button');
let add__input = document.querySelector('.add__input');
let find__button = document.querySelector('.find__button');
let find__input = document.querySelector('.find__input');
let table = document.querySelector('.table');//создаем переменную которая находит таблицу
let list = [];

let dell = function (id) {
    table.innerHTML = '';//очищает таблицу
    list.forEach(function (value, index, array) {//перебор массива
        if (index === id) {
            list.splice(index, 1)//удаляем элемент массива
        }
    })
    create_table();//перерисовываем таблицу
}

let create_table = function () {//создаем таблиццу и заполняем ее из массива
    let header = document.createElement("th");
    header.innerText = 'Список';
    header.className = "table";
    table.appendChild(header);
    list.forEach(function (value, index, array) {
        let line = document.createElement("tr");//создаем строку
        let cell = document.createElement("td");//создаем ячейку
        let button = document.createElement("button");//создам кнопку
        button.className = "del";//присваивае стиль кнопке
        button.id = index;//присваиваем индекс кнопке
        button.innerHTML = '&#10008'; //записываем в кнопку крестик
        cell.innerText = value;//записываем в ячейку текст из массива
        cell.className = "td";//присваиваем ячейке класс
        line.appendChild(cell);//добавляем в строку ячейку
        line.appendChild(button);//добавляем в строку кнопку
        table.appendChild(line);//добавляем  строку в таблицу
        document.getElementById(index).addEventListener('click', function () {           //отслеживаем нажатие каждой новой кнопки
            dell(index);//вызов функции удаления
        })

    })


}

let compare_table = function () {//создаем таблиццу и заполняем ее из массива
    let header = document.createElement("th");
    header.innerText = 'Список';
    header.className = "table";
    table.appendChild(header);
    let comparate = find__input.value
    list.forEach(function (value, index, array) {
        let line = document.createElement("tr");//создаем строку
        let cell = document.createElement("td");//создаем ячейку
        let button = document.createElement("button");
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

find__button.onclick = function () {//функция отслеживает нажати кнопки
    if (find__input.value === "") {
        return
    } else {
        table.innerHTML = '';//очищает таблицу
        compare_table();
        find__input.value = '';//очищает поле ввода


    }
}

add__button.onclick = function () {//функция отслеживает нажати кнопки
    if (add__input.value === "") {
        return
    } else {
        table.innerHTML = '';//очищает таблицу
        list.push(add__input.value);
        add__input.value = '';//очищает поле ввода
        create_table();
        // console.log(list);
    }
}





