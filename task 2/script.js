let button = document.querySelector('.button');//создаем переменную которая находит кнопку
let figure = document.querySelector('.figure');//создаем переменную которая находит блок с записаным числом
score = figure.innerHTML;// извлекаем текстовое значение из блока
score = Number.parseInt(score);//преобразовываем текстовое значение из блока в числовое
button.onclick = function () {//функция отслеживает нажати кнопки
    score++;//добавляем к числовому значению 1
    figure.textContent = score; //возвращаем увеличенное значение в блок с записанным числом
}