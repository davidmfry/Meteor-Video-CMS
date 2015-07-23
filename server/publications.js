Meteor.publish('clientProjects', function () {
    return ClientProjects.find();
});