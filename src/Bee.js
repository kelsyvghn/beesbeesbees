var Bee = function() { //Create a Bee class, in pseudoclassical style
  Grub.call(this);//call the Grub superclass


  // an age property that is set to 5
  this.age = 5;
  // a color property that is set to yellow
  this.color = 'yellow';
  //a job property set to 'keep on growing'
  this.job = 'keep on growing';
};

// a food property that is inherited from grub
// an eat method that is inherited from grub

// var bee = new Bee();

  // set the prototype
  Bee.prototype = Object.create(Grub.prototype);
  //set the constructor
  Bee.prototype.constructor = Bee;