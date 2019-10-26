function parseChallenge(fullString) {
  const commentBegIndex = fullString.indexOf('/*');
  const commentEndIndex = fullString.lastIndexOf('*/');

  const functionCode = fullString.slice(0, commentBegIndex);
  const func = (() => {
    try {
      return (new Function('return ' + functionCode))();
    } catch (err) {
      console.error('unable to load function:\n' + err.name + ': ' + err.message);
      return new Function(`() => "${err.name}: ${err.message}"`);
    }
  })();

  const comment = fullString.slice(commentBegIndex + 2, commentEndIndex - 1);

  const testsString = fullString.slice(commentEndIndex + 2, fullString.length - 1);
  const tests = (() => {
    try {
      return (new Function('return false?null:' + testsString))();
    } catch (err) {
      console.error('unable to load test cases:\n' + err.name + ': ' + err.message);
      return { [err.name]: err.message };
    }
  })();

  var regex = "^\\s*$";


  return {
    funcStringTutor: functionCode.split(regex).join(''),
    funcStringParsons: functionCode.split(regex).join('#distractor'),
    func,
    comment,
    testsString,
    tests,
  }
  // todo: regex for any number of spaces/tabs between // and #
}
