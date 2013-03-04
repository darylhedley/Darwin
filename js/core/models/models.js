
var Lecture = Backbone.Model.extend({
    initialize: function() {
        console.log('Lecture Init');
    },
    defaults: {
        complete:false
    }
});

var Section = Backbone.Model.extend({
    initialize: function() {
        console.log('Section Init');
    },
    defaults: {
        complete:false
    }
});

var Content = Backbone.Model.extend({
    initialize: function() {
        console.log('Content Init');
    },
    defaults: {
        complete:false
    }
});
