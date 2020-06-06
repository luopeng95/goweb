let App = {
    template:`<div id="app" v-cloak>
    <!-- 输入框 -->
    <div id="to-input">
        <div @click="changeAll" class="selall">v</div>
        <input type="text" placeholder="骚年，你想获得力量吗？" v-model="val" @keyup.enter="save" v-autofores>
        <div class="think">
            <li v-for="(item, index) in thinkWord" :key="index" v-if="index < 5" @click="clickLi($event,item)">
                {{item}}
            </li>
            <!-- {{thinkWord}} -->
        </div>
    </div>
    <!-- 事项展示 -->
    <div class="content">
        <div class="display" v-for="v,i in lists" v-bind:class="condition | hid(v)">
            <div class="dis-radio"><input type="radio" :checked="!v['active']" @click="changeIpt($event,i)"></div>
            <div class="dis-content" :class="{del:!v['active']}">{{v['content']}}</div>
            <div class="lp-dis-del" @click="delIpt($event,i)">x</div>
        </div>
    </div>
    <!-- 下方功能 -->
    <div class="lp-function" v-if="lists.length">
        <div class="lp-fu-num">剩下{{length}}项</div>
        <div class="lp-fn-but">
            <button type="button" :class="{selbut:condition === 'all'}"><a href="#/all">All</a></button>
            <button type="button" :class="{selbut:condition === 'active'}"><a href="#/active">激活</a></button>
            <button type="button" :class="{selbut:condition === 'completed'}"><a href="#/completed">完成</a></button>
        </div>
        <div>
            <div class="delCompleted" v-if="completed" @click="delCompleted">
                清除已完成
            </div>
        </div>
    </div>
    <!-- {{val}} -->
</div>`,
    data() {
        return {
            val: "",
                lists:"",
                all:true,
                condition:"all",
                selBut:"all",
                thinks:"",
        }
    },
    directives:{
        autofores:{
            inserted:function(el){
                el.focus();
            },
            update:function(el,binding){
                // console.log(this);
                if(el.value){
                    // console.log(el);
                    el.focus();
                }
            }
        }
    },
    filters:{
        hid(val1,val2){
            if(val1 === "all"){
                return "look"
            }else if(val1 === "active"){
                if(val2["active"]){
                    return "look"
                }
            }else if(val1 === "completed"){
                if(!val2["active"]){
                    return "look"
                }
            }
        }
    },
    computed: {
        length(){
            let count = 0;
            for(let v of this.lists){
                if(v["active"]){
                    ++count;
                }
            }
            return count;
        },
        completed(){
            // console.log(this.lists,this.length);
            return this.lists.length - this.length;
        },
        thinkWord(){
            let word = this.thinks.filter((e,i,a)=>{
                if(e.indexOf(this.val) !== -1 && this.val){
                    return e;
                }
            })
            // console.log(word);
            return word;
        },

    },
    methods: {
        save(e) {
            // 将val存到本地存储中之后清空
            let value = {
                content: this.val,
                active: true,
            };
            this.saveStorage("add",value);
            this.thinksAdd(this.val);
            this.val = "";
        },
        saveStorage(type,value) {
            // 更改一下逻辑，让增加，修改，删除几个逻辑全部走这里,还要重新获取lists的值
            let todo = localStorage.getItem("toDoList");
            todo = JSON.parse(todo);
            if(type === "add"){
                todo.push(value);
            }else if(type === "change"){
                todo[value]['active'] = !todo[value]['active'];
            }else if(type === "del"){
                todo.splice(value,1);
            }else if(type === "all"){
                for(let v of todo){
                    v['active'] = !this.all;
                }
                this.all = !this.all;
            }else if(type === "delCom"){
                todo = todo.filter((e,i,a)=>{
                    if(e['active']){
                        return e
                    }
                })
            }
            // 重新获取值
            this.lists = todo;
            todo = JSON.stringify(todo);
            localStorage.setItem("toDoList", todo);
        },
        changeIpt(e,i){
            this.saveStorage("change",i);
        },
        delIpt(e,i){
            // 删除选中的数据
            this.saveStorage("del",i)
        },
        changeAll(){
            this.saveStorage("all")
        },
        delCompleted(){
            this.saveStorage("delCom");
        },
        thinksAdd(val){
            let think = localStorage.getItem("thinkList");
            think = JSON.parse(think);
            if(!think.includes(val)){
                think.push(this.val);
            }
            this.thinks = think;
            think = JSON.stringify(think);
            localStorage.setItem("thinkList",think);
        },
        clickLi(e,v){
            this.val = v;
            console.log(this);
        },
        hashChange(){
            // 拿到hash值
            let dress = window.location.hash;
            let reg = /^[#][/](\w+)$/;
            // 判断hash值，如果hash值在范围内就让condition变成对应的值，如果不在范围内就展示首页
            let ary = ['all','active','completed'];
            dress = reg.exec(dress)[1];
            if (ary.includes(dress)){
                this.condition = dress;
            }else{
                window.location.hash = "#/all"
                // this.condition = "all";
            }
        },
    },
    created() {
        // 拿到本地存储里面的数据，如果为空就设置一个空数组进去
        let todo = localStorage.getItem("toDoList");
        if (!todo) {
            todo = JSON.stringify([]);
            localStorage.setItem("toDoList", todo);
        }else{
            todo = JSON.parse(todo);
            this.lists = todo;
        }
        // console.log(this.lists);
        // 拿到联想词数据
        let think = localStorage.getItem("thinkList");
        if (!think) {
            think = JSON.stringify([]);
            localStorage.setItem("thinkList",think);
        }else{
            think = JSON.parse(think);
            this.thinks = think;
        }

        // 判断页面刷新的时候是在哪个页面并做处理
        // let hashChange = ()=>{
        //     // 拿到hash值
        //     let dress = window.location.hash;
        //     let reg = /^[#][/](\w+)$/;
        //     // 判断hash值，如果hash值在范围内就让condition变成对应的值，如果不在范围内就展示首页
        //     let ary = ['all','active','completed'];
        //     dress = reg.exec(dress)[1];
        //     if (ary.includes(dress)){
        //         this.condition = dress;
        //     }else{
        //         this.condition = "all";
        //     }
        // }
        this.hashChange();
        // 监听事件拦截路由
        window.addEventListener("hashchange",this.hashChange);

    },
}