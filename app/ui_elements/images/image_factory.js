var style = require('./img_styles.css');

module.exports = {
    create_img: function(src, alt){
        var img = document.createElement('img');
        img.src= src;
        img.classList.add(style.img_box);
        img.alt= alt || "a panda's image";
        return img;
    }
}
