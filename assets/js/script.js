var today = moment(new Date()).format('dddd, MMMM MM, YYYY');
$(document).ready(function(){
    $("#currentDay").text(today)
});

$('.description').click(function() {
    let thisTask = $('p', this);
    let taskText = thisTask.text().trim();
    if(taskText.length > 0) {
        let textInput = $("<input>").addClass('form-control').val(taskText);
        thisTask.replaceWith(textInput);
    } else {
        let textInput = $('<input>').addClass('form-control').val(taskText).attr('placeholder', 'Enter your tasks here!');
        thisTask.replaceWith(textInput);
    }
});

$('.row').on('mouseleave', 'input', function() {
    let thisTask = $(':nth-child(2) input');
    let userTask = thisTask.val();
    let pElement = $('<p>').text(userTask);
    thisTask.replaceWith(pElement);
});

