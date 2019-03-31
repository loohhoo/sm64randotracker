$(document).ready(function() {
    $(".level img").click(function() {
        var levelId = $(this).attr("src").slice(0, -4); // trim off .png at end
        levelId = levelId.slice(7); // trim off images/ at front
        if(levelId < 23) {
            levelId++;
        }

        else {
            levelId = 1;
        }

        $(this).attr("src", "images/" + levelId + ".png");
    });

    $(".level img").bind("contextmenu", function(e) {
        e.preventDefault();
        var levelId = $(this).attr("src").slice(0, -4); // trim off .png at end
        levelId = levelId.slice(7); // trim off images/ at front
        if(levelId > 1) {
            levelId--;
        }

        else {
            levelId = 23;
        }

        $(this).attr("src", "images/" + levelId + ".png");
        return false;
    });
});