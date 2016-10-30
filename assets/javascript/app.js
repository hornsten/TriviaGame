$(document).ready(function() {

    var time = 30;
    var counter;

    $('#stop').on('click', stop);

    $('#start').on('click', run);

    function run() {

        counter = setInterval(decrement, 1000);

    };

    function decrement() {
        time--;

        $('#timer').html('<h2>' + "Time Remaining: " + time + '</h2>');

        if (time === 0) {
            stop();
            $('#timer').html('<h2>Your time is up!</h2');
        }
    };

    function stop() {

        clearInterval(counter);
    };

    run();

    var triviaQuestions = [{

        question: "Who is your grandmother?",
        id: 0,
        wrongChoices: ["Bea Arthur", "Wilma Flintstone", "Weakest Link Lady"],
        answer: "LaVerne V",
        imgsrc: '#'
    }, {

        question: "Who's your daddy?",
        id: 1,
        wrongChoices: ["Don Draper", "Fred Rogers", "Dr. Phil"],
        answer: "Richard P",
        imgsrc: '#'

    }];

    function choices(wrongs) {
        var choiceButtons = wrongs.map(function(errs) {
            return '<button type="button" class="btn btn-default">' + errs + '</button>';
        }).join("");
        return '<div class="btn-group-vertical">' + choiceButtons + '</div>';
    }


    $('#question').html(triviaQuestions[0].question);
    $('#choices').html('<button type="button" class="btn btn-default">' + triviaQuestions[0].answer + choices(triviaQuestions[0].wrongChoices) + '</button>');

});
