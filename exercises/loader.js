const exercises = {
  ['how-to-tdd']: [
    'test-suites',
    'tests',
    'assert-101',
    'assert-102',
    'nesting-test-suites',
    'passing-tests',
  ],
  ['fizzbuzz-case-study']: [
    // worked examples
  ],
  // ['red-green-refactor']: [
  //   // worked examples
  // ],
  ['function-challenges']: [
    'shuffle',
    'caesarize'
  ],
  ['avoiding-side-effects']: [
    'merge-arrays',
    'merge-objects',
    'replace-by-index',
    'repeat-items',
  ],
  ['objects-101']: [
    'how-to-test-objects',
    'remix-returned',
    'remix-saved',
    'merge-arrays-returned',
    'merge-arrays-saved',
    'save-in-an-array',
    'save-in-an-object',
    'meta'
  ]
}

const loader = (basePath, exercisePath) => {
  loader.cache[loader.current] = editor.getValue();
  loader.current = exercisePath;
  if (typeof loader.cache[exercisePath] === 'string') {
    editor.setValue(loader.cache[exercisePath]);
    parsons_mode();
  } else {
    fetch(`${basePath}/${exercisePath}.js`)
      .then(function (response) {
        return response.text();
      })
      .then(function (exercise) {
        const commentBegIndex = exercise.indexOf('/*');
        const commentEndIndex = exercise.lastIndexOf('*/');
        const functionCode = exercise.slice(0, commentBegIndex);
        const about = exercise.slice(commentBegIndex + 2, commentEndIndex - 2);
        const testCases = exercise.slice(commentEndIndex + 2, exercise.length - 1);
        loader.cache[exercisePath] = exercise; // update cache to {func, about, tests}
        editor.setValue(functionCode);
        setTests(testCases);
        alert(about);
        history.pushState(loader.cache, "", `?exercise=${encodeQuery(exercisePath)}`);
        parsons_mode();
      })
      .catch(function (err) {
        editor.setValue(`// see console for loading error`);
        console.log(err);
      })
  }
};
loader.current = '';
loader.cache = { // reset path to store separated function, test cases and description
  '': `let poo;`
};

// {
//   const renderItem = (item, path, container) => {
//     if (item instanceof Array) {
//       return renderArray(item, path, container);
//     } else if (typeof item === 'string') {
//       return renderString(item, path, container);
//     } else if (item && item.constructor.name === 'Object') {
//       return renderObject(item, path, container);
//     }
//   };
//   const renderObject = (obj, path, container) => {
//     for (let key in obj) {
//       const details = document.createElement('details');
//       details.style = 'margin-left:15px';
//       const summary = document.createElement('summary');
//       summary.innerHTML = key;
//       details.appendChild(summary);
//       renderItem(obj[key], `${path}/${key}`, details);
//       container.appendChild(details);
//     };
//   };
//   const renderArray = (arr, path, container) => {
//     arr.forEach(entry => {
//       renderItem(entry, path, container);
//     });
//   };
//   const renderString = (name, path, container) => {
//     const button = document.createElement('button');
//     button.innerHTML = name;
//     const finalPath = `${path}/${name}`;
//     button.onclick = () => { loader(href, finalPath); runTests(); };
//     container.appendChild(button);
//   };
//   const exerciseDetails = document.getElementById('exercise-details');
//   renderItem(exercises, 'exercises', exerciseDetails)
// }

