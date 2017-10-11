var chalk = require('chalk');

function Charachter(name, profession, gender, age, strength, hp) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hp = hp;

  this.printStats=function() {
    console.log(chalk.yellow(
      "========================"+"\n",
      "Your Charachter: " + name + '\n',
      "Profession: " + profession + '\n',
      "Gender: " + gender + '\n',
      "Age: " + age + '\n',
      "Strength: " + strength + '\n',
      "Hit Points: " + hp + '\n',
      "========================"+"\n"
    ))
  }
}
var will = new Charachter("Guy Fawkes", "archer", "male", 14, 19, 22);
var johnny = new Charachter("PorkRoll", "warrior", "undetermind",33,28,40);

will.printStats();
johnny.printStats();
