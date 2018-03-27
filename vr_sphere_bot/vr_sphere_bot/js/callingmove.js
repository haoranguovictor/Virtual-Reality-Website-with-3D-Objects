/*var moves = document.querySelector('#movements');
var finished = document.querySelector('#finished');
var hide = document.querySelector('#hide');
var animations = document.querySelector('#animations');
var sceneEl = animations.parentNode;*/

var moves = document.querySelector('#movements');
var finished = document.querySelector('#finished');
var hide = document.querySelector('#hide');
var animations = document.querySelector('#animations');
var sceneEl = animations.parentNode;

AFRAME.registerComponent('hidebutton', {
    schema: {
    },
    init: function () {
       
        var moves = document.querySelector('#movements');
        var finished = document.querySelector('#finished');
        var hide = document.querySelector('#hide');
        var animations = document.querySelector('#animations');
        var sceneEl = animations.parentNode;

        moves.parentNode.removeChild(moves); 
        finished.parentNode.removeChild(finished); 

        hide.addEventListener('mouseenter', function () {

        animations.parentNode.removeChild(animations);
        sceneEl.appendChild(moves);       
        sceneEl.appendChild(finished);
        hide.parentNode.removeChild(hide);
    
        AFRAME.registerComponent('finishbutton', {
            schema: {
            },
            init: function () {

                finished.addEventListener('mouseenter', function () {

                sceneEl.appendChild(animations);
                sceneEl.appendChild(hide);
                sceneEl.removeChild(moves);       
                sceneEl.removeChild(finished);

              });
            }
       });

      });
    }
  });

