var $ = require("jquery");
var exports = module.exports = {};
console.log('does this load?');
exports.sayHello = function() {
    return "hello";
}

exports.searchFlickr = function(){
    console.log('we have searchFlickr');
    var url = "https://api.flickr.com/services/?method=flickr.photos.search";
    var parameters = {
        api_key: "92fc59789ddf2029562e91f4719d5ee4",
        text: "cats",
        format: 'json',
        per_page: 20
    }
    
    $.getJSON(url, parameters, function(result){
        console.log(result);
        console.log('you did it!');
    })

}


