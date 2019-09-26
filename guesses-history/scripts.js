function init_modal(new_challenge) {
  // var the_answer = document.getElementById("the-answer");
  // the_answer.innerHTML = new_challenge;

  var the_guesses = document.getElementById("the-guesses");
  while (the_guesses.firstChild) {
    the_guesses.removeChild(the_guesses.firstChild);
  };

  guesses = [];
};

function update_modal() {
  var the_guesses = document.getElementById("the-guesses");
  while (the_guesses.firstChild) {
    the_guesses.removeChild(the_guesses.firstChild);
  };

  for (var i = 0; i < guesses.length; i++) {

    var next_font = document.createElement("font");
    if (guesses[i].success) {
      next_font.innerHTML = "yup";
      next_font.style = "color: green;";
    } else {
      next_font.innerHTML = "nope";
      next_font.style = "color: red;";
    };
    var next_message = document.createElement("p");
    next_message.innerHTML = i + 1 + ": ";
    next_message.appendChild(next_font);

    var next_guess = guesses[i].guess;

    var next_div = document.createElement("div");
    next_div.className = "sortable-code";
    next_div.appendChild(next_message);
    next_div.appendChild(next_guess);

    the_guesses.appendChild(next_div);
  };
};


// could be done smoother now with access to parsons_instance?
function save_guess() {

  var ul_guess = document.getElementById("ul-sortable");
  var copy_guess = ul_guess.cloneNode(true);
  copy_guess.style = "list-style-type: none;";

  var is_correct = parsons_instance.grader.grade().success;

  guesses.push({ guess: copy_guess, success: is_correct });

  /*
    var indentations = [];
    for (var i = 0; i < ul_guess.children.length; i++) {
      var raw_margin = ul_guess.children[i].style.cssText;
      var margin_num = raw_margin.slice(13, raw_margin.length-3);
      var num_tabs = margin_num / 50;
      var tabs = "";
      while (num_tabs !== 0) {
        tabs += '\t';
        num_tabs--;
      };
      indentations.push(tabs);
    };

    var lines = [];
    for (var i = 0; i < ul_guess.children.length; i++) {
      var code_line = "";
      for (var j = 0; j < ul_guess.children[i].length; j++) {
        code_line += ul_guess.children[i].children[j]
      };
      lines.push(code_line);
    };

    var indented_lines = [];
    for (var i = 0; i < lines.length; i++) {
      indented_lines.push(indentations[i] + lines[i]);
    };

    var guess = indented_lines.join("\n");
  */
};
