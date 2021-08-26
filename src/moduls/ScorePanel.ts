// 记分牌
export default class ScorePanel {
    score: number = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    //
    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 2) {
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分
    addScore() {
        // this.score ++ ;
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    // 升级
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

