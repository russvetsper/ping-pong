$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();
    var input = $("input#number").val();
    var input2 = parseInt(input);
    var list = "";

   for (var i = 1; i <= input2; i ++) {
    if ((i % 3 === 0) && (i % 5 === 0)){
      list += "<li>"+i+"ping-pong</li>"
    } else if ((i % 3 === 0) && (i % 5 !== 0)){
      list += "<li>"+i+"ping</li>";
    } else if ((i % 5 === 0) && (i % 3 !== 0)){
      list += "<li>"+i+"pong</li>"
    } else {
      list+="<li>"+i+"</li>"
    }
    };

    $("#results").append(list);
  });
});
