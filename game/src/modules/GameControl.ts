import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl {
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 创建一个属性，存储按键的方向
    direction: string = '';

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
    }

}

export default GameControl;