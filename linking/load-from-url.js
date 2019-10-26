const loadFromURL = (href) => {
  const query = readSnippetQuery();
  if (query.code !== null) {
    console.log(1)
    loader(href, null, query.code)
  } else if (query.snippet !== null) {
    console.log(2)
    loader(href, null, query.snippet)
  } else if (query.exercise !== null) {
    console.log(3)
    loader(href, query.exercise);
  } else {
    console.log(4)
    loader(href, '');
  };
}
