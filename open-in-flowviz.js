function open_in_flowviz() {
  var url = generate_permalink(current_challenge, encode_challenge, "flowviz");
  window.open(url, '_self');
};
