(function($) {
  $(function() {
    var $shareLink = $('#sharelink'),
      $downloadLink1 = $('#downloadlink1'),
      $downloadLink2 = $('#downloadlink2'),
      $copyButton1 = $('#copylinkbtn1'),
      $copyButton2 = $('#copylinkbtn2'),
      clipboard;

    $shareLink.on('keyup paste', function() {
      var link = $shareLink.val(),
        link1 = link.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1");
        link2 = link.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?id=$1");
      if(link1 !== link) {
        $downloadLink1.val(link1);
        $copyButton1.removeAttr('disabled');
      } else {
        $downloadLink1.val('');
        $copyButton1.attr('disabled', 'disabled');
      if(link2 !== link) {
        $downloadLink2.val(link2);
        $copyButton2.removeAttr('disabled');
      } else {
        $downloadLink2.val('');
        $copyButton2.attr('disabled', 'disabled');     
      }
    });

    $downloadLink1.on('click', function() {
      $downloadLink1.select();
    });
    $downloadLink2.on('click', function() {
      $downloadLink2.select();
    });

    clipboard = new Clipboard('#copylinkbtn');
    clipboard.on('success', function(e) {
      $.notify({
        icon: 'glyphicon glyphicon-ok-circle',
        title: 'Link copied to clipboard:',
        message: e.text,
        url: e.text,
        target: '_blank'
      }, {
        // settings
        type: "success",
        placement: {
          from: "top",
          align: "center"
        }
      });

      // $.notify(e.text + " copied to clipboard.");

      e.clearSelection();
    });

  });
})(jQuery);
