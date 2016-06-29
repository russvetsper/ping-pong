$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();


    var test = $("input#number").val();
    var test2 = parseInt(test);
    var list = "";

      for (var i = 1; i <= test2; i ++) {
      list += "<li>";


      if ((i % 3 === 0) && (i % 5 === 0)){
        list += "<i>ping-pong</i>"
      }


      else if ((i % 3 === 0) && (i % 5 !== 0)){
        list += "<i>ping</i>";
         }


      else if ((i % 5 === 0) && (i % 3 !== 0)){
        list += "<i>pong</i>"

      }else{

        list += i;

      }

          list += "</li>";

      };


      $("#results").append(list);

  });
});
