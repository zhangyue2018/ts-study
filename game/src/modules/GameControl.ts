import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl {
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 创建一个属性，存储按键的方向
    direction: string = 'Right';
    // 创建一个属性用来记录游戏是否结束
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    /**
     * 
     * event.key:
     * chrome        ie
     * ArrowUp     Up
     * ArrowDown   Down
     * ArrowLeft   Left
     * ArrowRight  Right
     */
    keydownHandler(event: KeyboardEvent) {
        console.log(event.key);
        this.direction = event.key;
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    run() {
        let X: number = this.snake.X;
        let Y: number = this.snake.Y;
        switch(this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        if(this.checkEat(X, Y)) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch(error) {
            this.isLive = false;
            alert((error as Error).message + 'Game Over!');
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 50);
    }

    checkEat(x: number, y: number) {
        return x === this.food.X && y === this.food.Y;
    }

}

export default GameControl;