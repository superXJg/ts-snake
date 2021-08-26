export default class Snake {
    head: HTMLElement;
    bodies: HTMLCollection; // 集合 
    element: HTMLElement;
    constructor() {
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake').getElementsByTagName('div');
        this.element = document.getElementById('snake');
    }

    // 
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        if (this.X == value) return;
        if (value < 0 || value > 290) {
            throw Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            console.log('水平方向掉头');
            // 这时候要让他 继续按之前的方向走
            if (value > this.X) {
                // 向右 此时发生掉头  让它继续往左走
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px'
        // 左移动时 不能向左掉头
        this.checkHeadBody()
        
    }

    set Y (value: number) {
        if (this.Y == value) return;
        if (value < 0 || value > 290) {
            throw Error('蛇撞墙了')
        }
        // 左移动时 不能向左掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            console.log('水平方向掉头');
            // 这时候要让他 继续按之前的方向走
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }

    moveBody() {
        // 将后面的身体设置为前边的身体
        // 第四节 等于第三节的位置
    //  遍历
        for(let i = this.bodies.length -1; i>0; i--) {
            // 获取前边身体位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 设置到当前身体
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody () {
        // 获取所有的身体  检查是否和 蛇头的坐标 发生重叠
        for(let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 说明撞到身体
                throw new Error('撞到自己了')
            }
        }
    }
}