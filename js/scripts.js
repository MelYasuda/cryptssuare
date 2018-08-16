var array = function(input){
  var array = input.split("");
  alert(array);
}

$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var input = ($("#sentence").val()).trim();
    input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    $("#result").append(array(input));
  });
});
