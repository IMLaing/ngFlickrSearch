console.log('content.js loaded');

var $ = require("jquery");
var exports = module.exports = {};

exports.sayHello = function () {
    return "hello";
};

exports.searchFlickr = function () {
    console.log('searchF ran');
    \
    var parameters = {
        url:"https://api.flickr.com/services/rest/",
        api_key: "92fc59789ddf2029562e91f4719d5ee4",
        tags: "cats",
        method: 'flickr.photos.search',
        format: 'json',
        per_page: 20,
        jsoncallback: '?',
        jsonp: 'jsoncallback',
        nojsoncallback: 1 
    };
    console.log('$.getJson next');
    $.getJSON(parameters, function (result){ 
        console.log(result);
        console.log('you did it!');
    });

}


