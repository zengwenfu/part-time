/**
 * Created by Z7 on 2017/10/27.
 */
$(function () {
  $('.container-popup-first .push-panel').on('click', function () {
    $('.container-popup-first').hide();
    $('.container-popup-two').show();
  });
  $('.container-popup-two .confirm .cancel').on('click', function () {
    $('.container-popup-first').show();
    $('.container-popup-two').hide();
  });
  $('.container-popup-two .confirm .first').on('click', function () {
    $('.container-popup-two').hide();
    $('.container-popup-first').hide();
  });
  // 轮播
  $('.container-popup-first .nav li').on('click', function () {
    var index = $(this).index();
    $(this).siblings().removeClass("active");
    $(this).addClass('active');
    $(this).parents(".container-popup-first").find(".content-popup").removeClass("show");
    $(this).parents(".container-popup-first").find(".content-popup").eq(index).addClass("show");
  })
  // 切换二级菜单
  $('.button-popup .btn').on('click', function(){
    $(this).siblings().removeClass("first");
    $(this).addClass('first');
  })
})

