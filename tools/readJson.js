// import ("./jquery-3.4.1.min.js");
let readJson = (file) => {
    let xmlHttprequest = new XMLHttpRequest();
    xmlHttprequest.overrideMimeType("application/json");
    xmlHttprequest.open("Get", file, false)
    xmlHttprequest.onreadystatechange = () => {
        if(xmlHttprequest.readyState === 4 && xmlHttprequest.status === "200"){
            let json = JSON.parse(xmlHttprequest.responseText);
            return json
        }

    }
}
// console.log(readJson("./provinces.json"))