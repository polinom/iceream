define(['underscore',
        'jquery',
        'handlebars',
        './MenuItemsCollection',
        './MainMenuItemView'
        ],
    function (_, $, Handlebars, collection, item_view) {
        return Backbone.Marionette.CollectionView.extend({
            tagName: "ul",
            className: "nav nav-list",
            itemView: item_view,
            collection: collection,

            initialize: function(){
                this.on('itemview:clicked', this.itemClicked);
            },

            itemClicked: function(item, nod){
                this.children.each(function(view){
                    view.$el.removeClass('active');
                });
            }
        });
    });