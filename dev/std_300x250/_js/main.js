function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.to(".childholder", .5, {x:0}, "+=.2")
	tl.to(".childholder", .5, {x:-148}, "+=1")	
	tl.from(".app", .5, {opacity:0}, "+=.3")
}

start()


module.exports = {};

