
// settings
const min = 1000;
const max = 5000;
// settings
function getRandomDuration() {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function opacityToggle(element) {
  const duration = getRandomDuration();
  if(element.css('opacity') == 1) {
    element.animate({
      opacity: 0
    }, duration)
  } else {
    element.animate({
      opacity: 1
    }, duration)
  }
  setTimeout(() => {opacityToggle(element)}, duration+1)
}




$(document).ready(function(){
      $("#p5").mouseup(function(){
        alert("Sadly i haven't develop a way to update new profile pic ");
      });

      $('img').each(function() {
        opacityToggle($(this));
      });
$(function(){
$("#accordion").accordion();
});

setInterval(function(){
$(".moving0").stop(true,true).animate({top:500}, 1000,
      function(){ $(this).stop(true,true).animate({top: 0}, 1000);
});
}, 3000);
setInterval(function(){
$(".moving").stop(true,true).animate({top:200}, 1500,
      function(){ $(this).stop(true,true).animate({top: 0}, 1000);
});
}, 3000);

setInterval(function(){
$("#moving1").stop(true,true).animate({left: 300}, 1000,
      function(){ $(this).stop(true,true).animate({left: 0}, 1000);
});
}, 3000);

setInterval(function(){
$(".moving2").stop(true,true).animate({top: 260}, 2000,
      );
}, 3000);
setInterval(function(){
$(".moving3").stop(true,true).animate({right: 950}, 5000,
      );
}, 5000);

    });
