define(['backbone', 'marionette'], function(Backbone, Marionette) {
    return new Backbone.Collection([
        { name:  'You Tests',    id:  'tests'},
        { name : 'You Students', id:  'students' },
        { name : 'Statistic',    id:  'statistic' },
        { name : 'So on',        id:  'so_on' },
        { name : 'And so on',    id:  'and_so_on' }
    ]);
});