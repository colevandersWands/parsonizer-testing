function readSnippetQuery() {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const code = url.searchParams.get("code");
  const snippet = url.searchParams.get("snippet");
  const exercise = url.searchParams.get("exercise");
  return { code, exercise, snippet };
};

function generatePermalink(code, map) {
  var encodedCode = map(code);
  var permalink = `${href}/?code=${encodedCode}`;
  return permalink
};

function encodeQuery(string_challenge) {
  var encoded = encodeURIComponent(string_challenge);
  var sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
  var de_tabbed = sanitized.replace(/%09/g, '%20%20');
  return de_tabbed
};

// sanitization from:  https://github.com/pgbovine/OnlinePythonTutor/blob/0dcdacc7ff5be504dd6a47236ebc69dc0069f991/v5-unity/js/opt-frontend.ts#L62

function decodeQuery(coded_challenge) {
  var decoded = decodeURIComponent(coded_challenge);
  var desanitized = decoded.replace(/\%28/g, '(').replace(/\%29/g, ')');
  return desanitized;
};

function genPermalink() {
  var code = editor.getValue(); // change based on program
  var url = generatePermalink(code, encodeQuery, 'parsonizer');
  var permaDisplay = document.getElementById("permalink");
  permaDisplay.value = url;
  copy_to_clipboard(url);
  alert('copied permalink');
}




