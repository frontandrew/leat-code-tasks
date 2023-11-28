/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1
};


console.log('RESULT:', {
    'ARRAY': [1, 2, 3].last(),
    'ONE': [1].last(),
    'EMPTY': [].last(),
});
