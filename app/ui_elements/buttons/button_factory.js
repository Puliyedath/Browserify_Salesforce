var style = require('./button_styles.css');
module.exports = {
    create_button: function(name, value) {
        var input = document.createElement('input');
        input.classList.add(style.label_button_label);
        input.name = name;
        input.value = value;
        input.type = "button";
        return input ;
    },

    button_with_click: function(input, obj) {
        if (obj && obj.cb) {
            input.addEventListener('click' , obj.cb, obj.phase || false);
        }
    }
};
