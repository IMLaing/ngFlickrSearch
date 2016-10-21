console.log('content.js loaded')

var $ = require("jquery");
var exports = module.exports = {};

exports.sayHello = function() {
    return "hello";
}

exports.searchFlickr = function(){
    console.log('searchF ran');
    var url = "https://api.flickr.com/services/rest/";
    var parameters = {
        api_key: "92fc59789ddf2029562e91f4719d5ee4",
        text: "cats",
        method: 'flickr.photos.search',
        format: 'json',
        per_page: 20,
        jsoncallback: '?',
        jsonp: 'jsoncallback'
    }
    var fullUrl = url + '?jsoncallback=?';
    var jsonFlickrApi = function(){};
    console.log('$.getJson next');
    $.getJSON(fullUrl, parameters, function(result)){
        console.log(result);
        console.log('you did it!');
    })

}


