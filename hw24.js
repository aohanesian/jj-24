`use strict`;

// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
const arr = [`a`, `b`, `c`, `d`];
console.log(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
const arr2 = [2, 5, 3, 9];
let result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr3[1][0]);

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
const obj4 = {js: [`jQuery`, `Angular`], php: `hello`, css: `world`};
console.log(obj4.js[0]);

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
let arr5 = [];
let item = ``;
for (let i = 0; i < 4; i++) {
    item += `x`
    arr5.push(item);
}
console.log(arr5);

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
let arr6 = [];

for (let i = 1; i < 4; i++) {
    let item2 = ``;
    for (let j = 0; j < i; j++) {
        item2 += i;
    }
    arr6.push(item2);
}

console.log(arr6);

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
let arr7 = [];
let elem = `x`;
let fillCount = `5`;

function arrayFill(a, b) {
    for (let i = 0; i < b; i++) {
        arr7.push(a);
    }
    console.log(arr7);
}

arrayFill(elem, fillCount);

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr8Counter = 0;
let sum = 0;

for (let i = 0; i < arr8.length; i++) {
    arr8Counter += arr8[i];
    if (arr8Counter > 10) {
        sum = i;
        break;
    }
}
console.log(sum);

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr9result = [];
let a9 = ``;
for (let i = arr9.length; i < arr9.length; i++) {
    a9 = arr9.pop()
    arr9result.unshift(a9);
}
console.log(arr9);

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let arr10 = [[1, 2, 3], [4, 5], [6]];
let flatArr10 = arr10.flat();
let sum10 = 0;
for (let i = 0; i < flatArr10.length; i++) {
    sum10 += flatArr10[i];
}
console.log(sum10);

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum11 = 0;

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
const flatArr11 = flatten(arr11);
for (let i = 0; i < flatArr11.length; i++) {
    sum11 += flatArr11[i];
}
console.log(sum11);