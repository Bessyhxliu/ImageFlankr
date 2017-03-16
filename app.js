'use strict';
  angular.module('imagesFlickr', [])
  
    .controller('ImagesController', ['$scope', '$http', function ($scope, $http) {

      $scope.master = {};
      $scope.images = {};

      $scope.search = function (searchTags) {
		 if (searchTags.tags == undefined || searchTags.tags.trim() == "") {
          	searchTags.tags = null;
         	$scope.master = angular.copy(searchTags);
          	$scope.form.$submitted = true;
          return false;
        }
		
       // set the form to its untouched state
        $scope.form.tags.$setUntouched();
		
		// set the validity of the form control.
        $scope.form.tags.$setValidity();

        // build URL for Flickr API
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne";

        flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK"
          + "&tags=" + encodeURIComponent($scope.searchTags.tags)
         // + "&tagmode=" + $scope.searchTags.mode
          + "&format=json";
        
        // send AJAX query to Flickr API
        $http.jsonp(flickrAPI)
          .success(function (data, status, headers, config) {
         	 $scope.images = data;
          	$scope.imagesStatus = status;

        })
        
        // handle error
       	 .error(function (data, status, headers, config) {
          	$scope.images = data;
          	$scope.imagesStatus = status;
        });
        
        // reset form validation
        $scope.form.tags.$setValidity();
      };
      
      // reset form to initial state
      $scope.resetForm = function (form) {
        $scope.form.tags.$setValidity();
        $scope.images = {};
        $scope.searchTags = {};
      };

    }]);
