function openInPytut(code) {
  // https://javascript.info/task/shuffle
  const splitChallenge = code.split('\n');
  for (let i = splitChallenge.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [splitChallenge[i], splitChallenge[j]] = [splitChallenge[j], splitChallenge[i]];
  }
  const shuffledChallenge = splitChallenge.join('\n');
  const encodedJST = encodeURIComponent(shuffledChallenge);
  const sanitizedJST = encodedJST
    .replace(/\(/g, '%28').replace(/\)/g, '%29')
    .replace(/%09/g, '%20%20');
  const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
  window.open(jsTutorURL, '_blank');
}
