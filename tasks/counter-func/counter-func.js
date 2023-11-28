/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    const init = typeof n === 'number' ? n : 0
    let iteration = 0
    let count




    return function () {
        
        if (count) {
            count = init
        }
        
        count = init + iteration
        iteration += 1

        return count
    }

}

const value = -2

const counter = createCounter(value)

console.log('RESULT: ', [
    counter(), counter(), counter(), counter()
])
