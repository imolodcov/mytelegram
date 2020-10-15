let table = document.querySelector('table');//создаем переменную которая находит таблицу
let line = document.createElement("tr");//создаем строку
let oddNumer = function (someNumber) {
    return (someNumber % 2 == 0) ? false : true;
}
for (let i = 0; i < 200; i++) {
    if (oddNumer(i)) {
        let cell = document.createElement("td");//создаем ячейку
        cell.className = "td";//присваиваем ячейке класс
        cell.innerText = i;//записываем в ячейку текст
        line.appendChild(cell);//добавляем в строку ячейку
    }
}
table.appendChild(line);//добавляем  строку в таблицу

