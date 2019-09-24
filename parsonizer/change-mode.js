function change_mode() {
  var parsons_zone = document.getElementById("parsons-zone");
  parsons_zone.style.display = "none";
  var live_editor = document.getElementById("editor");
  live_editor.style.display = "block";

  var control_div = document.getElementById('control-panel');
  while (control_div.firstChild) {
    control_div.removeChild(control_div.firstChild);
  };

  var parsonize_button = document.createElement("button");
  parsonize_button.id = "parsonize";
  parsonize_button.innerHTML = "parsonize this snippet";
  parsonize_button.onclick = parsons_mode;

  var prettify_button = document.createElement("button");
  prettify_button.id = "prettify";
  prettify_button.innerHTML = "prettify code";
  prettify_button.onclick = function () {
    editor.setValue(
      prettier.format(
        editor.getValue(),
        {
          parser: "babylon",
          plugins: prettierPlugins
        }
      )
    )
  };


  control_div.appendChild(parsonize_button);
  control_div.appendChild(prettify_button);

}
