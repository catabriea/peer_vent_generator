
//function appendToContainer(data){
//    $(".container").append("<div></div>");
//    var $el = $(".container").children().last();
//
//}

function getPhraseData(){
    $.ajax({
        url: "/data",
        beforeSend:function(){
            $(".container").append("<p id='generating'>Generating smart ass vent!</p>");
        },
        success: function (data) {
            appendPhraseToDom(data);
            $('#generating').remove();
            console.log(data);

        }
    })

}

function appendPhraseToDom(data){
    var phrase = [];
    phrase.push(data);
    $(".container").append("<div>" + data[0].modadj + " " + data[0].adj +" " +  data[0].top + "</div>");

}

$(document).ready(function () {
        //$('.container').append("<button class='phrase-button'>Generate</button>");
       $(".phrase-button").on('click', function(){
           getPhraseData();
       });



    //$(".phrase-button").on('click', function(){
    //    "Hello"
    //    appendToContainer();
    //});


});