/**
 * 
 * @param {num} time :单位是秒
 */
let transitionTime = (time)=> {
    time = parseInt(time);
    let h = (parseInt(time / 3600) + "").length === 1 ? "0" + parseInt(time / 3600) : parseInt(time / 3600);
    let m = (parseInt(time / 60) % 60 + "").length === 1 ? "0" + parseInt(time / 60) % 60 : parseInt(time / 60) % 60;
    let s = (time % 60 + "").length === 1 ? "0" + time % 60 : time % 60;
    return `${h}:${m}:${s}`
}