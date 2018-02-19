$(document).ready(function() {
  $('.team-acco__trigger').on('click', function(e){
    e.preventDefault();

   var $this = $(this),
       item = $this.closest('.team-acco__item'),
       list = $this.closest('.team-acco'),
       items = list.find('.team-acco__item'),
       content = item.find('.team-acco__content'),
       otherContent = list.find('.team-acco__content'),
       duration = 900;
      
    if (!item.hasClass('active')){
         items.removeClass('active');
         item.addClass('active');

      otherContent.slideUp(duration);
      content.slideDown(duration);
     } else {
      content.slideUp(duration);
      item.removeClass('active');
     }
  });
});
