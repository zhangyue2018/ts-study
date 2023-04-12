// 定义表示记分牌的类
class ScorePanel {
    score: number = 0;
    level: number = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel = 10, upScore = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if(this.level < this.maxLevel) this.levelEle.innerHTML = ++this.level + '';
    }
}

export default ScorePanel;