function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

// createCalcFunction(42) // тут мы ничего не получим, когда мы вызываем функцию createCalcFunction она нам вызывает новую функцию.
// получим если сделаем так
const calc = createCalcFunction(42)
calc()
