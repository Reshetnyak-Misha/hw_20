alert("Игра Угадай число");
alert("Вам нужно угадать число от 0 до 10, правила достаточно лёгкие!");

if (confirm("Желаете испытать удачу?")) {
    alert("Тогда удачи вам");
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (prompt() == randomNumber) {
        alert("Поздравляю");
    } else if (isNaN(confirm) === true) {
        alert("Увы, это не число");
    } else {
        alert("Увы, правильное число: " + randomNumber);
    }
} else {
    alert("Ну, и ладно. До свидания(")
}






