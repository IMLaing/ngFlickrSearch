angular.module('myApp', [])
    .controller('myCtrl', function ($http) {
        var vm = this;
        vm.toggle = true;
        vm.results;
        vm.flickrSearch = function (text) {
            console.log('new flickrSearch being ran');
            var url = "https://api.flickr.com/services/rest";
            var request = {
                method: 'flickr.photos.search',
                api_key: '92fc59789ddf2029562e91f4719d5ee4',
                tags: text,
                format: 'json',
                nojsoncallback: 1,
                per_page: 20
            };
            $http({
                method: 'GET',
                url: url,
                params: request
            })
                .then(function (result) {
                    console.log('Success!');
                    console.log(result.data);
                    vm.results = result.data.photos.photo;
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

    };
    console.log('$.getJson next');
    $.getJSON(parameters, function (result){ 
        console.log(result);
        console.log('you did it!');
    });

}


*/