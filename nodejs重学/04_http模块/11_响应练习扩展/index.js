//获取所有的td元素
let tds = document.querySelectorAll('td');

//遍历td元素，设置内容
tds.forEach(item => {
    item.onclick = function () {
        this.style.background = '#222';
    }
})