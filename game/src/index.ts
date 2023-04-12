import "./less/index.less";


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
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}


// 测试代码
const food = new Food();
console.log(food.X, food.Y);
food.change();
console.log(food.X, food.Y);