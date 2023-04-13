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
        this.head.style.left = value + 'px';
    }

    // 设置蛇的Y轴坐标
    set Y(value: number) {
        this.head.style.top = value + 'px';
    }

    // 增加蛇身体的方法
    addBody() {
        // 向element中添加一个div
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }
}

export default Snake;