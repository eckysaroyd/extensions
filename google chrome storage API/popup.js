$(function() {
  $("#alias").keyup(function() {
    $("#name").html($("#alias").val());
  });
  $("submit").click(function() {
    var username = $("#alias").val();

    /**how to store data in chrome**/
    chrome.storage.sync.set({ username: username }, function() {});
  });
});
