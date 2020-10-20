let button = document.querySelector('.button');
let table = document.querySelector('table');//создаем переменную которая находит таблицу

let oddNumer = function (someNumber) {//проверяем значения вводимые в ячейку на четностьна четность
    return (someNumber % 2 === 0);
}

let creatArray = function (ValueFromInput) {//создаем массив чисел
    array = [ValueFromInput];
    for (let i = 1; i < 2 * ValueFromInput; i++) { //Ячейки таблицы
        if (i <= ValueFromInput) {
            array[i - 1] = i;//добавляем в строку ячейку
        } else {
            array[i - 1] = 2 * ValueFromInput - i;
        }
    }
}

let showArray = function () {
    let line = document.createElement("tr");
    array.forEach(function (value, index, array) {
        let cell = document.createElement("td");
        cell.innerText = value;
        if (oddNumer(value)) {//присваиваем ячейкам класс в зависимости от четности числа записывемого в него
            cell.className = "td td_even";
        } else {
            cell.className = "td";
        }
        line.appendChild(cell);//добавляем в строку ячейк
    })
    table.appendChild(line);//добавляем  строку в таблицу
}

button.onclick = function () {//функция отслеживает нажати кнопки
    table.innerHTML = '';//очищает таблицу
    let input = document.querySelector('.input').value;//присваивает значение в поле ввода переменной input
    creatArray(input);//создаем массив чисел
    showArray(input);//создаем массив чисел
    document.querySelector('.input').value = '';//очищает поле ввода
}
