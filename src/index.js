
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    return matrix.reduce((prev, curr, index) => {
        if (index === 1 || index % 2 !== 0) {
            return [...prev, ...curr.reverse()];
        } else {
            return [...prev, ...curr];
        }
    });
};

