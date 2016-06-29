$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();


    var input = $("input#number").val();
    var input2 = parseInt(input);
    var list = "";

      for (var i = 1; i <= input2; i ++) {
        list += "<li>";


      if ((i % 3 === 0) && (i % 5 === 0)){
        list += "<li>ping-pong</li>"
      }


      else if ((i % 3 === 0) && (i % 5 !== 0)){
        list += "<li>ping</li>";

      }

      else if ((i % 5 === 0) && (i % 3 !== 0)){
        list += "<li>pong</li>"

      }else{

        list += i;

      }

        list += "</li>";

      };


      $("#results").append(list);

  });
});
