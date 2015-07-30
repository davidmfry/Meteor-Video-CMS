Template.clientForm.events({
    'submit form': function(e, tmpl) {
        e.preventDefault();
        // If any form field changes, then change the check in lib/collections/clientProjects
        projectPost = {
            clientName: e.target.clientName.value,
            projectName: e.target.projectName.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            message: e.target.message.value,
            isDone: false
        };

        Meteor.call('projectInsert', projectPost, function (error, result) {
            // display the error to the user and abort
            if (error) {
                return alert(error.reason);
            }
            Router.go('uploadFiles', {_id: result._id});
        });
        //clear the form after the submit
        //tmpl.find("form").reset();
    }
});