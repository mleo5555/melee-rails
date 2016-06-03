// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {
  $("#fox-btn").click(function () {
	  $('#fox-info').show();
    $("#fox-btn").hide();
    $("#fox-danger-btn").show();
  });
  $("#fox-danger-btn").click(function () {
	  $('#fox-info').hide();
    $("#fox-danger-btn").hide();
    $("#fox-btn").show();
  });

  $("#falco-btn").click(function () {
	  $('#falco-info').show();
    $("#falco-btn").hide();
    $("#falco-danger-btn").show();
  });
  $("#falco-danger-btn").click(function () {
    $('#falco-info').hide();
    $("#falco-danger-btn").hide();
    $("#falco-btn").show();
  });

});
