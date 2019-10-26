function parsons_mode(code) {

  document.getElementById("editor").style.display = "none";

  var parsons_zone = document.getElementById("parsons-zone");
  parsons_zone.style = "block";

  var control_panel = document.getElementById('control-panel');
  while (control_panel.firstChild) {
    control_panel.removeChild(control_panel.firstChild);
  };
  parsons_buttons();

  // var snippet = editor.getValue();
  // var snippet = code;

  // var prettier_snippet = prettier.format(snippet, {
  //   parser: "babylon",
  //   plugins: prettierPlugins
  // });

  init_modal(code);

  return init(code);

}




function parsons_buttons() {
  var re_shuffle_button = document.createElement("button");
  re_shuffle_button.id = "newInstanceLink";
  re_shuffle_button.innerHTML = "Re-Shuffle";
  re_shuffle_button.className = 'parsonizer-button';

  var get_feedback_button = document.createElement("button");
  get_feedback_button.id = "feedbackLink";
  get_feedback_button.innerHTML = "Evaluate";
  get_feedback_button.className = 'parsonizer-button';
  get_feedback_button.onclick = function () {
    console.clear();
    setTimeout(save_guess, 0);
  };


  var modal_link = document.createElement("a");
  modal_link.style = "text-decoration: none; color: black;";
  modal_link.href = "#guesses-history";
  modal_link.setAttribute("data-modal-open", "");
  modal_link.innerHTML = "Review Guesses";
  var history_button = document.createElement("button");
  history_button.onclick = update_modal;
  history_button.appendChild(modal_link);
  history_button.className = 'parsonizer-button';

  // var log_solution_button = document.createElement("button");
  // log_solution_button.innerHTML = "log solution";
  // log_solution_button.onclick = function () {
  //   console.log(editor.getValue());
  //   alert('inspect page to see the solution');
  // };

  // var edit_button = document.createElement("button");
  // edit_button.id = "edit";
  // edit_button.innerHTML = "change snippet";
  // edit_button.onclick = change_mode;


  const pytutButt = document.createElement('button');
  pytutButt.className = 'parsonizer-button';
  pytutButt.innerHTML = 'study in JS Tutor';
  pytutButt.onclick = () => {
    openInPytut(challengeCode);
  };


  var control_div = document.getElementById('control-panel');
  while (control_div.firstChild) {
    control_div.removeChild(control_div.firstChild);
  };
  control_div.appendChild(pytutButt);
  control_div.appendChild(history_button);
  control_div.appendChild(re_shuffle_button);
  control_div.appendChild(get_feedback_button);
  // parsons_buttons.appendChild(log_solution_button);
  // parsons_buttons.appendChild(document.createElement("br"));
  // parsons_buttons.appendChild(edit_button);

  return parsons_buttons;
}
