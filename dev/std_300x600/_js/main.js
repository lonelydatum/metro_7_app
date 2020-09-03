function start(){
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	tl.add("shift", "+=1.3")
	tl.to(".childholder", .4, {x:-98}, "shift")	
	tl.from(".txt", .5, {x:"+=300"}, "shift")

	tl.from(".app", .5, {opacity:0}, "+=.6")
}

start()


module.exports = {};

