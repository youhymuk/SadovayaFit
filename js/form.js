$(document).ready(function() {

    $("#mainForm").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#mainconfModal').arcticmodal();
            $(".form").trigger("reset");
        });
        return false;
    });
    $("#programForm1").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#progconfModal1').arcticmodal();
            $(".form").trigger("reset");
        });
        return false;
    });
    $("#programForm2").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#progconfModal2').arcticmodal();
            $(".form").trigger("reset");
        });
        return false;
    });
    $("#programForm3").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#progconfModal3').arcticmodal();
            $(".form").trigger("reset");
        });
        return false;
    });
    $("#marathonModal").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#marconfModal').arcticmodal();
            $(".form").trigger("reset");
        });
        return false;
    });

});
