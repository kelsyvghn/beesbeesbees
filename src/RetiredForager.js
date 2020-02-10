var RetiredForagerBee = function() {
// call the ForagerBee superclass
    ForagerBee.call(this);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = "grey";
};
// set the prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);


// a forage method that returns "I am too old, let me play cards instead"
RetiredForagerBee.prototype.forage = function (treasure) {
  return 'I am too old, let me play cards instead';
}
// an always winning gamble method that allows the bee to add a treasure to the treasureChest
RetiredForagerBee.prototype.gamble = function (treasure) {
  return this.treasureChest.push(treasure);
}
/*
 Create a RetiredForagerBee class, in pseudoclassical style, with:
 an age property that is set to 40
 a job property that is set to gamble
 a canFly property that is set to false
 a color property that is set to grey
 a food property that is inherited from grub
 an eat method that is inherited from grub
 a treasureChest property inherited from ForagerBee that is set to an empty array []
 */

// set the constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;