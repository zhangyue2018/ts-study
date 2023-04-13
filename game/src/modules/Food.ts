// 定义食物类Food
class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {
        // 生成一个随机位置
        // 食物的左边位置最小是0，最大是290
        // 蛇移动一次是一格，也就是10px
        let random1 = Math.random();
        let random2 = Math.random();
        let top = Math.round(random1 * 29) * 10;
        let left = Math.round(random2 * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}

export default Food;