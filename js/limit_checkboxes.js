jQuery(document).ready(function($){
  $("#watcher_urls :checkbox").click(function() {
    if($("#watcher_urls :checkbox:checked").length >= $('#max_urls').val()) {
      $("#watcher_urls :checkbox:not(:checked)").attr("disabled", "disabled");
    }else{
      $("#watcher_urls :checkbox").removeAttr("disabled");
    }
  });
});
