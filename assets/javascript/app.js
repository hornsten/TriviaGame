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


            $('.btn-danger').on('click', function() {

                if ($(this).html() !== triviaQuestions[index].answer) {
                    stop();
                    showAnswer();
                    $('#timer').html('<h2>I\'m afraid not...</h2>');
                    setTimeout(run, 1000 * 5);
                    incorrect++;
                } else {
                    stop();
                    showAnswer();
                    $('#timer').html('<h2>You got it!</h2>');
                    setTimeout(run, 1000 * 5);
                    correct++;
                }
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
        $("#imageBox").show().html("<img id='pic' src=\"" + triviaQuestions[index].imgsrc + "\">");
        $('#question').html('<h2>The correct answer is ' + triviaQuestions[index].answer + '</h2>');
        index++;
    }


    function stop() {

        clearInterval(counter);

    };

    function gameOver() {

        stop();
        $('#timer').html('<h2>Here\'s how you did: </h2>' + '<ul>' + '<li>' + 'Correct Answers: ' + correct + '</li>' +
            '<li>' + 'Incorrect Answers: ' + incorrect + '</li>' +
            '<li>' + 'Unanswered Questions: ' + unanswered + '</li>' +
            '</ul>');
        index = 0;
        $('#question').hide();
        $('#imageBox').hide();
        $('#start').show().html('Start Over');
    }



    var triviaQuestions = [{

        question: 'Who said, "Live from New York, it\'s Saturday Night!" on the very first episode?',
        id: 0,
        wrongChoices: ['Dan Aykroyd', 'Jane Curtin', 'Chevy Chase', 'John Belushi'],
        answer: 'Chevy Chase',
        imgsrc: 'assets/images/chevy.gif'
    }, {

        question: 'Which 90s "Bad Boy of SNL" was born in Madison, WI?',
        id: 1,
        wrongChoices: ['Chris Farley', 'Chris Rock', 'Adam Sandler', 'David Spade'],
        answer: 'Chris Farley',
        imgsrc: 'assets/images/farley.gif'
    }, {
        question: 'What is the least successful film based on an SNL character?',
        id: 2,
        wrongChoices: ['"MacGruber"', '"The Ladies Man"', '"Stuart Saves His Family"', '"It\'s Pat"'],
        answer: '"It\'s Pat"',
        imgsrc: 'assets/images/pat.gif'
    }, {
        question: 'Which SNL writer quit in a rage, then showed up to work on Monday as if nothing happened?',
        id: 3,
        wrongChoices: ['Tina Fey', 'Larry David', 'Conan O\'Brien', 'John Mulaney'],
        answer: 'Larry David',
        imgsrc: 'assets/images/larry.gif'


    }];

    var number = triviaQuestions[0].answer;
    console.log(number);
    alert(triviaQuestions[0].wrongChoices[number]);


    function choices(wrongs) {
        var choiceButtons = wrongs.map(function(errs) {
            return '<button type="button" class="btn btn-lg btn-danger">' + errs + '</button>';
        }).join('');

        return choiceButtons;

    }


    function write(index) {

        var wrongies = choices(triviaQuestions[index].wrongChoices);
        // var righty = '<button type="button" class="btn btn-lg btn-danger">' + triviaQuestions[index].answer + '</button>';

        $('#question').html(triviaQuestions[index].question);
        $('#choices').html(wrongies);

    }

    $('#start').on('click', function() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        index = 0;
        run();

    });

});
