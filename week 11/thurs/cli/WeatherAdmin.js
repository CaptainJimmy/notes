var weather=require('weather-js');
var fs=require('fs');

var WeatherAdmin=
  function (){
      fs.readFile("./logfile.txt","utf8",function(err){
        if (err) console.log(err);
      })
  }
module.export=WeatherAdmin;
