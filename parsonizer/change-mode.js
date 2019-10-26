function change_mode() {
  console.clear();

  document.getElementById("parsons-zone").style.display = "none";
  document.getElementById("comment-div").style.display = "none";
  document.getElementById("tests-div").style.display = "none";


  var live_editor = document.getElementById("editor");
  live_editor.style.display = "block";

  var control_div = document.getElementById('control-panel');
  while (control_div.firstChild) {
    control_div.removeChild(control_div.firstChild);
  };

  var parsonize_button = document.createElement("button");
  parsonize_button.id = "parsonize";
  parsonize_button.innerHTML = "generate exercise";
  parsonize_button.onclick = () => {
    // const queryCode = encodeQuery(editor.getValue());
    // loader(href, null, queryCode);
    loader(href, null, editor.getValue());
  };

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

  const pytutButt = document.createElement('button');
  pytutButt.className = 'parsonizer-button';
  pytutButt.innerHTML = 'study in JS Tutor';
  pytutButt.onclick = () => {
    openInPytut(editor.getValue());
  };

  control_div.appendChild(pytutButt);
  control_div.appendChild(parsonize_button);
  control_div.appendChild(prettify_button);

}
