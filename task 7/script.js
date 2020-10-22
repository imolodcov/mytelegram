const button = document.querySelector('.button');
const table = document.querySelector('table');
const inversion = document.querySelector('.inversion');

const creatArray = function (ValueFromInput) {
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
    return (array)
}

const showArray = function (array) {
    array.forEach(function (value, index, array) {
        const line = document.createElement("tr")
         if (inversion.checked){
             value.reverse()
         }
        value.forEach(function (value, index, array) {
            const cell = document.createElement("td");
            cell.innerText = value;
            cell.className = "td";
            line.appendChild(cell);
        })
        table.appendChild(line);
    })
}

button.onclick = function () {
    table.innerHTML = '';
    const inputValue = document.querySelector('.input').value;
    const array = creatArray(inputValue);
    showArray(array);
    document.querySelector('.input').value = '';
}

