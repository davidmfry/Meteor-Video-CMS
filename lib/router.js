// Tells Iron router to use layout template as the default layout
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'

});

Router.onBeforeAction('dataNotFound', {only: 'projectPage'});

Router.route('/', {name: 'clientForm'});
Router.route('/admin', {name: 'clientProjectList'});

Router.route('/projects/:_id', {
    name: 'projectPage',
    data: function () {
        return ClientProjects.findOne(this.params._id);
    }

});

