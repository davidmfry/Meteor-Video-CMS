Template.clientForm.events({
    'submit form': function(e, tmpl) {
        e.preventDefault();

        ClientProjects.insert({
            firstName: e.target.firstname.value,
            lastName: e.target.lastname.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            message: e.target.message.value,
            owner: Meteor.userId(),
            userName: Meteor.user().username,
            createdAt: new Date(),
            isDone: false
        });

    }
})