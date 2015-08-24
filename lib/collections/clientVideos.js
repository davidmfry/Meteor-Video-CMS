//TODO: Figure out how to make a custom upload directory based on the user
if (Meteor.isServer)
{
    Videos = new FS.Collection("videos", {
        stores: [new FS.Store.FileSystem("videos", {path:"~/VideoUpload"})]
    });

}

if (Meteor.isClient)
{
    Videos = new FS.Collection("videos", {
        stores: [new FS.Store.FileSystem("videos", {path:"~/VideoUpload"})]
    });
}

// Allow Rules
Videos.allow({
    insert: function(userId) {return userId != null;},
    update: function(userId) {return userId != null;}
});
