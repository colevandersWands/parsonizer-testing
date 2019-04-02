function open_in_blockit() {
  var url = generate_permalink(current_challenge, encode_challenge, "blockit");
  window.open(url, '_self');
};

function open_in_flowviz() {
  var url = generate_permalink(current_challenge, encode_challenge, "flowviz");
  window.open(url, '_self');
};

function open_in(site) {
  var url = generate_permalink(current_challenge, encode_challenge, site);
  window.open(url, '_self');
};
