let rank = (arr, active) => {
    arr.sort((a, b) => {
        switch(active){
            case "asc":
                return a - b;
                break;
            case "desc":
                return b - a;
                break;
        }
    })
}
let m = [1,5,4,8,9,6,2,10];
rank(m, "asc");
console.log(m);