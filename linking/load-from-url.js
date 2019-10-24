const loadFromURL = (href) => {
  const query = readSnippetQuery();
  if (query.code) {
    editor.setValue(query.code);
    loader.cache[''] = query.code;
  } else if (query.exercise) {
    loader(href, query.exercise);
  } else {
    loader(href, '');
  };
}
