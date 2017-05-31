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

    /**
    * Get words
    */
    $http.get('words.json')
      .then(function(data) {
        $scope.vocab = data.data;
      });

    // $scope.question =
    function checkInput() {

        if($scope.displayAnswer.toLowerCase() == $scope.answer.toLowerCase()){
          $scope.result = 'Correct';
        }else {
          $scope.result = 'Wrong, correct: "' + $scope.displayAnswer + '". Tour answer: '+ $scope.answer;
        }
        randomNumber = Math.floor(Math.random() * $scope.vocab.length);
        $scope.displayQuestion = $scope.vocab[randomNumber].rus;
        $scope.displayAnswer = $scope.vocab[randomNumber].eng;

        $scope.trans = $scope.vocab[randomNumber].trans;
    }

    $scope.foo = function (event) {
      if(event.keyCode == 13){
        checkInput();
        $scope.answer = '';
      }
    }
  }

})();
