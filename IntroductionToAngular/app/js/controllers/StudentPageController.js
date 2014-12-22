'use strict';

studentPageApp.controller("MyController",
    function ($scope) {
        $scope.student = {
            name: "Pesho",
            photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQrQjcy18TRUSc3viXGB2Hm8aLzpGcVU79-52YsvulJXBNZ94OYg",
            grade: "5",
            school: "High School",
            teacher: "Bruce Lee"
        };
    }
);
