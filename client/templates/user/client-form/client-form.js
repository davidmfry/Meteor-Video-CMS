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
                //TODO: add a toast and take the alert away
                //clear the form if there is an error
                tmpl.find("form").reset();
                return alert(error.reason);
            }
            Router.go('uploadFiles', {_id: result._id});
        });

    }
});