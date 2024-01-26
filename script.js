$(window).ready(function(){
    $('#submit').click(function(){
        $.post('in.php',{name : $('#name').val() 
        },function(data){
            alert(data);
        });
    });
});
