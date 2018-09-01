$(function() {

  $.scrollify({

    section: "section",
sectionName: false
  });

});
function showResult(){

  for (var i = 0; i < 20; i++) {
        var line = $("<h1>dummy text</h1>");
        $("#res").append(line);
    }
    $.scrollify.update();

}
