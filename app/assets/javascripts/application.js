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
    $(".char-data").children().hide();
    $(".floated_img").css("background-color", "#f8f8f8");
    $(".floated_img").css("border", "2px solid #e6e6e1");
    $('#fox-info').show();
    $("#fox-btn").css("background-color", "#b3d9ff");
    $("#fox-btn").css("border", "2px solid #2c43a0");
  });
  $("#falco-btn").click(function () {
    $(".char-data").children().hide();
    $(".floated_img").css("background-color", "#f8f8f8");
    $(".floated_img").css("border", "2px solid #e6e6e1");
    $('#falco-info').show();
    $("#falco-btn").css("background-color", "#b3d9ff");
    $("#falco-btn").css("border", "2px solid #2c43a0");
  });
  $("#marth-btn").click(function () {
    $(".char-data").children().hide();
    $(".floated_img").css("background-color", "#f8f8f8");
    $(".floated_img").css("border", "2px solid #e6e6e1");
    $('#marth-info').show();
    $("#marth-btn").css("background-color", "#b3d9ff");
    $("#marth-btn").css("border", "2px solid #2c43a0");
  });
  $("#sheik-btn").click(function () {
    $(".char-data").children().hide();
    $(".floated_img").css("background-color", "#f8f8f8");
    $(".floated_img").css("border", "2px solid #e6e6e1");
    $('#sheik-info').show();
    $("#sheik-btn").css("background-color", "#b3d9ff");
    $("#sheik-btn").css("border", "2px solid #2c43a0");
  });

});
