(function (window, undefined) {
    function Game(map){
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.start = function () {
        this.food.render(this.map);
        this.food.render(this.map);
        this.food.render(this.map);
        this.snake.render(this.map);
        // 开启定时器
        runSnake();
        // 绑定监听事件
        bindKey();
    };

    // 定时器每隔150ms重新渲染一次，把方向和其他要改变的呈现出
    function runSnake() {
        var timer = setInterval(function () {
            that.snake.move();
            that.snake.remove(that.map);
            that.snake.render(that.map);
            var maxX = that.map.offsetWidth;
            var maxY = that.map.offsetHeight;
            var headX = that.snake.body[0].x * that.snake.width;
            var headY = that.snake.body[0].y * that.snake.height;
            for (var i = 0; i < that.food.elements.length ; i++) {
                // elements里面存放的是div元素，不是食物对象，不能用x，y属性来获取某一个食物位置
                if (that.food.elements[i].offsetLeft === headX && that.food.elements[i].offsetTop === headY) {
                    that.food.remove(that.map, i);
                    that.food.render(that.map);

                    var last = that.snake.body[that.food.elements.length - 1];
                    that.snake.body.push(
                        {
                            x : last.x,
                            y : last.y,
                            color : last.color
                        }
                    );
                }
            }

            if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                clearInterval(timer);
                alert("Game over!");
            }
        }, 150);
    }

    function bindKey() {
        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = "left";
                    break;
                case 38:
                    that.snake.direction = "top";
                    break;
                case 39:
                    that.snake.direction = "right";
                    break;
                case 40:
                    that.snake.direction = "bottom";
                    break;
            }
        };
    }

    window.Game = Game;
})(window, undefined);