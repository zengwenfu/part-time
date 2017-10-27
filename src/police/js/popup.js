/**
 * Created by Z7 on 2017/10/27.
 */
$('.container-popup-first .nav .two').on('click', function() {
  $('.container-popup-first').hide();
  $('.container-popup-two').show();
  animate($('.container-popup-two'))
});
$('.container-popup-two .confirm .cancel').on('click', function() {
  $('.container-popup-first').show();
  $('.container-popup-two').hide();
  animate($('.container-popup-first'))
});
animate($('.container-popup-first'))
function animate($ct) {
  $ct.on('mousemove', function(e){
    var offset = $ct.offset()
    var x = e.pageX - offset.left
    var y = e.pageY - offset.top
    var centerX = $ct.outerWidth() /2
    var centerY = $ct.outerHeight() /2
    var deltaX = x - centerX
    var deltaY = y - centerY
    var percentX = deltaX / centerX
    var percentY = deltaY / centerY
    var deg = 10
    $ct.css({
      transform: 'rotateX('+deg*-percentY + 'deg)'+
      ' rotateY('+deg*percentX+'deg)'
    })
  })

  $ct.on('mouseleave', function(){
    $ct.css({
      transform: ''
    })
  })
}
