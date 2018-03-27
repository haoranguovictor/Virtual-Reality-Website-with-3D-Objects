AFRAME.registerComponent('movebuttonl', {
    schema: {
    },
    init: function () {
      
      var bt = this.el;
      var el = document.querySelector('#bot');
      var data = el.data;
        
      bt.addEventListener('mouseenter', function () {
          var x_pos = el.getAttribute('position')["x"];
          var y_pos = el.getAttribute('position')["y"];
          var z_pos = el.getAttribute('position')["z"];
        el.setAttribute('position', {x:x_pos-1, y:y_pos, z:z_pos}); //{x: 1, y: 2: z: -3}
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
    
      bt.addEventListener('mouseenter', function () {
          var x_pos = el.getAttribute('position')["x"];
          var y_pos = el.getAttribute('position')["y"];
          var z_pos = el.getAttribute('position')["z"];
        el.setAttribute('position', {x:x_pos+1, y:y_pos, z:z_pos});
      });  
      console.log(el.getAttribute('position'));
      //console.log(x_pos);
    }
  });

AFRAME.registerComponent('movebuttonu', {
    schema: {
    },
    init: function () {
      
      var bt = this.el;
      var el = document.querySelector('#bot');
      var data = el.data;
    
     
      bt.addEventListener('mouseenter', function () {
          var x_pos = el.getAttribute('position')["x"];
          var y_pos = el.getAttribute('position')["y"];
          var z_pos = el.getAttribute('position')["z"];
        el.setAttribute('position', {x:x_pos, y:y_pos+1, z:z_pos});
      });  
      console.log(el.getAttribute('position'));
      //console.log(x_pos);
    }
});
AFRAME.registerComponent('movebuttond', {
    schema: {
    },
    init: function () {
      
      var bt = this.el;
      var el = document.querySelector('#bot');
      var data = el.data;
    
      bt.addEventListener('mouseenter', function () {
          var x_pos = el.getAttribute('position')["x"];
          var y_pos = el.getAttribute('position')["y"];
          var z_pos = el.getAttribute('position')["z"];
        el.setAttribute('position', {x:x_pos, y:y_pos-1, z:z_pos});
      });  
      console.log(el.getAttribute('position'));
      //console.log(x_pos);
    }
  });