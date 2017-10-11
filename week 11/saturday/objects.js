var dogs = {
  raining: false,
  noise: "Woof!",
  makeNoise: function() {
    if (!dogs.raining) {
      console.log(dogs.noise);
    }
  }
};

var cats = {
  raining: false,
  noise: "Meow!",
  makeNoise: function() {
    if (!cats.raining) {
      console.log(cats.noise);
    }
  }
};


// function makeItRain(input){
//   console.log(input);
// //  console.log(this.input);
// //   var animal=this.input
// input.makeNoise();
// }
//
// makeItRain(process.argv[2]);
