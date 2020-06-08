
$('.example-toggle').click(function() {
    $(".toggleDisplay").removeClass("in");
    $("." + this.id + ".toggleDisplay").addClass("in");
    $(".example-toggle").removeClass("active");
    $("#" + this.id).addClass("active");
});
