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
    question: 'Which SNL writer quit in a rage, then showed up to work the next morning as if nothing happened?',
    id: 3,
    options: ['Tina Fey', 'Larry David', 'Conan O\'Brien', 'Stephen Colbert'],
    answer: 'Larry David',
    imgsrc: 'assets/images/larry.gif'

}, {
    question: 'Christopher Walken\'s character "The Bruce Dickinson" had a fever. What was the only prescription?',
    id: 4,
    options: ['More Advil', 'More Whiskey', 'More Ramen', 'More Cowbell'],
    answer: 'More Cowbell',
    imgsrc: 'assets/images/cowbell.gif'
}, {
    question: 'Jimmy Fallon and Justin Timberlake played the main characters for which recurring sketch on "Saturday Night Live?"',
    id: 5,
    options: ['"Wayne\'s World"', '"Benny\'s vs. Omeletteville"', '"Jarret\'s Room"', '"The Barry Gibb Talk Show"'],
    answer: '"The Barry Gibb Talk Show"',
    imgsrc: 'assets/images/gibbs.gif'
}, {
    question: 'Which SNL star brought such sketches as Gilly and The Californians to life?',
    id: 6,
    options: ['Tina Fey', 'Ana Gasteyer', 'Kristen Wiig', 'Amy Poehler'],
    answer: 'Kristen Wiig',
    imgsrc: 'assets/images/kristen.gif'
}, {
    question: 'Which musical group played in the 1997 sketch "20,000 Leagues Under the Prom"?',
    id: 7,
    options: ['Promp and Circumstance', 'Garth and Kat', 'Mother Lover', 'Marty and Bobbi Culp'],
    answer: 'Marty and Bobbi Culp',
    imgsrc: 'assets/images/culps.gif'
}, {
    question: 'When does Mary Catharine Gallagher put her fingers under her arms and just smell them like that?',
    id: 8,
    options: ['When she\'s nervous', 'When she\'s happy', 'When she\'s hungry', 'When she\'s about to jump'],
    answer: 'When she\'s nervous',
    imgsrc: 'assets/images/mary.gif'
}, {
    question: 'Roger and Virginia Klarvin are...',
    id: 9,
    options: ['Actors', 'Novelists', 'Professors', 'Athletes'],
    answer: 'Professors',
    imgsrc: 'assets/images/lovers.gif'

}];

// Functions---------------------------------------------------

function run() {

    if (index > 9) {
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
        setTimeout(run, 1000 * 4);
        incorrect++;
    } else {
        stop();
        showAnswer();
        $('#yes-no').html('<h2>You got it!</h2>');
        $('#yes-no').show();
        setTimeout(run, 1000 * 4);
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
