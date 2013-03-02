define(['underscore',
        'jquery',
        'handlebars',
        'text!./MainMenuItem.html',
        'routers/AppRouter'],
    function (_, $, Handlebars, template, AppRouter) {
        return Backbone.Marionette.ItemView.extend({
            tagName: 'li',
            template: Handlebars.compile(template),
            events: {
                "click a" : "onClick"
               },

             onClick: function(e){
                // trigger the event because parent View need to know when to deactivate active state
                this.trigger('clicked');
                // change state of pressed button to active
                this.$el.addClass('active');
                //get id of item clicked and navigate router to that path
                route = this.model.get('id');
                window.App.appRouter.navigate(route, {trigger: true, replace: true});
             }
        });
    });