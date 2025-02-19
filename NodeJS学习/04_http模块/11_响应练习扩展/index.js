//获取所有的td
const tds = document.querySelectorAll('td');
//遍历td
tds.forEach(item => {
    item.onclick = function () {
        this.style.background = '#222';
    }
})