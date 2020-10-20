let button = document.querySelector('.button');
let table = document.querySelector('table');//создаем переменную которая находит таблицу
let inversion = document.querySelector('.inversion');

let creatArray = function (ValueFromInput) {//создаем массив чисел
    array = [];
    for (let i = 1; i <= ValueFromInput; i++) {
        array2 = [];
        for (let j = 1; j <= ValueFromInput; j++) {
            if (i === j) {
                array2[j - 1] = 1;
            } else {
                array2[j - 1] = 0;
            }
        }
        array[i - 1] = array2;
    }
}

let showArray = function (input) {//создаем таблиццу и заполняем ее из массива
    for (let i = 1; i <= input; i++) {
        let line = document.createElement("tr");//создаем строку
        for (let j = 1; j <= input; j++) { //цикл создает ячейки изаполняет их массива
            let cell = document.createElement("td");//создаем ячейку
            if (inversion.checked) {
                cell.innerText = array[input - i][j - 1];//записываем в ячейку текст из массива
            } else {
                cell.innerText = array[i - 1][j - 1];
            }
            cell.className = "td";
            line.appendChild(cell);//добавляем в строку ячейку
        }
        table.appendChild(line);//добавляем  строку в таблицу
    }
}

button.onclick = function () {//функция отслеживает нажати кнопки
    table.innerHTML = '';//очищает таблицу
    let input = document.querySelector('.input').value;//присваивает значение в поле ввода переменной input
    creatArray(input);//создаем массив чисел
    showArray(input);//создаем таблицу
    document.querySelector('.input').value = '';//очищает поле ввода
}

