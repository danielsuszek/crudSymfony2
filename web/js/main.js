$(function(){
   // console.log('Działa main.js');
   // alert('ok');
   /*
   $('#task-complete-1').on({
      click: function(e){
          alert('task-complete-1');
      }
   });
   */
   $('.ajax-task-complete').on({
      click: function(e){
          e.preventDefault();
          var $href = $(this).attr('href');
          // alert($href);   
          $('<div></div>').load($href + ' form', function() {
            // alert($href);
             
            // set form
            var $form = $(this).children('form');
            
            // set checkbox
            var $cb = $form.find('input[type="checkbox"]');

            // toggle
            $cb.prop('checked', !$cb.prop('checked'));

            // form action url
            var $url = $form.attr('action');
            
            // set data
            var $data  = $form.serialize();
            
            
            $.ajax({
                url: $url,
                data: $data,
                method: 'post',
                dataType: 'json',
                cache: false,
                success: function(obj) {
                    var $tic = $('#task-complete-' + obj.id + ' .ajax-task-complete');
                    if (obj.complete) {
                        $tic.text('X');
                    } else {
                        $tic.text('O');
                    }
                },
                complete: function() {
                    console.log('complete!');
                },
                error: function(err) {
                    console.log(err);
                }
            });
            
          });
          
      } // end click: function(e){
   });
});
