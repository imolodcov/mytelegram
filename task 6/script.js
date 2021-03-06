const button = document.querySelector('.button');
const table = document.querySelector('table');
const oddNumer = function (someNumber) {
    return (someNumber % 2 === 0);
}

const createArray = function (ValueFromInput) {
    arr = [];
    for (let i = 1; i < 2 * ValueFromInput; i++) {
        if (i <= ValueFromInput) {
            arr[i - 1] = i;
        } else {
            arr[i - 1] = 2 * ValueFromInput - i;
        }
    }
    return (arr);
}

const showArray = function (array) {
    const line = document.createElement("tr");
    array.forEach(function (value, index, array) {
        const cell = document.createElement("td");
        cell.innerText = value;
        if (oddNumer(value)) {
            cell.className = "td td_even";
        } else {
            cell.className = "td";
        }
        line.appendChild(cell);
    })
    table.appendChild(line);
}

button.onclick = function () {
    table.innerHTML = '';
    const ValueFromInput = document.querySelector('.input').value;
    const array = createArray(ValueFromInput);
    showArray(array);
    document.querySelector('.input').value = '';
}
