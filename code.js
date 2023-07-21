
  var colors = ['blue', 'green', 'red'];
  var colorIndex = 0;

    setup = function(){
     $("#change").click(changeColor);

        function changeColor(){
            $('p').css('color', colors[colorIndex]);
            colorIndex = (colorIndex + 1) % colors.length
        }

        setInterval(changeColor, 2500);
    }

$(document).ready(setup);
