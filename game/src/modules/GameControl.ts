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
    isLive: boolean = false;

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

        this.snake.X = X;
        this.snake.Y = Y;

        console.log('---run----');

        this.isLive && setTimeout(this.run.bind(this), 800 - (this.scorePanel.level - 1) * 50);
    }

}

export default GameControl;