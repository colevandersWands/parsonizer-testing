function init(initial){
    var parsonow = new ParsonsWidget({
        'sortableId': 'sortable',
        'trashId': 'sortableTrash',
        'max_wrong_lines': 1,
        'feedback_cb' : displayErrors
    });
    parsonow.init(initial);
    parsonow.shuffleLines();
    $("#newInstanceLink").click(function(event){
        event.preventDefault();
        parsonow.shuffleLines();
    });
    $("#feedbackLink").click(function(event){
        event.preventDefault();
        parsonow.getFeedback();
    });

    return parsonow;

    function displayErrors(fb) {
        if(fb.errors.length > 0) {
            alert(fb.errors[0]);
        }
    } 
};
