(function($) {
  $(function() {
    var $shareLink = $('#sharelink'),
      $downloadLink = $('#downloadlink'),
      $copyButton = $('#copylinkbtn'),
      clipboard;

    $shareLink.on('keyup paste', function() {
      var link = $shareLink.val(),
        link1 = link.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1");
        link2 = link.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?id=$1");
      if(l1 !== link) {
        $downloadLink.val(link1);
        $copyButton.removeAttr('disabled');
      } else {
        $downloadLink.val('');
        $copyButton.attr('disabled', 'disabled');
      if(link2 !== link) {
        $downloadLink.val(link2);
        $copyButton.removeAttr('disabled');
      } else {
        $downloadLink.val('');
        $copyButton.attr('disabled', 'disabled');     
      }
    });

    $downloadLink.on('click', function() {
      $downloadLink.select();
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
