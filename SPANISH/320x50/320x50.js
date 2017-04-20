(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.png?1492722356624", id:"back"},
		{src:"images/copy.png?1492722356624", id:"copy"},
		{src:"images/cta.png?1492722356624", id:"cta"},
		{src:"images/flare.png?1492722356624", id:"flare"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.copy = function() {
	this.initialize(img.copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.flare = function() {
	this.initialize(img.flare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,18);


(lib.shimmer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flare();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,18);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An3BoIAAjPIPwAAIAADPg");
	mask.setTransform(245.5,39.6);

	// Layer 1
	this.instance = new lib.copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(195,29.1,101,21);


(lib.l2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap0BPIAAieITqAAIAACeg");
	mask.setTransform(116,33.1);

	// Layer 1
	this.instance = new lib.copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,25.1,126,16);


(lib.l1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApmBjIAAjGITNAAIAADGg");
	mask.setTransform(118.5,14.1);

	// Layer 1
	this.instance = new lib.copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57,4.1,123,20);


(lib.clickarea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{shimmer:2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(39));

	// shimmer
	this.instance = new lib.shimmer();
	this.instance.parent = this;
	this.instance.setTransform(107,156.1,0.185,0.535,0,0,0,78,9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:0.54,x:189.5,alpha:0},32,cjs.Ease.get(1)).wait(6));

	// shimmer
	this.instance_1 = new lib.shimmer();
	this.instance_1.parent = this;
	this.instance_1.setTransform(195,180.1,0.185,0.535,0,0,0,78,9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:0.54,x:108,y:179.8,alpha:0},32,cjs.Ease.get(1)).wait(6));

	// graphic
	this.instance_2 = new lib.cta();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.copyanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l1
	this.instance = new lib.l1();
	this.instance.parent = this;
	this.instance.setTransform(150,25,1,1,0,0,0,160,25);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:160,alpha:1},39,cjs.Ease.get(1)).wait(61));

	// l2
	this.instance_1 = new lib.l2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,25,1,1,0,0,0,160,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({x:160,alpha:1},39,cjs.Ease.get(1)).wait(41));

	// leg
	this.instance_2 = new lib.legal();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160,25,1,1,0,0,0,160,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({alpha:1},39,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,320,50);


// stage content:



(lib._320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(10);
		//document.getElementById('canvas')[0].style.cursor = 'pointer';
		this.ctaclick.cursor = 'pointer';
		
		this.ctaclick.on('click',function(){
			open(clickTag,'_blank');
		});
		this.clickarea.on('click',function(){
			open(clickTag,'_blank');
		});
		this.clickarea.cursor = 'pointer';
	}
	this.frame_110 = function() {
		this.cta.gotoAndPlay('shimmer');
	}
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(110).call(this.frame_110).wait(69).call(this.frame_179).wait(1));

	// cta-click
	this.ctaclick = new lib.clickarea();
	this.ctaclick.parent = this;
	this.ctaclick.setTransform(327.5,0.2,1.078,0.21,0,0,0,305.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.ctaclick).wait(180));

	// clickarea
	this.clickarea = new lib.clickarea();
	this.clickarea.parent = this;
	this.clickarea.setTransform(-1.6,-1.1,1.074,0.205,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.clickarea).wait(180));

	// cta
	this.cta = new lib.cta_1();
	this.cta.parent = this;
	this.cta.setTransform(246.6,20.1,0.916,0.916,0,0,0,151.3,168.8);
	this.cta.alpha = 0;
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(80).to({_off:false},0).to({alpha:1},30).wait(70));

	// copy
	this.instance = new lib.copyanimation("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(160,25,1,1,0,0,0,160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009FDB").s().p("AgSBcIAAi3IAlAAIAAC3g");
	this.shape.setTransform(53.6,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009FDB").s().p("AgvBcIAAi3IBfAAIAAC3g");
	this.shape_1.setTransform(56.6,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009FDB").s().p("AhLBcIAAi3ICXAAIAAC3g");
	this.shape_2.setTransform(59.7,32.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009FDB").s().p("AhmBcIAAi3IDNAAIAAC3g");
	this.shape_3.setTransform(62.6,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009FDB").s().p("AiBBcIAAi3IEDAAIAAC3g");
	this.shape_4.setTransform(65.5,32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009FDB").s().p("AibBcIAAi3IE3AAIAAC3g");
	this.shape_5.setTransform(68.3,32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009FDB").s().p("Ai0BcIAAi3IFpAAIAAC3g");
	this.shape_6.setTransform(71,32.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009FDB").s().p("AjMBcIAAi3IGaAAIAAC3g");
	this.shape_7.setTransform(73.6,32.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009FDB").s().p("AjkBcIAAi3IHJAAIAAC3g");
	this.shape_8.setTransform(76.1,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009FDB").s().p("Aj7BcIAAi3IH3AAIAAC3g");
	this.shape_9.setTransform(78.6,32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009FDB").s().p("AkRBcIAAi3IIjAAIAAC3g");
	this.shape_10.setTransform(81,32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009FDB").s().p("AkmBcIAAi3IJNAAIAAC3g");
	this.shape_11.setTransform(83.3,32.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009FDB").s().p("Ak8BcIAAi3IJ5AAIAAC3g");
	this.shape_12.setTransform(85.6,32.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009FDB").s().p("AlQBcIAAi3IKhAAIAAC3g");
	this.shape_13.setTransform(87.7,32.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009FDB").s().p("AljBcIAAi3ILHAAIAAC3g");
	this.shape_14.setTransform(89.8,32.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009FDB").s().p("Al1BcIAAi3ILrAAIAAC3g");
	this.shape_15.setTransform(91.8,32.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009FDB").s().p("AmHBcIAAi3IMPAAIAAC3g");
	this.shape_16.setTransform(93.7,32.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009FDB").s().p("AmYBcIAAi3IMxAAIAAC3g");
	this.shape_17.setTransform(95.5,32.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009FDB").s().p("AmoBcIAAi3INRAAIAAC3g");
	this.shape_18.setTransform(97.3,32.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009FDB").s().p("Am4BcIAAi3INxAAIAAC3g");
	this.shape_19.setTransform(99,32.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009FDB").s().p("AnHBcIAAi3IOPAAIAAC3g");
	this.shape_20.setTransform(100.6,32.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009FDB").s().p("AnVBcIAAi3IOrAAIAAC3g");
	this.shape_21.setTransform(102.1,32.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009FDB").s().p("AnjBcIAAi3IPHAAIAAC3g");
	this.shape_22.setTransform(103.6,32.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009FDB").s().p("AnvBcIAAi3IPfAAIAAC3g");
	this.shape_23.setTransform(105,32.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009FDB").s().p("An8BcIAAi3IP4AAIAAC3g");
	this.shape_24.setTransform(106.3,32.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009FDB").s().p("AoHBcIAAi3IQPAAIAAC3g");
	this.shape_25.setTransform(107.5,32.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009FDB").s().p("AoRBcIAAi3IQkAAIAAC3g");
	this.shape_26.setTransform(108.6,32.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009FDB").s().p("AocBcIAAi3IQ4AAIAAC3g");
	this.shape_27.setTransform(109.7,32.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009FDB").s().p("AokBcIAAi3IRJAAIAAC3g");
	this.shape_28.setTransform(110.6,32.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009FDB").s().p("AotBcIAAi3IRbAAIAAC3g");
	this.shape_29.setTransform(111.5,32.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009FDB").s().p("Ao1BcIAAi3IRqAAIAAC3g");
	this.shape_30.setTransform(112.4,32.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009FDB").s().p("Ao8BcIAAi3IR4AAIAAC3g");
	this.shape_31.setTransform(113.1,32.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009FDB").s().p("ApBBcIAAi3ISDAAIAAC3g");
	this.shape_32.setTransform(113.8,32.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009FDB").s().p("ApHBcIAAi3ISPAAIAAC3g");
	this.shape_33.setTransform(114.4,32.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009FDB").s().p("ApMBcIAAi3ISZAAIAAC3g");
	this.shape_34.setTransform(114.9,32.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009FDB").s().p("ApQBcIAAi3ISgAAIAAC3g");
	this.shape_35.setTransform(115.3,32.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009FDB").s().p("ApTBcIAAi3ISnAAIAAC3g");
	this.shape_36.setTransform(115.7,32.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009FDB").s().p("ApWBcIAAi3ISsAAIAAC3g");
	this.shape_37.setTransform(115.9,32.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009FDB").s().p("ApXBcIAAi3ISvAAIAAC3g");
	this.shape_38.setTransform(116.1,32.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009FDB").s().p("ApYBcIAAi3ISxAAIAAC3g");
	this.shape_39.setTransform(116.2,32.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009FDB").s().p("ApZBcIAAi3ISzAAIAAC3g");
	this.shape_40.setTransform(116.3,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},40).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).wait(100));

	// back
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(157.7,23.9,323.5,52.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;