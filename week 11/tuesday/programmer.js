

function Programmer(name,title,age,lang){
this.name=name;
this.title=title;
this.age = age;
this.language=lang;

this.printStats = function () {
  console.log("=================\n");
  console.log("Name: "+this.name);
  console.log("Position: " + this.title);
    console.log("Age: " + this.age);
      console.log("Language: " + this.language);
      console.log("=================\n");

}
}
