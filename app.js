(function(){
  'use strict';

  angular.module('checkEnglish', [])
  .controller('ctrlCheckEnglish', ctrlCheckEnglish);

  ctrlCheckEnglish.$inject = ['$scope', '$http'];

  function ctrlCheckEnglish($scope, $http) {

    $scope.displayQuestion = '';
    $scope.displayAnswer = '';
    $scope.answer = '';
    var randomNumber = 0;
    $scope.result = '';
    $scope.trans = "";

    $scope.dictionary = [];

    $scope.lessons_words = [
      {label: 'lesson_3', val: false},
      {label: 'lesson_4', val: false},
      {label: 'lesson_5', val: false},
      {label: 'lesson_6', val: false}
    ];

    $scope.checkSelect = function () {
      $scope.dictionary = [];// Clear dictionary
      $scope.lessons_words.forEach(function (lesson) {
        if(lesson.val){
          var path = 'words/' + lesson.label + '.json';
          $http.get(path)
            .then(function(data) {
              $scope.dictionary = data.data.concat($scope.dictionary);
            });
        }
      });
    }


    // $scope.question =
    function checkInput() {
        if($scope.dictionary.length > 0){
          if($scope.displayAnswer.toLowerCase() == $scope.answer.toLowerCase()){
            $scope.result = 'Correct';
          }else {
            $scope.result = 'Wrong, correct: "' + $scope.displayAnswer + '".\n Your answer: '+ $scope.answer;
          }
          randomNumber = Math.floor(Math.random() * $scope.dictionary.length);
          $scope.displayQuestion = $scope.dictionary[randomNumber].rus;
          $scope.displayAnswer = $scope.dictionary[randomNumber].eng;

          $scope.trans = $scope.dictionary[randomNumber].trans;
        }
    }

    $scope.foo = function (event) {
      if(event.keyCode == 13){
        checkInput();
        $scope.answer = '';
      }
    }
  }

})();
