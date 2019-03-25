function edit_mode(snippet) {

  clear_parsons();
  clear_controls();

  current_challenge = snippet;

  var new_editor = edit_component(snippet);
  var control_panel = document.getElementById("control-panel");
  control_panel.appendChild(new_editor);

}

// document.getElementById("parsonizer").addEventListener("click", );
