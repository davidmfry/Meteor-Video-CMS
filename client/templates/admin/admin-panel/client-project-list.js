// Gets all of the client projects
Template.clientProjectList.helpers({
    posts: function() {
        return ClientProjects.find();
    }
});