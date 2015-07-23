Template.clientProjectList.helpers({
    posts: function() {
        return ClientProjects.find();
    }
});