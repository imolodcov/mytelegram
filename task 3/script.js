let table = document.querySelector('table');//создаем переменную которая находит таблицу
let line = document.createElement("tr");//создаем строку
    for (let i = 0; i < 100; i++) {
        let cell = document.createElement("td");//создаем ячейку
        cell.className = "td";//присваиваем ячейке класс
        cell.innerText = "1";//записываем в ячейку текст
        line.appendChild(cell);//добавляем в строку ячейку
    }
    table.appendChild(line);//добавляем  строку в таблицу

