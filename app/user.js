var $ = require('jquery');

module.exports = function() {

   var user = {

        _name: 'default',
        _role: 'default role',

        name: function(){
            return this._name;
            console.log("name function");
        },

        role: function(){
            return this._role;
            console.log("role function");
        },

        toString: function(){
            console.log('name ', this.name(), 'role ', this.role());
        }

    };

    return user ;
}();
