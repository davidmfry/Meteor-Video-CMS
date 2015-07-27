// Tells Iron router to use layout template as the default layout
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'

});

// Tells meteor what to if the data is not found and does it only for the project page
Router.onBeforeAction('dataNotFound', {only: 'projectPage'});

// Routes for the web site
Router.route('/', {name: 'clientForm'});
Router.route('/admin', {name: 'clientProjectList'});
Router.route('/projects/:_id', {
    name: 'projectPage',
    data: function () {
        return ClientProjects.findOne(this.params._id);
    }
});

