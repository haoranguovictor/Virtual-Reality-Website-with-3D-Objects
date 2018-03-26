AFRAME.registerComponent('movebuttonl', {
    schema: {
    },
    init: function () {
      
      var bt = this.el;
      var el = document.querySelector('#bot');
      var data = el.data;
      //var x_pos = el.getAttribute('position')["x"];
      //el.setAttribute('position', "0.091 0.550 4.087");  
      /*el.addEventListener('mouseenter', function () {
        el.setAttribute('position', "0.091 0.550 4.087");
      });*/
        
      bt.addEventListener('mouseenter', function () {
          var x_pos = el.getAttribute('position')["x"];
        el.setAttribute('position', {x:x_pos-1, y:1, z:-5.5}); //{x: 1, y: 2: z: -3}
      });  
      console.log(data);
    }
  });

AFRAME.registerComponent('movebuttonr', {
    schema: {
    },
    init: function () {
      
      var bt = this.el;
      var el = document.querySelector('#bot');
      var data = el.data;
    
      var x_pos = el.getAttribute('position')["x"];
      //el.setAttribute('position', "0.091 0.550 4.087");  
      /*el.addEventListener('mouseenter', function () {
        el.setAttribute('position', "0.091 0.550 4.087");
      });*/
      bt.addEventListener('mouseenter', function () {
          var x_pos = el.getAttribute('position')["x"];
        el.setAttribute('position', {x:x_pos+1, y:1, z:-5.5});
      });  
      console.log(el.getAttribute('position'));
      //console.log(x_pos);
    }
  });