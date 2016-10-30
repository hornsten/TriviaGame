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
    }, {
        question: "Who is your mama?",
        id: 2,
        wrongChoices: ["Bea Arthur", "Wilma Flintstone", "Weakest Link Lady"],
        answer: "LaVerne V",
        imgsrc: '#'
    }, {
        question: "Who is your sis?",
        id: 3,
        wrongChoices: ["Elvira", "Bearded Lady", "Sasha Fierce"],
        answer: "Mimi Marmora",
        imgsrc: '#'
    }];

    function choices(wrongs) {
        var choiceButtons = wrongs.map(function(errs) {
            return '<button type="button" class="btn btn-default">' + errs + '</button>';
        }).join("");
        return '<div class="btn-group-vertical">' + choiceButtons + '</div>';
    }



    for (let i = 0; i < triviaQuestions.length; i++) {
        setTimeout(function timer() {
            $('#question').html(triviaQuestions[i].question);
            $('#choices').html('<button type="button" class="btn btn-default">' + triviaQuestions[i].answer +
                choices(triviaQuestions[i].wrongChoices) + '</button>');
        }, i * 3000);
    }


});
