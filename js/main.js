new TypeIt('.type-it01', {
	speed: 50
})
.type("Hi,")
.break() .pause(500)
.type("I'm Daniel Berryman.")
.break() .pause(500)
.type("I want to help care for the world ")
.break() .pause(500)
.break()
.type("on the web.")
.pause(1500) .delete(11)
.type("in the theatre.")
.pause(1500) .delete(15)
.type("through music.")
.pause(1500) .delete(17) .pause(500)
.type(" in all my work.")
.break()
.break() .pause(1500)
.type("Check out more below.")
.pause(500)
.type(" Thanks.");

$(document).ready(function(){
	var controller = new ScrollMagic.Controller();
	$('.career').each(function(){
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.8,
			reverse: false
		})
		.setClassToggle(this, 'fade-in')
		.addTo(controller);
	});
});
