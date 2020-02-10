var ForagerBee = function() {
  // call the Bee superclass
  HoneyMakerBee.call(this);
  this.age = 10;
  this.canFly = true;
  this.treasureChest = [];
  this.job = 'find pollen';

};
// set the prototype

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);

ForagerBee.prototype.forage = function (value) {
  return this.treasureChest.push(value);
}
/*
 Create a ForagerBee class, in pseudoclassical style, with:

 an age property that is set to 10
 a job property that is set to find pollen
 a color property inherited from bee that is set to yellow
 a food property that is inherited from grub
 an eat method that is inherited from grub
 a canFly property that is set true
 a treasureChest property that is set to an empty array []
 a forage method that allows the bee to add a treasure to the treasureChest
 */
// set the constructor
ForagerBee.prototype.constructor = ForagerBee;