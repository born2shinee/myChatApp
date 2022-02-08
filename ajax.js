$(function(){
    var form = $('#input-form');
    // Response sheet
    var url = 'https://script.google.com/macros/s/AKfycbym74zQ16RHq2yCPvlcps6emJBx6EBGwIxW7n5H3O4qNji6tDNKC0EKdBIREnQpYFNyZg/exec'
    

    form.submit(function(e)
    {
        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: form.serialize(),
            success:function()
            {
                $('#successbox').fadeIn('slow').delay(1300).fadeOut('slow');
                $('#inp').val('');
                console.log('entered')
            }
        });

        e.preventDefault();
    });
    
    
});
