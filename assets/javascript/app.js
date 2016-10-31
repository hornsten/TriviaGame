$(document).ready(function() {

    var time = 30;
    var counter;
    isCorrect = false;
    isWrong = false;
    var id;
    index = 0;

    //$('.stop').on('click', stop(time));

    // $('#start').on('click', run);

    function run() {

        counter = setInterval(decrement, 1000);
        write(index);
        time = 30;
        $('#choices').show();
        $("#imageBox").hide();
    };

    function decrement() {
        time--;

        $('#timer').html('<h2>' + "Time Remaining: " + time + '</h2>');

        if (time === 0) {
            stop(counter);
            $('#timer').html('<h2>Your time is up!</h2');
            showAnswer();
            setTimeout(run, 1000 * 5);

        }
    };

    function showAnswer() {

        $('#choices').hide();
        $("#imageBox").show().html("<img src=\"" + triviaQuestions[index].imgsrc + "\">");
        $('#question').html('<h2>The correct answer is ' + triviaQuestions[index].answer + '</h2>');
        index++;
    }

    function stop() {

        clearInterval(counter);
    };


    var triviaQuestions = [{

        question: "Who is your grandmother?",
        id: 0,
        wrongChoices: ["Bea Arthur", "Wilma Flintstone", "Weakest Link Lady"],
        answer: "LaVerne V",
        imgsrc: 'assets/images/grandma.jpeg'
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

    function write(index) {

        for (i = 0; i < 4; i++) {

            $('#question').html(triviaQuestions[index].question);
            $('#choices').html('<button type="button" class="btn btn-default">' + triviaQuestions[index].answer +
                choices(triviaQuestions[index].wrongChoices) + '</button>');

        }
    }




    run();

});
