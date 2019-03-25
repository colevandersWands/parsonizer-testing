function generate_pytut_link(code) {
  var encoded = encodeURIComponent(code);
  // https://github.com/pgbovine/OnlinePythonTutor/blob/0dcdacc7ff5be504dd6a47236ebc69dc0069f991/v5-unity/js/opt-frontend.ts#L62
  var sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
  var url = "http://www.pythontutor.com/javascript.html#code="+sanitized+"&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D";
  return url;
};

function open_in_pytut() {
  var url = generate_pytut_link(current_challenge);
  window.open(url, '_blank');
};
