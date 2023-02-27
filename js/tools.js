(function (window, undefined) {
    var Tools = {
        getRandom : function(max,min) {
            min = Math.ceil(min);
            max = Math.floor(max);
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            return random; 
        },
        getColor : function() {
            var r = this.getRandom(0, 255);
            var g = this.getRandom(0, 255);
            var b = this.getRandom(0, 255);
            return "rgb(" + r + "," + g + "," + b + ")";
        }
    };

    window.Tools = Tools;
})(window, undefined);