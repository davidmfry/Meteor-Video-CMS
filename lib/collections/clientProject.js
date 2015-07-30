ClientProjects = new Mongo.Collection('clientProjects');

Meteor.methods({
    projectInsert: function(projectAttributes) {
        check(Meteor.userId(), String);
        // if the form fields change, Check the object in client/templates/client-form/client-form.js
        check(projectAttributes, {
            clientName: String,
            projectName: String,
            email: String,
            phoneNumber: String,
            message: String,
            isDone: Boolean

        });
        var user = Meteor.user();
        var projectPost = _.extend(projectAttributes, {
            userId: user._id,
            userName: user.username,
            submitted: new Date()
        });
        var projectId = ClientProjects.insert(projectPost);
        return {
            _id: projectId
        };
    }
})