let n = JSON.parse('[{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}]', (k, v) => {console.log(k);return v});
console.log(n);