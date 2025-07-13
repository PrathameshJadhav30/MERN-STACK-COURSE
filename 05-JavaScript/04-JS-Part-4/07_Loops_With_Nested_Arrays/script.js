const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}]:`, matrix[i][j]);
    }
}
// This will print:
// Element at [0][0]: 1
// Element at [0][1]: 2
// Element at [1][0]: 3
// Element at [1][1]: 4
// Element at [2][0]: 5
// Element at [2][1]: 6