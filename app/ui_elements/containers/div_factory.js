var style = require('./div_styles.css');
var index = 0;
module.exports = {
    create_div: function(name, value) {
        var div  = document.createElement('div');
        div.name = "container " + index++;
        return div;
    },
    div_with_click: function(div, obj) {
        div.classList.add(style.div_container);
        if (obj && obj.cb) {
            div.addEventListener('click' , obj.cb, obj.phase || false);
        }

        return div;
    }
}
