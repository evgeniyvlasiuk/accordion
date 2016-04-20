 $(document).ready(function()  {
            $('.name').click(function(){
            $(".plus").css('background', 'url(play.png');
            $('.name').next('.content').slideUp();
            $(this).next('.content').slideDown();
            var a = $(this).attr('id');
            var b = "#plus" + a;
            console.log(b);
            $("#plus" + a).css('background', 'url(1.png)');
            
    });
});
