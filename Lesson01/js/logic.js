$(document).ready(function () {

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    var valueOne = randomInteger(6, 9);

    var valueTwo = randomInteger(11, 14);
    valueTwo = (valueTwo - valueOne);

    var arcOne = document.querySelector('.arc-one');
    arcOne.style.setProperty('--sum', valueOne);
    var arcTwo = document.querySelector('.arc-two');
    arcTwo.style.setProperty('--sum', valueTwo);


    $('.value-one-arc').focusout(function () {
        var valueOneArc = $('.value-one-arc').val();
        var fieldOne = $('.value-one');
        fieldOne.text(valueOneArc);
    });

    $('.value-two-arc').focusout(function () {
        var valueTwoArc = $('.value-two-arc').val();
        var fieldTwo = $('.value-two');
        fieldTwo.text(valueTwoArc);
        var valueOneArc = $('.value-one-arc').val();
        valueOneArc = Number(valueOneArc);
        valueTwoArc = Number(valueTwoArc);
        var answer = valueOneArc + valueTwoArc;
        $('.value-answer').text(answer);
    });
    var t = $('.arc-one').width();
    console.log(t + 2);
    var arcTwo = document.querySelector('.arc-two');

    $(arcTwo).css('left', t + 35.2);
});
