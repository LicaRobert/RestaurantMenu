$(document).ready(function(){
 $("#header, .info").ripples({
     dropRadius: 20,
     perturbance: 1.0,
 });
 //magnific popup
 $('.parent-container').magnificPopup({
  delegate: 'a',
  type: 'image',

  gallery:{
      enabled: true
  }
 });
});