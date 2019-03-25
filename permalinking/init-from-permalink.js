var query_challenge = read_challenge_query();

if (query_challenge) {
  // current_challenge = decode_challenge(query_challenge); // encoded uri's are automatically decoded
   current_challenge = query_challenge;
   parsons_mode(current_challenge);
} else {
  edit_mode(null);
};;


// if (query_challenge) {
//   current_challenge_encoded = query_challenge;
//   current_challenge_decoded = decode_challenge(query_challenge);
//   load_challenge(current_challenge_decoded);
// };
