function _radomPlate(){
    let letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9];
    let m = "";
    for (let i = 0; i < 5; ++i) {
        let n = Math.floor(Math.random() * letter.length);
        m += letter[n];
    }
    return `粤B` + m;
}