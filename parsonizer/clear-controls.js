function clear_controls() {
  var div = document.getElementById('control-panel');
  while(div.firstChild){
      div.removeChild(div.firstChild);
  };
};