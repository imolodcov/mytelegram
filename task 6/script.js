let button = document.querySelector('.button');
let table = document.querySelector('table');//создаем переменную которая находит таблицу
let cells = function (input) {//функция создает таблицу и записывает в нее числа
    let line = document.createElement("tr");//создаем строку
    for (let i = 1; i <= input; i++) { //Ячейки первой половины таблицы
        let cell = document.createElement("td");//создаем ячейку
        if (oddNumer(i)) {//присваиваем ячейкам класс в зависимости от четности числа записывемого в него

            cell.className = "td td_even";
        } else {
            cell.className = "td";
        }
        cell.innerText = i;//записываем в ячейку текст
        line.appendChild(cell);//добавляем в строку ячейку
    }
    for (let j = --input; j >= 1; --j) {//Ячейки второй половины таблицы
        let cell = document.createElement("td");//создаем ячейку
        if (oddNumer(j)) {//присваиваем ячейкам класс в зависимости от четности числа записывемого в него
            cell.className = "td td_even";
        } else {
            cell.className = "td";
        }
        cell.innerText = j;//записываем в ячейку текст
        line.appendChild(cell);//добавляем в строку ячейку
    }

    table.appendChild(line);//добавляем  строку в таблицу
}
let oddNumer = function (someNumber) {//проверяем значения вводимые в ячейку на четностьна четность
    return (someNumber % 2 === 0);
}
button.onclick = function () {//функция отслеживает нажати кнопки
    table.innerHTML = '';//очищает таблицу
    let input = document.querySelector('.input').value;//присваивает значение в поле ввода переменной input
    cells(input); //создает таблицу
    document.querySelector('.input').value = '';//очищает поле ввода
}

