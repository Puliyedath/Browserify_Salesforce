var uniq = require('uniq');

var $ = require('jquery');
var user2Styles = require('./styles/user.css');

module.exports = function() {

    //user2Styles - i want to see what it is
    console.log("user2Styles is logged  " , user2Styles);

    var iText = `<li class="${user2Styles.description}">From css modulesify</li>`;

    var data = [1,3,4,5,5,7];

    console.log("this is a second dump of the same data that we had used earlier");
    console.log("from main2" ,uniq(data));
    console.log("this is my first console log in uniq", $);
}();
