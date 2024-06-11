jQuery('.toggle').click(function() {
    jQuery(this).addClass('active');
    jQuery('.navigation').addClass('active');
    jQuery('body').addClass('active');
  });
  
  jQuery('.close-menu').click(function() {
    jQuery(this).removeClass('active');
    jQuery('.navigation').removeClass('active');
    jQuery('body').removeClass('active');
  });