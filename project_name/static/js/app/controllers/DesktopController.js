define(['backbone',
        'marionette',
        'views/WelcomeView',
        'views/DesktopHeaderView',
        'parts/MainMenu/MainMenuView'

        ], function (Backbone, Marionette, WelcomeView, DesktopHeaderView, MainMenuView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new DesktopHeaderView());
            MMview = new MainMenuView();
            App.mainMenuRegion.show(MMview);
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.mainRegion.show(new WelcomeView());
        }
    });
});