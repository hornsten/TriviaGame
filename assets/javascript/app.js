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
});
