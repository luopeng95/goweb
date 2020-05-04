let find1 = (arr1, arr2) => {
    arr1.sort((a, b) => a - b);
    for (let i = 0; i < arr1.length; ++i) {
        for (let j = 0; j < arr2.length; ++j) {
            if (arr1[i] === arr2[j]) {
                return arr1[i];
            }
        }
    }
    return null;
}
const a = [3, 2, 1, 8, 9];
const b = [6, 7, 2, 5, 1];
console.log(find1(a, b));