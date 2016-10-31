$(document).ready(function() {

    var time = 30;
    var counter;
    isCorrect = false;
    isWrong = false;
    var id;

    //$('.stop').on('click', stop(time));

    // $('#start').on('click', run);

    function run() {

        counter = setInterval(decrement, 1000);

    };

    function decrement() {
        time--;

        $('#timer').html('<h2>' + "Time Remaining: " + time + '</h2>');

        if (time === 0) {
            stop(counter);
            $('#timer').html('<h2>Your time is up!</h2');
            return;

        } else {
            write();
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
        imgsrc: '0'
    }, {

        question: "Who's your daddy?",
        id: 1,
        wrongChoices: ["Don Draper", "Fred Rogers", "Dr. Phil"],
        answer: "Richard P",
        imgsrc: '1'
    }, {
        question: "Who is your mama?",
        id: 2,
        wrongChoices: ["Mama Cass", "Hoosier Mama", "Mamma Mia"],
        answer: "Sue P",
        imgsrc: '2'
    }, {
        question: "Who is your sis?",
        id: 3,
        wrongChoices: ["Twisted Sister", "Sister Sledge", "Sister Christian"],
        answer: "Shelley K",
        imgsrc: '3'
    }];

    function choices(wrongs) {
        var choiceButtons = wrongs.map(function(errs) {
            return '<button type="button" class="btn btn-default stop">' + errs + '</button>';
        }).join("");
        return '<div class="btn-group-vertical">' + choiceButtons + '</div>';
    }

    function write() {

        for (let i = 0; i < triviaQuestions.length; i++) {

            setTimeout(function timer() {
                // $('#question').html(triviaQuestions[i].question);

                // $('#choices').html('<button type="button" class="btn btn-default">' + triviaQuestions[i].answer +
                //     choices(triviaQuestions[i].wrongChoices) + '</button>');
                console.log(triviaQuestions[i].id);
                id = triviaQuestions[i].id;

            }, i * 30000);

            console.log("id is" + id);

        }
        $('#question').html(triviaQuestions[id].question);
    }


    $('.btn-default').on('click', function() {
        alert("clicked!");
        if (isCorrect === true) {
            return;

        } else {

            $('#question').html("The correct answer is " + triviaQuestions[this].answer + ".");
            stop();

        }

    });

    run();
});
