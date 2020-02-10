var HoneyMakerBee = function() { // Create a HoneyMakerBee class, in pseudoclassical style, with:
  Bee.call(this); // call the Bee superclass
  // an age property that is set to 10
  this.age = 10;
  // a job property that is set to make honey
  this.job = 'make honey';
  // a honeyPot property that is set to 0
  this.honeyPot = 0;

};

// set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);

//a makeHoney method that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function () {
  //  var makeHoney = this.honeyPot ++;
  //  return makeHoney;
  return this.honeyPot++;
}
// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function () {
  return this.honeyPot --;
}

/*
 a color property inherited from bee that is set to yellow
 a food property that is inherited from grub
 an eat method that is inherited from grub
*/


// set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;