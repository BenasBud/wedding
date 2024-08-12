//Hook up the tweet display

$(document).ready(function () {
  $(".countdown").countdown(
    {
      date: "19 oct 2024 11:30:00",
      format: "on",
    },

    function () {
      // callback function
    }
  );
});
