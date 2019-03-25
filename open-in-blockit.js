function open_in_blockit() {
  var url = generate_permalink(current_challenge, encode_challenge, "blockit");
  window.open(url, '_self');
};
