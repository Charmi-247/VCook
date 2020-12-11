
/*------------------------------------------------------------------
  Home
-------------------------------------------------------------------*/
var imageWidth = 1024;

// Slider Js Start Here (Auto play) 
jQuery(document).ready(function($) {
  var slideCount = $('#slider2 ul li').length;
  var slideWidth = $('#slider2 ul li').width();
  var slideHeight = $('#slider2 ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('#slider2').css({
    width: slideWidth,
    height: slideHeight
  });
  $('#slider2 ul').css({
    width: sliderUlWidth,
    marginLeft: -slideWidth
  });
  $('#slider2 ul li:last-child').prependTo('#slider2 ul');

  function moveLeft() {
    $('#slider2 ul').animate({
      left: +slideWidth
    }, 200, function() {
      $('#slider2 ul li:last-child').prependTo('#slider2 ul');
      $('#slider2 ul').css('left', '');
    });
  };

  function moveRight() {
    $('#slider2 ul').animate({
      left: -slideWidth
    }, 200, function() {
      $('#slider2 ul li:first-child').appendTo('#slider2 ul');
      $('#slider2 ul').css('left', '');
    });
  };

  // Slider Arrows
  $('#slider2 .prevarrow2').click(function() {
    moveLeft();
  });
  $('#slider2 .nextarrow2').click(function() {
    moveRight();
  });

  // auto play function
  setInterval(function() {
    moveRight();
  }, 3000);
});






/*------------------------------------------------------------------
  Profile
-------------------------------------------------------------------*/
function orderDetail(){

  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("detail");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("color").color="color:black";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 
  }