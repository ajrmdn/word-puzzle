$(document).ready(function () {
  var vowels = ["a", "e", "i", "o", "u"];

  $(".btn").click(function(){
    var userInputs = [];
    userInputs = ($("#sentence").val()).split("");
    for (var index = 0; index < userInputs.length; index += 1) {
      if(vowels.includes(userInputs[index])) {
        userInputs.splice(index, 1, '-');
      };
            console.log(userInputs);
    };
    var output = userInputs.join("");
    $(".answer").text(output);
      });
    });
