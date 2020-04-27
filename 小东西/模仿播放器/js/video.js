let appendEle = (parent, tag, text, attr) => {
    let tag1 = document.createElement(`${tag}`);
    tag1.innerHTML = text;
    for (let i in attr) {
        tag1.setAttribute(i, attr[i]);
    }
    parent.appendChild(tag1);
    return tag1;
}

class VideoFunction {
    constructor(parent) {
        this.parent = parent;
        this.flag = false;      //控制功能区的展示与隐藏
        this.init();
        return this.video;
    }

    init() {
        this.initParent();
        this.getEle();
        this.eventListener();
    }

    initParent() {
        // 添加三个区域
        appendEle(this.parent, "div", "", { "id": "lp-V-top" })
        appendEle(this.parent, "div", "<video src=../source/test.mp4 id=lp-video></video><span class='iconfont iconbilibili lp-bilibili'></span><span class='iconfont iconbilibili-line lp-line'></span>", { "id": "lp-V-middle" })
        appendEle(this.parent, "div", `<div id=lp-progress><div id=lp-progress-div><span id=lp-progress-icon class='iconfont iconbofangqi-AirPlay'></span></div></div><div id=lp-function-zone><li class=lp-zone-li><span class='iconfont iconbofangqi-bofang lp-bofang' id=lp-bofang></span></li><li class=lp-zone-li-t></li><li class=lp-zone-li><span id=lp-volice class='iconfont iconyinliang'><div id='lp-volume'><span id=lp-volume-size>66</span><div id=lp-volume-div><div id=lp-volume-progress><span class='lp-vol'></span></div></div></div></span></li><li class=lp-zone-li><span></span></li><li class=lp-zone-li><span></span></li><li class=lp-zone-li><span></span></li><li class=lp-zone-li><span></span></li><li class=lp-zone-li><span class='iconfont iconquanping1 lp-fullScreen'></span></li></div>`, { "id": "lp-V-bottom" })
    }

    // 获取元素的函数
    getEle() {
        this.lpVBottom = document.getElementById("lp-V-bottom");
        this.video = document.getElementById("lp-video");
        this.lpBoFang = document.getElementById("lp-bofang");
        this.lpSpanTime = document.getElementsByClassName("lp-zone-li-t")[0];
        this.lpProgressZone = document.getElementById("lp-function-zone");
        this.lpProgress = document.getElementById("lp-progress");
        this.lpProgressDiv = document.getElementById("lp-progress-div");
        this.progressIcon = document.getElementById("lp-progress-icon");
        this.lpVolice = document.getElementById("lp-volice");
        this.voliceDiv = document.getElementById("lp-volume");
        this.volumeDiv = document.getElementById("lp-volume-div");
        this.volumeProgress = document.getElementById("lp-volume-progress");
        this.volumeSize = document.getElementById("lp-volume-size");
        this.vloIcon = document.getElementsByClassName("lp-vol")[0];
        this.fullScreen = document.getElementsByClassName("lp-fullScreen")[0];
    }

    // 播放和暂停事件
    pauseAndPlay() {
        this.flag = true;
        if (this.video.paused) {
            this.video.play();
            this.lpBoFang.classList.toggle("iconbofangqi-bofang");
            this.lpBoFang.classList.toggle("iconzanting");
        } else {
            clearInterval(this.timer1);
            this.video.pause();
            this.lpBoFang.classList.toggle("iconbofangqi-bofang");
            this.lpBoFang.classList.toggle("iconzanting");
        }
    }

    // 存放所有的监听事件
    eventListener() {
        // parent点击事件暂停播放
        this.parent.addEventListener("click", (e) => {
            // 监听点击操作的播放和暂停播放事件
            if (e.target.id === "lp-video" || e.target.id === "lp-bofang") {
                this.pauseAndPlay();
            }

        })
        // parent控制功能区的显示与否
        this.parent.addEventListener("mouseover", () => {
            this.lpProgressZone.style.visibility = "visible";
            this.lpProgress.style.visibility = "visible";
            
        })
        this.parent.addEventListener("mouseout", () => {
            if (this.flag) {
                this.lpProgressZone.style.visibility = "hidden";
                this.lpProgress.style.visibility = "hidden";
               
            }
        })
        // video加载成功后加入数字播放进度
        this.video.addEventListener("canplay", () => {
            this.lpSpanTime.innerHTML = `${this.transitionTime(this.video.currentTime)} / ${this.transitionTime(this.video.duration)}`;
        })

        // 更新进度条
        this.video.addEventListener("playing", () => {
            this.timer1 = setInterval(() => {
                // console.log(this.video.currentTime);
                this.lpSpanTime.innerHTML = `${this.transitionTime(this.video.currentTime)} / ${this.transitionTime(this.video.duration)}`;
                // console.log(this.video.currentTime/this.video.duration);
                this.lpProgressDiv.style.width = `${this.video.currentTime / this.video.duration * 100}%`
            }, 60)
        })
        // 图标的move事件
        this.progressIcon.addEventListener("mousedown", (e) => {
            this.oRight = this.lpProgressDiv.getBoundingClientRect().left;
            // 移动事件
            let iconMove = (event) => {
                // console.log(this.oRight);
                let moveX = event.x - this.oRight > this.lpProgress.clientWidth ? this.lpProgress.clientWidth : event.x - this.oRight;
                // 更新播放的时间
                this.video.currentTime = this.video.duration * moveX / this.lpProgress.clientWidth;
                // console.log(this.video.currentTime);
                this.lpProgressDiv.style.width = moveX + "px";
                this.lpSpanTime.innerHTML = `${this.transitionTime(this.video.currentTime)} / ${this.transitionTime(this.video.duration)}`;
            }
            window.addEventListener("mousemove", iconMove);
            window.addEventListener("mouseup", () => {
                window.removeEventListener("mousemove", iconMove);
            });
        })
        // 停止播放的时候修改状态
        this.video.addEventListener("ended", () => {
            console.log(4);
            this.lpBoFang.classList.toggle("iconbofangqi-bofang");
            this.lpBoFang.classList.toggle("iconzanting");
            this.video.src = "";
            this.lpSpanTime.innerHTML = `00:00:00 / 00:00:00`;
        })
        // 进度条点击事件--更新时间进度
        this.lpProgress.addEventListener("click", (e) => {
            // 更新video
            this.oRight = this.lpProgressDiv.getBoundingClientRect().left;
            let time = (e.x - this.oRight) / this.lpProgress.clientWidth;
            this.video.currentTime = this.video.duration * time;
            // 更新进度条
            this.lpProgressDiv.style.width = e.x - this.oRight + "px";
            // 时间区域的更新会在canplay里面自动更新
        })
        // 声音图标的悬浮事件
        this.lpVolice.addEventListener("mouseover", () => {
            this.voliceDiv.style.display = "block";
            this.volumeProgress.style.height = this.volumeDiv.clientHeight * this.video.volume + "px";
            this.volumeSize.innerHTML = `${parseInt(this.video.volume * 100)}`
        })
        // 声音图标的点击事件--静音并且更换声音图标--iconjingyin
        this.lpVolice.addEventListener("click", () => {
            this.video.muted = !this.video.muted;
            this.lpVolice.classList.toggle("iconjingyin");
            this.lpVolice.classList.toggle("iconyinliang");
        })
        // 声音图标的鼠标离开事件
        this.lpVolice.addEventListener("mouseout", () => {
            this.timer2 = setTimeout(() => {
                this.voliceDiv.style.display = "none";
            }, 1000)
        })
        // 声音进度条的鼠标移入事件--事件冒泡后不用设置也会触发声音图标的离开事件
        this.voliceDiv.addEventListener("mouseover", () => {
            clearTimeout(this.timer2);
        })
        // 声音进度条的单击事件阻止事件冒泡变成静音
        this.voliceDiv.addEventListener("click", () => {
            event.stopPropagation();
        })
        // 声音进度条的拖曳事件
        this.vloIcon.addEventListener("mousedown", () => {
            this.volIconTop = this.volumeDiv.getBoundingClientRect().top;
            let moveVolIcon = event => {
                let moveY = event.y - this.volIconTop > 0 ? event.y - this.volIconTop : 0;
                this.volumeProgress.style.height = this.volumeDiv.clientHeight * (1 - moveY / this.volumeDiv.clientHeight) + "px";
                this.video.volume = +(this.volumeProgress.clientHeight / this.volumeDiv.clientHeight).toFixed(2);
                this.volumeSize.innerHTML = `${parseInt(this.video.volume * 100)}`
                event.stopPropagation();
            }
            window.addEventListener("mousemove", moveVolIcon);
            window.addEventListener("mouseup", () => {
                window.removeEventListener("mousemove", moveVolIcon);
            });
        })
        // 声音进度条的点击事件
        this.volumeDiv.addEventListener("click", () => {
            this.volIconTop = this.volumeDiv.getBoundingClientRect().top;
            let moveY = event.y - this.volIconTop > 0 ? event.y - this.volIconTop : 0;
            this.volumeProgress.style.height = this.volumeDiv.clientHeight * (1 - moveY / this.volumeDiv.clientHeight) + "px";
            this.video.volume = +(this.volumeProgress.clientHeight / this.volumeDiv.clientHeight).toFixed(2);
            this.volumeSize.innerHTML = `${parseInt(this.video.volume * 100)}`
        })
        // 全屏图标点击事件--de.webkitRequestFullScreen()
        // 全屏之后的控制台就不是自己写的控制台了
        this.fullScreen.addEventListener("click", () => {
            this.video.webkitRequestFullScreen();
        })
    }

    // 转换时分秒与补零
    transitionTime(time) {
        time = parseInt(time);
        let h = (parseInt(time / 3600) + "").length === 1 ? "0" + parseInt(time / 3600) : parseInt(time / 3600);
        let m = (parseInt(time / 60) % 60 + "").length === 1 ? "0" + parseInt(time / 60) % 60 : parseInt(time / 60) % 60;
        let s = (time % 60 + "").length === 1 ? "0" + time % 60 : time % 60;
        return `${h}:${m}:${s}`
    }

}