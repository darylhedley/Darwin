var Darwin = {
    Course: {},
    Lectures: new Lectures(),
    Sections: new Sections(),
    Contents: new Contents(),
    Mediator: new Mediator()
};
$('document').ready(function(){
    console.log('Darwins evolution');
    $.getJSON('course/course102.json', function(data){
        Darwin.Course = data;
        courseReady();
    });
    
});
function courseReady() {
    Backbone.history.start();
console.group('Models');
    Darwin.Lectures.add(Darwin.Course.lectures);
    Darwin.Sections.add(Darwin.Course.sections);
    Darwin.Contents.add(Darwin.Course.contents);
console.groupEnd();
console.group('Collections')
    console.log(Darwin.Lectures)
    console.log(Darwin.Sections)
    console.log(Darwin.Contents)
console.groupEnd();
    console.log(Darwin.Contents.section(03))
    console.log(Darwin.Contents.section(06))
};