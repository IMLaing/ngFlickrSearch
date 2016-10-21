var $ = require("jquery");
var exports = module.exports = {};

exports.sayHello = function() {
    return "hello";
}
exports.sayFu = function() {
    return "Get the frack out of here!";
}

exports.searchFlickr = function(){
    var url = "http://api.flickr.com/services";
    var parameters = {
        api_key: "92fc59789ddf2029562e91f4719d5ee4",
        text: 'cats',
        per_page: 20
    }
    
    $.getJSON(url, parameters, function(result){
        console.log(result);
    })

}


