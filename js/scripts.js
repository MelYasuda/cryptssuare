var root = function(input){
  // var array = input.split("");
  // alert(array);
  var inputLength = input.length;
  var row = Math.floor(Math.sqrt(inputLength));
  var column = row;

  while(column * row < inputLength){
    //this loop will stop if column * row >= inputLength
    //too small
    if (column === row) {
      //if the number of columns and the number of rows are same,
      //increment? the number of rows by one
      row++;
    }
    else {
      column++;
    }
  }

  return [row,column];
}
var encrypt = function(input){
  var sizes = root(input);
  var row = sizes[0];
  var column = sizes[1];
  //go ahead
  var newInput="";
  var index;
  var theNumberOfCharactersAdded = 0;
  for(var i=0; i<column; i++){
     for(var j=0; j<row; j++){
       index = column*j+i;
       newInput += input.charAt(index);
      //  somestring.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
      //  if (input.charAt(index) !== "") {
      //    theNumberOfCharactersAdded++;
      //  }
      //  if (theNumberOfCharactersAdded>=5 && theNumberOfCharactersAdded%5===0){
      //    newInput+=" ";
      //  }
     }

   }
   newInput = newInput.replace(/(\w{5})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
   return newInput;
}

$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var input = ($("#sentence").val()).trim();
    input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'\s]/g,"");
    $("#result").text(encrypt(input));
  });
});
