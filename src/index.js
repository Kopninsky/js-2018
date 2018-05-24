/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(fn(array[i], i, array));
    }

    return result;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {

    var previousValue;

    if (initial === undefined) {
        previousValue = array[0];

        for (var i = 1; i < array.length; i++) {

            previousValue = fn(previousValue, array[i], i, array);
        }
    } else {
        previousValue = initial;

        for (i = 0; i < array.length; i++) {
            previousValue = fn(previousValue, array[i], i, array);
        }
    }

    return previousValue;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {

    return Object.keys(obj).map(function (prop) {
        return prop.toUpperCase();
    })
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    var result = [];

    if (from < 0) {
        from = array.length + from;
    }

    if (to < 0) {
        to = array.length + to;
    }

    if (to > array.length) {
        to = array.length;
    }

    if (to < 0) {
        return [];
    }

    if (from < 0 && array.length + from < 0) {
        from = 0;
    }
    // копирует от from до to не включая to
    if (from !== undefined && to !== undefined && from >= 0 && to >= 0) {
        for (var i = from; i < to; i++) {
            result.push(array[i]);
        }

        return result;
    } else if (from !== undefined && to === undefined) {
        for (i = from; i < array.length; i++) {
            result.push(array[i]);
        }

        return result;
    } else if (from === undefined && to === undefined) {

        return array;

    }
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value * value;

            return true;
        }
    });
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};