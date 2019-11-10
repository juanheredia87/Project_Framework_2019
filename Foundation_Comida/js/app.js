$(document).foundation()

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

var $modal = $('#modal');

$.ajax('/url')
  .done(function(resp){
    $modal.html(resp).foundation('open');
});
