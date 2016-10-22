angular.module('myApp', [])
    .controller('myCtrl', function ($http) {
        var vm = this;
        vm.toggle = true;
        vm.flickrSearch = function () {
            console.log('new flickrSearch being ran');
            var url = "https://api.flickr.com/services/rest/";
            var request = {
                apikey: '92fc59789ddf2029562e91f4719d5ee4',
                tags: "cats",
                outputMode: 'json',
                jsonp: "JSON_CALLBACK"
            };
            $http({
                method: 'JSONP',
                url: url,
                params: request
            })
                .then(function (result) {
                    console.log('Success!');
                    vm.infoReturned = result.data;
                },
                    function (result) {
                        console.log('Failure :(');
                    });
        };
    });


/*exports.searchFlickr = function () {
    console.log('searchF ran');
    var parameters = {
        url:"",
        api_key: "",
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


*/