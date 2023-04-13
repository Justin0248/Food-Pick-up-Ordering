$('.filter-button').click(function() {
  var filterValue = $(this).data('filter');
  if (filterValue == 'all') {
    $('.menu-item').show();
  } else {
    $('.menu-item').hide();
    $('.' + filterValue).show();
  }
});
