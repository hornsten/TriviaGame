$(document).ready(function() {

    var time = 30;
    var counter;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var index = 0;

    function run() {

        if (index > 3) {
            gameOver();

        } else {
            counter = setInterval(decrement, 1000);
            write(index);
            time = 30;
            $('#question').show();
            $('#timer').show();
            $('#choices').show();
            $('#imageBox').hide();
            $('#start').hide();


            $('.incorrect').on('click', function() {
                stop();
                showAnswer();
                $('#timer').html('<h2>N to the O to the No, No, NO!</h2>');
                setTimeout(run, 1000 * 5);
                incorrect++;

            });

            $('.correct').on('click', function() {
                stop();
                showAnswer();
                $('#timer').html('<h2>You got it!</h2>');
                setTimeout(run, 1000 * 5);
                correct++;

            });

        }


    };

    function decrement() {
        time--;

        $('#timer').html('<h2>' + "Time Remaining: " + time + '</h2>');

        if (time === 0) {
            stop();
            $('#timer').html('<h2>Your time is up!</h2');
            showAnswer();
            setTimeout(run, 1000 * 5);
            unanswered++;
            console.log(unanswered);

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

    function gameOver() {

        stop();
        $('#timer').html('<h2>All right, here\'s how you did: </h2>' + '<ul>' + '<li>' + 'Correct Answers: ' + correct + '</li>' +
            '<li>' + 'Incorrect Answers: ' + incorrect + '</li>' +
            '<li>' + 'Unanswered Questions: ' + unanswered + '</li>' +
            '</ul>');
        index = 0;
        $('#question').hide();
        $('#imageBox').hide();
        $('#start').show().html('Start Over?');
    }



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
            return '<button type="button" class="btn btn-default incorrect">' + errs + '</button>';
        }).join("");

        return choiceButtons;


    }


    function write(index) {

        for (i = 0; i < 4; i++) {

            $('#question').html(triviaQuestions[index].question);
            $('#choices').html('<button type="button" class="btn btn-default correct">' + triviaQuestions[index].answer + '</button>' + choices(triviaQuestions[index].wrongChoices));

        }
    }

    $('#start').on('click', function() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        index = 0;
        run();

    });

});
