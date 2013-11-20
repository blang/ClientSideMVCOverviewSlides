//Model examples
var Cat = Backbone.Model.extend({
    defaults: {
        "name": "Felix",
        "color": "blackwhite"
    },
    eat: function(food){
        alert(this.get('name') + " is eating "+food);
    }
}); 

var garfield = new Cat({name:"Garfield"});
garfield.on("foodSeen", function(food){
   this.eat(food); 
});

$('#servebutton').click(function(){
    garfield.trigger("foodSeen", "Mouse");
});

//Event examples
var object = {};
_.extend(object, Backbone.Events);
object.on("alert", function(msg) {
      alert("Triggered " + msg);
});
