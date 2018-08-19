$(document).ready(function(){

    var datahold =0;
    $('#ninja-cat img').click(function(){
      datahold = $(this).attr("data-alt-src")
      $(this).attr("src", datahold);
    });

    
//    $('#ninja-cat img').click(function(){
//      $(this).attr("src","images/cat1.png");
//    });

});