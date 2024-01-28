$(document).ready(function () {
    let a = 0;
    // переключение форм
    $('#change').click(function () {
        if (a == 0) {
            a++;
            $('#firstForm').fadeToggle(1000);
            function secondForm() {
                $('#secondForm').fadeToggle(1000);
            }
            setTimeout(secondForm, 999);
        }
        else {
            a--;
            $('#secondForm').fadeToggle(1000);
            function firstForm() {
                $('#firstForm').fadeToggle(1000);
            }
            setTimeout(firstForm, 999);
        }
    });
    //Проверка на (какая формасейчас активна)
    if(a == 0){
        // активация проверки и действий при нажатии на кнопку (формы регестрации)
        $('#submit').click(function () {
            // проверка на пустые поля
            if ($('#name').val() != 0 && $('#email').val() != 0 && $('#town').val() != 0 && $('#password').val() != 0 && $('#password2').val() != 0 && $('#password').val() == $('#password2').val()) {
                //связь с in.php
                $.post('in.php', {
                    id: '1',
                    name: $('#name').val(),
                    email: $('#email').val(),
                    town: $('#town').val(),
                    password: $('#password').val()
                }, function (data) {
                    if(data != ''){
                        alert(data);
                    }
                    else{
                        alert(data);
                        success();
                    }
                });
            }
            else {
                //возврат результата при нулевом значении какого-либо input
                if ($('#name').val() == 0) {
                    alert("Пустое значение имени");
                }
                else if ($('#email').val() == 0) {
                    alert("Пустое значение почты");
                }
                else if ($('#town').val() == 0) {
                    alert("Не выбран город!");
                }
                else if ($('#password').val() == 0) {
                    alert("Значение пароля пустое!");
                }
                else if ($('#password2').val() == 0) {
                    alert("Значение подтверждения пароля пустое!");
                }
                else if ($('#password').val() != $('#password2').val()) {
                    alert("Пароль и подтверждающий пароль не совпадают!");
                }
                else {
                    alert("Ошибка!");
                }
            }
        });
    }
    else{
        // активация события (проверка на овпадение имени, пароля и почты).
        $('#submit2').click(function (){
            $.post('in.php', {
                id: '2',
                name: $('#name2').val(),
                email: $('#email2').val(),
                password: $('#password12').val()
            }, function (data) {
                if(data != ''){
                    alert(data);
                }
                else{
                    alert(data);
                    success();
                }
            });
        });
    }
    // функция активации таблицы и дизактивации форм
    function success(){
        a = 2;
        $('firstForm').fadeHide(1000);
        $('secondForm').fadeHide(1000);
        $.post('in.php',{id: 3},function(data){
            $(document).innerHTML(data);
            alert(data);
        });
    }
});