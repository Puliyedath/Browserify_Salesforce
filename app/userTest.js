var user = require('./user');

module.exports = function(user){
    /* this simply prints the user details */
    console.debug("Dumping out the user details ");
    user.toString(); //tostring rep withing the user 
}(user);
