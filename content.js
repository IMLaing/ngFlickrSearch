console.log('content.js loaded')

var $ = require("jquery");
var exports = module.exports = {};

exports.sayHello = function() {
    return "hello";
}

exports.searchFlickr = function(){
    console.log('searchF ran');
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search";
    var parameters = {
        api_key: "92fc59789ddf2029562e91f4719d5ee4",
        text: "cats",
        format: 'json',
        per_page: 20
    }
    var fullUrl = url + '?jsoncallback=?';
    
    console.log('$.getJson next');
    $.getJSON(fullUrl, parameters, function(result){
        console.log(result);
        console.log('you did it!');
    })

}


