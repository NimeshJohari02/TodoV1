//it is tradiionalyy module.export- fnaem
//fname(){}
/* It can be reduced to a generic function like so
Also By  readimg Node Documentation we can see that modeule.eeports can be replaced by just .export*/
//module.exports.getDate=function()


exports.getDate=function()
{
const today = new Date();
const currday = today.getDay();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
}
const day = today.toLocaleDateString("en-US", options);
return day;

}

exports.getDay=function(){
var today = new Date();
var currday = today.getDay();

var options = {
  day: "numeric",
}
let day = today.toLocaleDateString("en-US", options);
return day;

}
