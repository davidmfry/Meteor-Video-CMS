// Tells Iron router to use layout template as the default layout
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'

});

// Routes for the web site
Router.route('/', {name: 'home'});
Router.route('/admin', {name: 'clientProjectList'});
Router.route('/submit', {name: 'clientForm'});
Router.route('/upload/:_id', {
    name: 'uploadFiles',
    data: function () {
        return ClientProjects.findOne(this.params._id);
    }
});
Router.route('/projects/:_id', {
    name: 'projectPage',
    data: function () {
        return ClientProjects.findOne(this.params._id);
    }
});

// Checks for user to be logged in
var requireLogin = function() {
    if (! Meteor.user())
    {
        if (Meteor.loggingIn())
        {
            this.render(this.loadingTemplate);
        }
        else
        {
            this.render('accessDenied');
        }
    }
    else
    {
        this.next();
    }
};


// Tells meteor what to if the data is not found and does it only for the project page
Router.onBeforeAction('dataNotFound', {only: 'projectPage'});

// TODO: IS THERE A BETTER WHAT TO DO THIS?
Router.onBeforeAction(requireLogin, {only: 'clientForm'});
Router.onBeforeAction(requireLogin, {only: 'uploadFiles'});

