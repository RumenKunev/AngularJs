'use strict';

studentPageApp.controller("TigerController",
    function($scope){
        $scope.tigerData = {
            name: "Rumen",
            born: "Asia",
            birthDate: 2007,
            residence: "Sofia Zoo"
        };

        $scope.url = "http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg"

        $scope.spanClass = "spanClass";
    });
