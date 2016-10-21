require("./style.css");
var contentjs = require("./content.js");

console.log(contentjs.sayHello()); // content.js has is referenced by contentjs.
contentjs.searchFlickr();