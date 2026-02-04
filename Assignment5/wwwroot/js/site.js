$(function () {
    $("#calcBtn").on("click", function () {
        $("#hoursError").text("");
        $("#total").val("");

        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());

        // Validation: must be a real number AND > 0
        if (isNaN(hours) || hours <= 0) {
            $("#hoursError").text("Please enter a positive number of hours.");
            return;
        }

        let total = hours * rate;
        $("#total").val("$" + total.toFixed(2));
    });
})