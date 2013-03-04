var Mediator = Backbone.Router.extend({
    routes: {
        "":"beginLecture"
    },
    beginLecture:  function () {
        console.log('Begin Lecture')
    }
});