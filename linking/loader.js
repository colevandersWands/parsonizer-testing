

const loader = (basePath, exercisePath, query) => {
  // figure out how/if to load cache object
  // pushState makes it not necessary? cache object is not cleared
  loader.current = exercisePath;
  console.clear();
  // console.log(exercisePath)
  if (exercisePath === null) {

    history.pushState({}, "", `?snippet=${encodeQuery(query)}`);

    query = typeof query === 'string'
      ? query
      : '';

    var regex = "^\\s*$";
    loader.cache[''] = {
      funcStringTutor: query.split(regex).join(''),
      funcStringParsons: query.split(regex).join('#distractor'),
    };
    loader.load(loader.cache['']);

  } else if (loader.cache[exercisePath] instanceof Object) {
    history.pushState({}, "", `?exercise=${encodeQuery(exercisePath)}`);
    loader.load(loader.cache[exercisePath])
  } else {
    fetch(`${basePath}/${exercisePath}.js`)
      .then(function (response) {
        return response.text();
      })
      .then(function (exerciseToParse) {
        history.pushState({}, "", `?exercise=${encodeQuery(exercisePath)}`);
        // console.log(exerciseToParse.indexOf('<!DOCTYPE html>'))
        if (exerciseToParse.indexOf('<!DOCTYPE html>') === 0) {
          loader.load({ comment: exerciseToParse, funcStringParsons: 'no such exercise', testsString: 'no such exercise' });
        } else {
          const parsedExercise = parseChallenge(exerciseToParse);
          loader.cache[exercisePath] = parsedExercise;
          loader.load(parsedExercise)
        }
      })
      .catch(function (err) {
        history.pushState({}, "", `?error=${err.name}&message=${err.message}`);
        const errString = `${err.name}: ${err.message}`;
        challengeCode = errString;
        loader.load({ comment: errString, funcStringParsons: errString, testsString: errString });
        console.log(err);
      })
  }
};
loader.load = (parsed) => {
  // console.log(parsed)

  parsons_instance = parsons_mode(parsed.funcStringParsons);

  if (parsed.testsString) {
    document.getElementById('tests-div').style.display = 'block';
    try {
      const prettyCode = prettier.format(
        parsed.testsString,
        {
          parser: "babylon",
          plugins: prettierPlugins
        }
      );

      const testCasesPrismed = document.getElementById('test-cases');
      testCasesPrismed.innerHTML = prettyCode;
      Prism.highlightAllUnder(testCasesPrismed);
    } catch (err) {
      document.getElementById('test-cases').innerHTML = parsed.testsString;
    }
  } else {
    document.getElementById('tests-div').style.display = 'none';
  }

  testCases = parsed.tests;
  challengeCode = parsed.funcStringTutor;

  if (parsed.comment) {
    document.getElementById('comment-div').style.display = 'block';
    document.getElementById('comment').innerHTML = parsed.comment;
  } else {
    document.getElementById('comment-div').style.display = 'none';
  }


};
loader.current = '';
loader.cache = {
  '': {
    funcStringTutor: `(greeting) => {
  console.error(greeting);
  console.log(greeting);
  console.assert(greeting);
  return greeting;
};`,
    funcStringParsons: `(greeting) => {
  console.error(greeting); #distractor
  console.log(greeting);
  console.assert(greeting); #distractor
  return greeting;
};`,
    func: (greeting) => {
      console.log(greeting);
    },
    comment: `parsons problems are a great way to study programming.
--> all of the learning, less of the time!

Click and drag the lines of code on the left into the box on the right
(careful! there may be some extra lines ;)

When you think you've put them in the right order (indentation matters!) ...
... click the [evaluate] button to see how you did!

P.S.  Open your browser's console for more detailed feedback
    `,
    testsString: `[
      { name: 'boolean, true', args: [true], expected: true },
      { name: 'boolean, false', args: [false], expected: false },
      { name: 'string, "hi!"', args: ['hi!'], expected: 'hi!' },
      { name: 'string, ""', args: [""], expected: "" },
      { name: 'number, 1', args: [1], expected: 1 },
      { name: 'number, 0', args: [0], expected: 0 },
    ]`,
    tests: [
      { name: 'boolean, true', args: [true], expected: true },
      { name: 'boolean, false', args: [false], expected: false },
      { name: 'string, "hi!"', args: ['hi!'], expected: 'hi!' },
      { name: 'string, ""', args: [""], expected: "" },
      { name: 'number, 1', args: [1], expected: 1 },
      { name: 'number, 0', args: [0], expected: 0 },
    ],
  }
};
