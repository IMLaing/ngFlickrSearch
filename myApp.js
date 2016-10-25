angular.module('myApp', [require('angular-animate')])
    .controller('myCtrl', function ($http) {
        var vm = this;
        vm.textInput='';
        vm.maxQueryReturn='';
        vm.infoDisplay = false;
        vm.currentSearch = [];
        vm.results;
        vm.flickrSearch = function (text, maxQuery) {
            console.log('new flickrSearch being ran');
            var url = "https://api.flickr.com/services/rest";
            var request = {
                method: 'flickr.photos.search',
                api_key: '92fc59789ddf2029562e91f4719d5ee4',
                tags: text,
                format: 'json',
                nojsoncallback: 1,
                per_page: maxQuery
            };
            $http({
                method: 'GET',
                url: url,
                params: request
            })
                .then(function (result) {
                    console.log('Success!');
                    console.log(result.data);
                    vm.currentSearch = [text,maxQuery];
                    vm.results = result.data.photos.photo;
                    vm.infoDisplay = true;
                    vm.textInput='';
                    vm.maxQueryReturn='';
                },
                    function (result) {
                        alert('Unable to connect to flickr at this time');
                        console.log('Failure :(');
                    });
        };
    });

