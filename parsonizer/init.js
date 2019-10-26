function init(initial) {
  const feedbackCB = (feedBack) => {
    const loggable = {};
    for (let i = 0; i < feedBack.log_errors.length; i++) {
      // const newKey = feedBack.log_errors[i].type + ` (${feedBack.log_errors[i].lines} x)`;
      const newKey = feedBack.log_errors[i].type;
      loggable[newKey] = feedBack.errors[i];
    }
    console.group('%cParsons Solution', `font-color:${feedBack.success ? 'green' : 'orange'}`);
    Object.keys(loggable).length !== 0
      ? console.table(loggable)
      : console.log('%cWell Done!', 'color:green');
    console.groupEnd();
  };

  var parsonow = new ParsonsWidget({
    'sortableId': 'sortable',
    'trashId': 'sortableTrash',
    'max_wrong_lines': 1,
    'feedback_cb': feedbackCB,
    'first_error_only': false,
    'evaluator': evaluate,
    'max_distractors': 3
  });
  parsonow.init(initial);
  parsonow.shuffleLines();
  $("#newInstanceLink").click(function (event) {
    event.preventDefault();
    parsonow.shuffleLines();
  });
  $("#feedbackLink").click(function (event) {
    event.preventDefault();
    parsonow.getFeedback();
  });

  return parsonow;

  // function displayErrors(fb) {
  //   if (fb.errors.length > 0) {
  //     alert(fb.errors[0]);
  //   }
  // }
};
