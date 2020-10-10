/**
 * demo.js
 * https://coidea.website
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, COIDEA
 * https://coidea.website
 */

$(function() {

  // init vars
  var navigation = $('.navigation'),
      menuTrigger = $('#menu-trigger'),
      headerTransparent = $('.header-transparent'),
      tl = new TimelineMax({ paused: true, reversed:true });

  // timeline
  tl.to(menuTrigger, 1.25, { yPercent: -50, top: "50%", ease: Back.easeOut.config(2.5) })
    .to(headerTransparent, 0.35, { autoAlpha: 0.75 }, "-=0.35")
    .staggerTo(navigation.find('li'), 0.1, { opacity: 1, visibility: 'visible' }, 0.1, "-=0.1");
  
  // add menu items animations to timeline
  navigation.find('li').each(function(){
    tl.to($(this), 0.7, { width: $(this).data('width'), height: $(this).data('height'), ease: Back.easeOut.config(2.5) }, "-=0.55")
  });

  // add class "open" to hamburger menu with css animations
  tl.to(menuTrigger, 0.35, { className: '+=open' })
    .staggerTo(navigation.find('a'), 0.35, { opacity: 1, visibility: 'visible', marginLeft: 0 }, 0.07, "-=0.185")

  // toggle play and reverse
  function toggleTimeline() {
    tl.reversed() ? tl.play() : tl.reverse()
  }

  // trigger
  menuTrigger.find('div').on('click', function() {
    event.preventDefault();
    toggleTimeline();
  });

});
