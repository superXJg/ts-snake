//定义食物类 Food
export default class Food {
    // 定义一个属性标是十五所对应的元素
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('food')
    }

    // 定义获取食物x坐标
    get X() {
        return this.element.offsetLeft
    }

    get Y() {
        return this.element.offsetTop
    }

    // 修改食物的位置
    change() {
        // 生成随机位置
        // [0,290] 移动一次必须是10倍数
        // this.element.style.left = x
        // this.element.style.top = x
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}