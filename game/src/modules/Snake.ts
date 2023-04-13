class Snake {
    // 蛇头元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div')!;
    }

    // 获取蛇的X轴坐标
    get X() {
        return this.head.offsetLeft;
    }
    // 获取蛇的Y轴坐标
    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇的X轴坐标
    set X(value: number) {
        if(this.X === value) return; 
        if(value < 0 ||  value > 290)
            throw new Error('蛇撞墙了!');
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }

    // 设置蛇的Y轴坐标
    set Y(value: number) {
        if(this.Y === value) return;
        if(value < 0 || value > 290)
            throw new Error('蛇撞墙了!');
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    // 增加蛇身体的方法
    addBody() {
        // 向element中添加一个div
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }

    // 移动身体
    moveBody() {
        /**
         * 将后边的身体设置为前边身体的位置
         */
        for(let i=this.bodies.length - 1; i>0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    // 检查蛇头是否撞到身体
    checkHeadBody() {
        for(let i=1; i<this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            // 进入判断说明蛇头撞到了身体，游戏结束
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了！');
            }
        }
    }
}

export default Snake;