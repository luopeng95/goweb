// import ("./jquery-3.4.1.min.js");
let readJson = (file, callback) => {
    let xmlHttprequest = new XMLHttpRequest();
    let json;
    // console.log(1)
    xmlHttprequest.overrideMimeType("application/json");
    xmlHttprequest.open("Get", file, false)
    xmlHttprequest.onreadystatechange = () => {
        // console.log(xmlHttprequest.status)
        if(xmlHttprequest.readyState === 4 && xmlHttprequest.status === 200){
            // console.log(3)
            callback(xmlHttprequest.responseText);
            // console.log(json);
            // return json;
        }
    }
    xmlHttprequest.send(null);
}
// console.log(readJson("./provinces.json"))