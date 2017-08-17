var style = require("./ui_elements/buttons/button_styles.css");
var button = require('./ui_elements/buttons/button_factory.js');
var div = require('./ui_elements/containers/div_factory.js');
var img_f = require('./ui_elements/images/image_factory.js');

window.addEventListener('load', function(){
    require('./window/win_factory.js')(window);

    var image  = img_f.create_img("testing.png", "testing image");

    var cbutton = button.create_button("hareesh", "hareesh");

    button.button_with_click(cbutton,
                             {
                                 cb: function(event){
                                     
                                     console.log('handler on the button in the capturing phase', event.eventPhase);
                                 },
                                 phase: true
                             });

    button.button_with_click(cbutton, {cb: function(event){
        event.stopImmediatePropagation();
        console.log('handler on the button in the bubbling phase',event.eventPhase);
    }});


    var container = div.create_div();
    var container2 = div.create_div();

    [container, container2].map(function(item){

        div.div_with_click(item,
                           {
                               cb: function(event){
                                   console.log('handler on the container in the capturing phase',
                                               this.name,
                                               event.eventPhase);
                               },
                               phase: true
                           });

        div.div_with_click(item, {cb: function(event){
            console.log('handler on the container in the bubbling phase', this.name, event.eventPhase);
        }});


    });
    
    container.append(container2);
    container2.append(cbutton);

    setTimeout(function(){
        document.body.append(container);
        document.body.append(image);
    });
});



