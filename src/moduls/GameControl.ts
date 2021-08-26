import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

export default class GameControl {
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 记分牌
    scorePanel: ScorePanel;
    // 记录方向
    direction: string = '';

    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.keydownHandler = this.keydownHandler.bind(this);
    }

    // 游戏初始化
    init() {
        // 键盘按下事件
        document.addEventListener('keydown',this.keydownHandler )
        this.run();
    }
    // 按下响应方法
    /*
        ArrowUp  Up
        ArrowDown
        ArrowLeft
        ArrowRight   
    */
    keydownHandler(event: KeyboardEvent) {
        console.log(event.key);
        this.direction = event.key;
    }

    // 创建控制蛇移动的方法
    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        //  上  top减少   下 top 增加
        // ← left 减少   → left 增加
        switch(this.direction) {
            case "ArrowUp":
            case "Up":
                Y -=10;
                break;
            case "ArrowDown":
            case "Down":
                Y +=10;
                break;
            case "ArrowLeft":
            case "Left":
                X -=10
                break;
            case "ArrowRight":
            case "Right":
                X+=10
                break
        } 
        // 检查蛇是否迟到食物
        this.checkEat(X, Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e) {
            alert(e.message + 'GAME OVER');
            this.isLive = false;
        }
        
        this.isLive && setTimeout(this.run.bind(this), 300 - ((this.scorePanel.level - 1) * 30));
    }

    // 检查蛇是否迟到食物
    checkEat(X:number, Y: number) {

        if(X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}