var Darwin = {
    Lectures: new Lectures(),
    Sections: new Sections(),
    Contents: new Contents(),
    Mediator: new Mediator()
};
$('document').ready(function(){
    console.log('Darwins evolution');
    $.getJSON('course/course102.json', function(data){
        Darwin.Course = data;
    });
    Backbone.history.start();
});
