const timeBlock = document.querySelector(".time");
moment.locale('ru');
const timeTomorrow = moment().add(1, "days");
timeBlock.innerHTML = timeTomorrow.format("DD MMMM YYYY, HH:mm ");