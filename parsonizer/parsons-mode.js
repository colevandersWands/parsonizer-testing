function parsons_mode(snippet) {
  init_modal(snippet);

  current_challenge = snippet;

  clear_controls();
  var control_panel = document.getElementById("control-panel");
  var new_buttons = parsons_buttons();
  control_panel.appendChild(new_buttons);

  clear_parsons();

  parsons_instance = init(snippet);

}

// document.getElementById("parsonizer").addEventListener("click", );
