const exercises = {
  ['array-methods']: [
    'reverse-string',
    'sum-numbery-numbers'
  ]
}



{
  const renderItem = (item, path, container) => {
    if (item instanceof Array) {
      return renderArray(item, path, container);
    } else if (typeof item === 'string') {
      return renderString(item, path, container);
    } else if (item && item.constructor.name === 'Object') {
      return renderObject(item, path, container);
    }
  };
  const renderObject = (obj, path, container) => {
    for (let key in obj) {
      const details = document.createElement('details');
      details.style = 'margin-left:15px';
      const summary = document.createElement('summary');
      summary.innerHTML = key;
      summary.className = 'fake-button';
      details.appendChild(summary);
      renderItem(obj[key], `${path}/${key}`, details);
      container.appendChild(details);
    };
  };
  const renderArray = (arr, path, container) => {
    arr.forEach(entry => {
      renderItem(entry, path, container);
    });
  };
  const renderString = (name, path, container) => {
    const button = document.createElement('button');
    button.innerHTML = name;
    const finalPath = `${path}/${name}`;
    button.onclick = () => { loader(href, finalPath) };
    container.appendChild(button);
  };
  const exerciseDetails = document.getElementById('exercise-details');
  renderItem(exercises, 'exercises', exerciseDetails)
}

