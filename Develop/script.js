$(function () {

  $(".saveBtn").on("click", function(){
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(timeBlockId, userInput);
  });

  function updateTimeBlocks(){
    var currentHour = dayjs().hour();

    $(".time-block").each(function (){
      var timeBlockId = $(this).attr("id");
      var blockHour = parseInt(timeBlockId.split("-")[1]);

      $(this).removeClass("past present future");

      if(blockHour < currentHour){
        $(this).addClass("past");
      }
      else if(blockHour === currentHour){
        $(this).addClass("present");
      }
      else {
        $(this).addClass("future");
      }
    });
  }

  updateTimeBlocks();

  function populateTextAreas(){
    $(".time-block").each(function (){
      var timeBlockId = $(this).attr("id");
      var savedUserInput = localStorage.getItem(timeBlockId);

      $(this).find(".description").val(savedUserInput);
    });
  }

  populateTextAreas();

  $("#currentDay").text(dayjs().format("dddd, MMMM, D, YYYY"));

});
