// function count(start, end) {
//     if (start > end) {
//         console.log('⛔Ошибка! Счёт невозможен.')
//     } else if (start === end) {
//         console.log('⛔️ Ошибка! Нечего считать')
//     } else {
//         console.log('🏁Oтсчёт начат')
//         for (let i = start; i <= end; i++){
//             console.log (i)
//         }
//     }
// }
// count(5,15);

function countAdvanced(start, end, div) {
    if (arguments.length !== 3) {
        throw new Error("Передайте три аргумента")
    }

    if (start > end) {
        console.log("⛔️ Ошибка! Счёт невозможен.");

    } else if (start === end) {
        console.log("Ошибка! Нечего считать.");
    } else {
        console.log("🏁 Отсчёт начат.");
        for (let i = start; i <= end; i++) {
            if (i % div === 0) {
                console.log(i)
            }
        }
        console.log("Отчёт завершен.");
    }
}
countAdvanced(5,20, 2, );

