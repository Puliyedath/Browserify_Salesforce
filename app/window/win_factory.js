module.exports = function attachHandlers(window) {
    window.addEventListener('error', function(event){
        console.log('something went wrong....');
    });

    document.addEventListener('error', function(event){
        console.log('something went wrong....');
    });
};
