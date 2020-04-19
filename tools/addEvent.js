let appendEle = (parent, tag, text, attr) => {
    let tag1 = document.createElement(`${tag}`);
    tag1.innerHTML = text;
    for(let i in attr){
        tag1.setAttribute(i, attr[i]);
    }
    parent.appendChild(tag1);
    return tag1;
}