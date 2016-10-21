var $ = require('jquery');
require("./style.css");
var contentjs = require("./content.js");
var ngjs = require("./myApp.js")
console.log(contentjs.sayHello()); // content.js has is referenced by contentjs.

$(document).ready(function(){
    console.log('ready from entry.js!');
    contentjs.searchFlickr();
});