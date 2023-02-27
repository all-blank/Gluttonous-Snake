(function (window, undefined) {

    var ps = "absolute";
    function Food(option) {
        option = option instanceof Object ? option : {};
        this.width = option.width || 20;
        this.height = option.height || 20;
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.color = option.color || "green";
        this.position = ps;
        this.elements = [];
    }

    Food.prototype.render = function (map) {
        var ele = document.createElement("div");
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1);
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1);

        ele.style.width = this.width + "px";
        ele.style.height = this.height + "px";
        ele.style.position = this.position;
        ele.style.left = this.x * this.width + "px";
        ele.style.top = this.y * this.height + "px";
        ele.style.backgroundColor = this.color;

        map.appendChild(ele);
        this.elements.push(ele);
    };

    Food.prototype.remove = function(map, i) {
        map.removeChild(this.elements[i]);

        this.elements.splice(i, 1);
    };

    window.Food = Food;
})(window, undefined);


