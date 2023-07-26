
  var colors = ['blue', 'green', 'red', 'black', 'white', 'pink'];
  var colorIndex = 0;

    setup = function(){
     $("#change").click(changeColor);

        function changeColor(){
            $('p').css('color', colors[colorIndex]);
            colorIndex = (colorIndex + 1) % colors.length
        }

    }

$(document).ready(setup);
