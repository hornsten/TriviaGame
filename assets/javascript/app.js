// Global Variables--------------------------------------------

var time = 30;
var counter;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var index = 0;

var triviaQuestions = [{

    question: 'Who said, "Live from New York, it\'s Saturday Night!" on the very first episode?',
    id: 0,
    options: ['Dan Aykroyd', 'Jane Curtin', 'Chevy Chase', 'John Belushi'],
    answer: 'Chevy Chase',
    imgsrc: 'assets/images/chevy.gif'
}, {
    question: 'Which 90s "Bad Boy of SNL" was born in Madison, WI?',
    id: 1,
    options: ['Chris Farley', 'Chris Rock', 'Adam Sandler', 'David Spade'],
    answer: 'Chris Farley',
    imgsrc: 'assets/images/farley.gif'
}, {
    question: 'What is the least successful film based on an SNL character?',
    id: 2,
    options: ['"MacGruber"', '"The Ladies Man"', '"Stuart Saves His Family"', '"It\'s Pat"'],
    answer: '"It\'s Pat"',
    imgsrc: 'assets/images/pat.gif'
}, {
    question: 'Which SNL writer quit in a rage, then showed up to work on Monday as if nothing happened?',
    id: 3,
    options: ['Tina Fey', 'Larry David', 'Conan O\'Brien', 'John Mulaney'],
    answer: 'Larry David',
    imgsrc: 'assets/images/larry.gif'
}];

// Functions---------------------------------------------------

function run() {

    if (index > 3) {
        gameOver();

    } else {
        counter = setInterval(decrement, 1000);
        write(index);
        time = 30;
        $('#question').show();
        $('#timer').show();
        $('#yes-no').hide();
        $('#choices').show();
        $('#imageBox').hide();
        $('#start').hide();
        $('.choice-buttons').on('click', detectButton);

    }

};

function choices(buttons) {
    var choiceButtons = buttons.map(function(selections) {
        return '<button type="button" class="btn btn-lg btn-danger choice-buttons">' + selections + '</button>';
    }).join('');

    return choiceButtons;

};


function write(index) {

    var picks = choices(triviaQuestions[index].options);

    $('#question').html(triviaQuestions[index].question);
    $('#choices').html(picks);

};

function detectButton() {

    if ($(this).html() !== triviaQuestions[index].answer) {
        stop();
        showAnswer();
        $('#yes-no').html('<h2>I\'m afraid not...</h2>');
        $('#yes-no').show();
        setTimeout(run, 1000 * 5);
        incorrect++;
    } else {
        stop();
        showAnswer();
        $('#yes-no').html('<h2>You got it!</h2>');
        $('#yes-no').show();
        setTimeout(run, 1000 * 5);
        correct++;
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

    }
};

function stop() {

    $('#timer').hide();
    clearInterval(counter);

};

function showAnswer() {

    $('#choices').hide();
    $("#imageBox").show().html("<img id='pic' src=\"" + triviaQuestions[index].imgsrc + "\">");
    $('#question').html('<h2>The correct answer is ' + triviaQuestions[index].answer + '</h2>');
    index++;
};


function gameOver() {

    stop();
    $('#question').html('<h2>Here\'s how you did: </h2>' + '<ul>' + '<li>' + 'Correct Answers: ' + correct + '</li>' +
        '<li>' + 'Incorrect Answers: ' + incorrect + '</li>' +
        '<li>' + 'Unanswered Questions: ' + unanswered + '</li>' +
        '</ul>');
    index = 0;
    $('#timer').hide();
    $('#yes-no').hide();
    $('#imageBox').hide();
    $('#start').show().html('Start Over');
};


// Main Process------------------------------------------------

$(document).ready(function() {

    $('#start').on('click', function() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        index = 0;
        run();

    });

});
