Template.dropzone.events({
    'dropped #dropzone': function(event) {
        FS.Utility.eachFile(event, function(file) {
            var newFile = new FS.File(file);
            Videos.insert(newFile, function(error, fileObj) {
                if (error)
                {
                    toastr.error("Upload failed.. pleas try again");
                }
                else
                {
                    toastr.success("Upload succeeded!");
                }
            });
        });
    }
});