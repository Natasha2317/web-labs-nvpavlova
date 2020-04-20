$(function(){
  $(".cusanmcig-sunantum").click(function(e){
   
  e.preventDefault();
   
  var contenido=$(this).next(".nadaump-cinangum");

  if(contenido.css("display")=="none"){ //open  
  contenido.slideDown(250);  
  $(this).addClass("open");
  }
  else{ //close  
  contenido.slideUp(250);
  $(this).removeClass("open");  
  }

  });
});