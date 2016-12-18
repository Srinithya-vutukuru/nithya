console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'this is nithya';
 
var img = document.getElementById('madi');
var marginleft= 0;
var moveright = function(){
    marginleft += 5;
    img.style.marginLeft = marginleft + 'px';
};
img.onclick = function(){

  var interval=setInterval(moveright,100);  
  };
  var one = document.getElementById('first');
 
