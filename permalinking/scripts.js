function read_challenge_query() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var challenge_string = url.searchParams.get("snippet");
  return challenge_string;
};

function read_challenge_textarea() {
  var input_area = document.getElementById("input-area");
  return input_area.value;
};

function load_challenge(challenge) {
  var input_area = document.getElementById("input-area");
  input_area.value = challenge;
};

function generate_permalink(snippet, map, viztool) {

  var encoded_snippet = map(snippet);
  var permalink = "https://janke-learning.github.io/"+viztool+"/?snippet="+encoded_snippet;
  return permalink;
};

function display_permalink(url) {
  var perma_display = document.getElementById("display-perma");
  perma_display.value = url;
};

function encode_challenge(string_challenge) {
  // var coded_chars = [];
  // for (var i = 0; i < string_challenge.length; i++) {
  //   coded_chars.push(string_challenge.charCodeAt(i));
  // };
  // var coded_challenge = coded_chars.join("-");
  // return coded_challenge;

  var encoded = encodeURIComponent(string_challenge);
  var sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
  var de_tabbed = encoded.replace(/%09/g, '%20%20');
  return de_tabbed;
};

// sanitization from:  https://github.com/pgbovine/OnlinePythonTutor/blob/0dcdacc7ff5be504dd6a47236ebc69dc0069f991/v5-unity/js/opt-frontend.ts#L62

function decode_challenge(coded_challenge) {
  // var arred_codes = coded_challenge.split("-");
  // var stringed_codes = [];
  // for (var i = 0; i < arred_codes.length; i++) {
  //   stringed_codes.push(String.fromCharCode(arred_codes[i]));
  // };
  // var string_challenge = stringed_codes.join("");
  // return string_challenge;

  var decoded = decodeURIComponent(coded_challenge);
  var desanitized = decoded.replace(/\%28/g, '(').replace(/\%29/g, ')');
  return desanitized;
};



