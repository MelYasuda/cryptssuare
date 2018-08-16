$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var input = $("#sentence").val();

    $("#result").append(input);
  });
});
