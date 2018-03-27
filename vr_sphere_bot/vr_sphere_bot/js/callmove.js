AFRAME.registerComponent('hidebutton', {
    schema: {
    },
    init: function () {
      
      var moves = document.querySelector('#movements');
      var finished = document.querySelector('#finished');
      var bt = this.el;
      var eles = document.querySelector('#animations');
        
      moves.parentNode.removeChild(moves); 
      finished.parentNode.removeChild(finished); 
      
      bt.addEventListener('mouseenter', function () {
        var sceneEl = eles.parentNode;
        eles.parentNode.removeChild(eles);
        sceneEl.appendChild(moves);       
        sceneEl.appendChild(finished);
          
        finished.addEventListener('mouseenter', function () {
            sceneEl.appendChild(eles);
            sceneEl.removeChild(moves); 
            sceneEl.removeChild(finished); 
            /*bt.setAttribute('text-geometry',"value: Move; font: #exoFont; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; size: 1; height: 0.5;");*/
        });  
      });
    }
  });