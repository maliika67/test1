

//5


// const xhr = new XMLHttpRequest();
//
//
// const url = "";
//
//
// xhr.open("GET", url, true);
//
//
// xhr.onreadystatechange = function () {
//
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         try {
//             const response = JSON.parse(xhr.responseText);
//             console.log("Полученные данные:", response);
//         } catch (error) {
//             console.error("Ошибка при обработке ответа:", error);
//         }
//     }
// };
//
// xhr.send()

//Задача 1

const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
};

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));
console.log(containsOnlyDigits(""));
console.log(containsOnlyDigits("000"));

//Задача 2

const EverySecond = () => {
    let seconds = 1;
    setInterval(() => {
        console.log(`Прошла секунда // ${seconds}`);
        seconds++;
    }, 1000);
};

EverySecond();

//Задача 4

const block = document.getElementById('colorBlock');


block.addEventListener('click', () => {
    block.classList.toggle('active-color');
});

//Задача 3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
            console.log("Счет завершен.");
        }
        i++;
    }, 1000);
};
count()

