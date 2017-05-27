(function(){
'use strict';

angular.module('checkEnglish', [])
.controller('ctrlCheckEnglish', ctrlCheckEnglish);

ctrlCheckEnglish.$inject = ['$scope'];

function ctrlCheckEnglish($scope) {

$scope.displayQuestion = '';
$scope.displayAnswer = '';
$scope.answer = '';
var randomNumber = 0;
$scope.result = '';

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
}
$scope.foo = function (event) {
  if(event.keyCode == 13){
    checkInput();
    $scope.answer = '';
  }
}

$scope.vocab = [
  {'eng': 'wish','rus': 'желание, просьба, хотеть', 'trans':'wɪʃ'},
  {'eng': 'She got her wish','rus': 'Она получила, что хотела', 'trans':'wɪʃ'},
  {"eng": "I don't wish to be rude","rus": "Не хочу быть грубым(но!)", "trans":"wɪʃ"},
  {"eng": "aggressive","rus": "агрессивный, энергичный, настойчивый", "trans":"əˈɡresɪv"},
  {"eng": "all the other","rus": "все остальные", "trans":""},
  {"eng": "such","rus": "такой", "trans":"sʌtʃ"},
  {"eng": "No such agreement was made","rus": "Такого уговора /договора/ не было", "trans":""},
  {"eng": "I haven't heard of any such","rus": "я о таком (человеке) не слышал", "trans":""},
  {"eng": "as you can see","rus": "как видишь", "trans":""},
  {"eng": "backpack","rus": "рюкзак, ходить в поход", "trans":"ˈbækpæk"},
  {"eng": "She carried a backpack on one shoulder","rus": "Она несла рюкзак на одном плече", "trans":""},
  {"eng": "bench","rus": "скамейка, скамья", "trans":"bentʃ"},
  {"eng": "building","rus": "здание, строительство", "trans":"ˈbɪldɪŋ"},
  {"eng": "We sat on a park bench","rus": "Мы сидели на парковой скамейке", "trans":""},
  {"eng": "The clouds are building up","rus": "Тучи собираются", "trans":""},
  {"eng": "to carry","rus": "нести, проводить, носить, переносить", "trans":"ˈkæri"},
  {"eng": "Let me carry your bag","rus": "Разрешите мне понести вашу сумку", "trans":""},
  {"eng": "to cry","rus": "плакать, кричать", "trans":"kraɪ"},
  // {"eng": "It's good to have a cry sometimes","rus": "Хорошо иногда поплакать", "trans":""},
  {"eng": "dishes","rus": "посуда", "trans":"ˈdɪʃəz"},
  {"eng": "He finished the dishes","rus": "Он закончил мыть посуду", "trans":""},
  {"eng": "Don't drop the dishes","rus": "Не урони посуду", "trans":""},
  {"eng": "dull","rus": "тупой, скучный", "trans":"dʌl"},
  {"eng": "It sounded pretty dull to me","rus": "Это звучало довольно скучно / глупо для меня", "trans":""},
  {"eng": "The pain was dull","rus": "Боль была тупая", "trans":""},
  {"eng": "to enjoy","rus": "получать удовольствие", "trans":"ɪnˈdʒɔɪ"},
  {"eng": "Did you enjoy your holiday?","rus": "вы хорошо провели отпуск?", "trans":""},
  {"eng": "He enjoy one's meal","rus": "Он ест с аппетитом(наслаждается едой)", "trans":""},
  {"eng": "Relax and enjoy the view","rus": "Расслабься и наслаждайся видом", "trans":""},
  {"eng": "Do you enjoy your job?","rus": "Вам нравится ваша работа?", "trans":""},
  {"eng": "exercise","rus": "упражнение, тренировка", "trans":"ˈeksərsaɪz"},
  {"eng": "It's a pointless exercise","rus": "Это бессмысленное занятие", "trans":""},
  {"eng": "few","rus": "несколько, мало, немного", "trans":"fjuː"},
  {"eng": "He has but few chances of success","rus": "у него мало шансов на успех", "trans":""},
  {"eng": "few people are able to understand him","rus": "мало кто способен понять его", "trans":""},
  {"eng": "I have a few friends in this town","rus": "В этом городе у меня есть несколько друзей", "trans":""},
  {"eng": "fire place","rus": "камин; очаг", "trans":"ˈfaɪər pleɪs"},
  {"eng": "for a few days","rus": "на несколько дней", "trans":""},
  {"eng": "he went away for a few days","rus": "он уехал на несколько дней", "trans":""},
  // {"eng": "I'll chew it over for a few days and let you know my opinion","rus": "я хорошенько обмозгую это и через несколько дней сообщу вам своё заключение", "trans":""},
  {"eng": "I have not been feeling very well for the past few days","rus": "в последние дни я чувствую себя неважно", "trans":""},
  // {"eng": "I lingered on in London for a few days","rus": "Я задержался в Лондоне на несколько дней", "trans":""},
  {"eng": "to linger","rus": "задерживаться, медлить, засиживаться, мешкать", "trans":"ˈlɪŋɡər"},
  {"eng": "generous","rus": "щедрый, великодушный", "trans":"ˈdʒenərəs"},
  {"eng": "She has a generous heart","rus": "У неё доброе(великодушное) сердце", "trans":""},
  {"eng": "This is a generous gift","rus": "это щедрый подарок", "trans":""},
  {"eng": "heart","rus": "сердце, центр, суть, душа", "trans":"hɑːrt"},
  {"eng": "Her heart was beating fast","rus": "Её сердце быстро билось", "trans":""},
  {"eng": "to have a terrible time","rus": "ужасно проводить время", "trans":""},
  {"eng": "to have dinner","rus": "ужинать /обедать", "trans":""},
  {"eng": "You must come and have dinner with us some day","rus": "Вы должны прийти и поужинать с нами когда-нибудь.", "trans":""},
  {"eng": "gift","rus": "подарок, дар, талант", "trans":"ɡɪft"},
  {"eng": "At this price it's a gift!","rus": "за такую цену это просто подарок", "trans":"ɡɪft"},
  {"eng": "in fact","rus": "в действительностиб на самом деле", "trans":""},
  {"eng": "in front of","rus": "перед чем-либоб впереди", "trans":""},
  {"eng": "it's raining cats and dogs","rus": "идет сильный дождь", "trans":""},
  {"eng": "to hold","rus": "удерживать, держать", "trans":"hoʊld"},
  {"eng": "to look out the window","rus": "смотреть из окна", "trans":""},
  {"eng": "mall","rus": "торговый центр", "trans":"mɔːl"},
  {"eng": "of course","rus": "конечно", "trans":"kɔːrs"},
  {"eng": "to park","rus": "парковать машину", "trans":""},
  {"eng": "parking lot","rus": "парковка, стоянка для машин", "trans":""},
  {"eng": "to practice","rus": "практиковать", "trans":"ˈpræktɪs"},
  {"eng": "puzzle","rus": "головоломка, загадка", "trans":"ˈpʌzl"},
  {"eng": "reliable","rus": "надежный, достоверный", "trans":"rɪˈlaɪəbl"},
  {"eng": "repairman","rus": "ремонтник", "trans":"rɪˈpermæn"},
  {"eng": "to ride","rus": "ездить, ехать, кататься", "trans":"raɪd"},
  {"eng": "right now","rus": "в этот момент; сейчас", "trans":""},
  {"eng": "road","rus": "дорога, путь", "trans":"roʊd"},
  {"eng": "rough","rus": "грубый, шероховатый, неровный", "trans":"rʌf"},
  {"eng": "serious","rus": "серьезный, важный", "trans":"ˈsɪriəs"},
  {"eng": "sharp","rus": "резкий, острый", "trans":"ʃɑːrp"},
  {"eng": "shy","rus": "застенчивый, стеснительный", "trans":"ʃaɪ"},
  {"eng": "sink","rus": "раковина, сток", "trans":"sɪŋk"},
  {"eng": "to sink","rus": "тонуть, потопить", "trans":"sɪŋk"},
  {"eng": "smooth","rus": "гладкий, ровный", "trans":"smuːð"},
  {"eng": "sneakers","rus": "кроссовки, тапки", "trans":"ˈsniːkərz"},
  {"eng": "to solve","rus": "решать, объяснять", "trans":"sɑːlv"},
  {"eng": "soccer","rus": "футбол", "trans":"ˈsɑːkər"},
  {"eng": "sofa","rus": "диван", "trans":"ˈsoʊfə"},
  {"eng": "stomach","rus": "желудок, живот", "trans":"ˈstʌmək"},
  {"eng": "T-shirt","rus": "тенниска; футболка", "trans":"ˈtiːʃərt"},
  {"eng": "to talk","rus": "говорить, разговаривать, беседовать", "trans":"tɔːk"},
  {"eng": "to tell me the truth","rus": "по правде говоря", "trans":""},
  {"eng": "truth","rus": "истина, правда", "trans":"truːθ"},
  {"eng": "to tell","rus": "сказать, рассказывать, сообщать", "trans":"tel"},
  {"eng": "terrible","rus": "ужасный, страшный", "trans":"ˈterəbl"},
  {"eng": "to use","rus": "употреблять, пользоваться, применять", "trans":"juːz"},
  {"eng": "to watch","rus": "смотреть, наблюдать", "trans":"wɑːtʃ"},
  {"eng": "to wear","rus": "быть одетым (во что-л.); носить (одежду и т. п.)", "trans":"wer"},
  {"eng": "whose","rus": "чья, чей, чье, чьи", "trans":"huːz"},
];

}

})();
