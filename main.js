$(document).ready(function(){
    var text='';

    $('.copy').click(function(){
        console.log("here")
        text=$('#text').val();
        $('#text').val('')
        console.log("here" + text)
    })

    $('.paste').click(function(){
        $('#text1').val(text);
    })
});