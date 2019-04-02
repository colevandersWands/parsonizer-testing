function change_mode() {
  var parsons_zone = document.getElementById("parsons-zone");
  parsons_zone.style.display = "none";
  var editor = document.getElementById("editor");
  editor.style.display = "block";

  var control_div = document.getElementById('control-panel');
  while(control_div.firstChild){
      control_div.removeChild(control_div.firstChild);
  };

  var parsonize_button = document.createElement("button");
  parsonize_button.id = "parsonize";
  parsonize_button.innerHTML = "parsonize this snippet";
  parsonize_button.onclick = parsons_mode;

  control_div.appendChild(parsonize_button);

}
