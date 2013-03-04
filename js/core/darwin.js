var Darwin = {
    Lectures: new Lectures(),
    Sections: new Sections(),
    Contents: new Contents()
};
$('document').ready(function(){
    console.log('Darwins evolution');
    $.getJSON('course/course102.json', function(data){
        console.log(data);
    })
});

$.getJSON('course/course102.json', function(data){
    console.log(data);
})