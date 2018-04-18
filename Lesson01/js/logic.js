$(document).ready(function () {
    //Генерация случайных значений
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }
    var valueOne = randomInteger(6, 9);
    var valueTwo = randomInteger(11, 14);
    valueTwo = (valueTwo - valueOne);

    //Указание множителя для отрисовки дуги
    var arcOne = document.querySelector('.arc-one');
    arcOne.style.setProperty('--sum', valueOne);
    var arcTwo = document.querySelector('.arc-two');
    arcTwo.style.setProperty('--sum', valueTwo);

    //Отрисовка отступа второй дуги
    var width = $('.arc-one').width();
    var arcTwo = document.querySelector('.arc-two');
    $(arcTwo).css('left', width + 35.2);

    //Заполнение выражения сгенерированными значениями
    $('.value-one').text(valueOne);
    $('.value-two').text(valueTwo);

    //Проверка введенных в инпут значений
    $('.value-one-arc').focusout(function () {
        var valueOneArc = $('.value-one-arc').val();
        if (valueOneArc == valueOne) {
            $('.value-one').css('background', 'none');
            $('.value-one-arc').css({
                'color': 'black',
                'font-weight': 'none',
                'border': 'none',
            });
            $('.value-two-arc').css({
                'visibility': 'visible'
            });
            $('.arc-two').css({
                'visibility': 'visible'
            });
        } else {
            $('.value-one').css('background', '#F9A646');
            $('.value-one-arc').css({
                'color': '#C1384D',
                'font-weight': 'bold'
            });
        }
    });
    $('.value-two-arc').focusout(function () {
        var valueTwoArc = $('.value-two-arc').val();
        if (valueTwoArc == valueTwo) {
            $('.value-two').css('background', 'none');
            $('.value-two-arc').css({
                'color': 'black',
                'font-weight': 'none'
            });
            $('.value-two-arc').css({
                'color': 'black',
                'font-weight': 'none',
                'border': 'none'
            });
            $('.value-two-arc').prop('disabled', true);
            $('.value-answer').prop('disabled', false);
            $('.value-answer').css({
                'border': '1px solid #ADADAD'
            });
        } else {
            $('.value-two').css('background', '#F9A646');
            $('.value-two-arc').css({
                'color': '#C1384D',
                'font-weight': 'bold'
            });
        }
    });
    $('.value-answer').focusout(function () {
        var valueAnswer = $('.value-answer').val();
        var valueTwoArc = $('.value-two-arc').val();
        var valueOneArc = $('.value-one-arc').val();
        valueTwoArc = Number(valueTwoArc);
        valueOneArc = Number(valueOneArc);
        var sum = valueTwoArc + valueOneArc;
        if (valueAnswer == sum) {
            $('.value-answer').css({
                'color': 'black',
                'font-weight': 'bold',
                 'font-size': '25px',
                'border': '1px solid #fff'
            });
            $('.value-answer').prop('disabled', true);
        } else {
            $('.value-answer').css({
                'color': '#F0182B'
            });

        }
    });

    //Позиционирование инпутов
    //Позиционирование по Х one
    var widthOne = $('.arc-one').width();
    widthOne = Number(widthOne);
    var leftOneValW = widthOne / 2;
    var valueOneArc = document.querySelector('.value-one-arc');
    $(valueOneArc).css('left', leftOneValW + 22);
    //Позиционирование по У one
    var height = $('.arc-one').height();
    height = Number(height);
    var leftOneValH = height + 80;
    var valueOneArc = document.querySelector('.value-one-arc');
    $(valueOneArc).css('bottom', leftOneValH);
    //Позиционирование по Х two
    var widthTwo = $('.arc-two').width();
    widthTwo = Number(widthTwo);
    var leftTwoValW = widthTwo / 2;
    leftTwoValW = widthOne + leftTwoValW;
    var valueTwoArc = document.querySelector('.value-two-arc');
    $(valueTwoArc).css('left', leftTwoValW + 20);
    //Позиционирование по У two
    var height = $('.arc-two').height();
    height = Number(height);
    var leftTwoValH = height + 80;
    var valueTwoArc = document.querySelector('.value-two-arc');
    $(valueTwoArc).css('bottom', leftTwoValH);

    //    //Установка значений выражения  подстановкой из инпутов
    //    $('.value-one-arc').focusout(function () {
    //        var valueOneArc = $('.value-one-arc').val();
    //        var fieldOne = $('.value-one');
    //        fieldOne.text(valueOneArc);
    //    });
    //
    //    $('.value-two-arc').focusout(function () {
    //        var valueTwoArc = $('.value-two-arc').val();
    //        var fieldTwo = $('.value-two');
    //        fieldTwo.text(valueTwoArc);
    //        var valueOneArc = $('.value-one-arc').val();
    //        valueOneArc = Number(valueOneArc);
    //        valueTwoArc = Number(valueTwoArc);
    //        var answer = valueOneArc + valueTwoArc;
    //        $('.value-answer').text(answer);
    //    });




});
