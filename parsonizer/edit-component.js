function edit_component(snippet) {

    var textarea = document.createElement("textarea");
    textarea.id = "input-area";
    textarea.rows = 15;
    textarea.cols = 60;
    textarea.className = "common";
    if (snippet) {
      textarea.value = snippet;
    } else {
      textarea.placeholder = "paste your code here and click the [parsonize your code] button to create a study challenge";
    };


    var parsonize_button = document.createElement("button");
    parsonize_button.id = "parsonize";
    parsonize_button.innerHTML = "parsonize this snippet";
    parsonize_button.onclick = function(){
                                  var snippet = read_challenge_textarea();
                                  parsons_mode(snippet);
                                };

    var edit_comp = document.createElement("div");
    edit_comp.appendChild(textarea);
    edit_comp.appendChild(document.createElement("br"));
    edit_comp.appendChild(parsonize_button);

    return edit_comp;
}
