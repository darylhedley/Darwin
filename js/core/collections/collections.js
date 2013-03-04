var Lectures = Backbone.Collection.extend({
    model: Lecture,
    initialize: function() {
    }
});

var Sections = Backbone.Collection.extend({
    model: Section,
    initialize: function() {
    }
});

var Contents = Backbone.Collection.extend({
    model: Content,
    initialize: function() {
    },
    section: function(section){
        _.filter(this.models, function(model){ return model.get('section') == section })
    }
});