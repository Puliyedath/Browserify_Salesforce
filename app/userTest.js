var user = require('./user');
var doc = document;
var userStyles = require('./styles/user.css');

module.exports = function(user){

    //appending an inner Text to check if the css-modulesify actually does work
    //not ging to write anyting into this 
    var iText = `<li class="${userStyles.description}">Next text from home</li>`;
    

    //when the document is ready add the user details onto the page
    var addUser = function(user) {
        var docF = document.createDocumentFragment();
        var name = document.createElement('li');
        name.textContent = this.name();
        name.classList.add(userStyles.description);
        docF.appendChild(name);

        var role = document.createElement('li');
        role.textContent = this.role();
        role.classList.add(userStyles.description);
        docF.appendChild(role);
        
        var sec = document.querySelector('ul.description');

        sec.append(docF);
    };

    window.addEventListener('load', addUser.bind(user), false);

    /* this simply prints the user details */
    console.debug("Dumping out the user details ");
    user.toString(); //tostring rep withing the user 

}(user);
