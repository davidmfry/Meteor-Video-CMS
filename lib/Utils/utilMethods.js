Meteor.methods({
    getUser: function() {
        console.log("This is a meteor Method call");
        return "USER_NAME";
    }

});