if (ClientProjects.find().count() === 0)
{
    console.log("Adding data....")
    ClientProjects.insert({
        clientName: '3Fist productions',
        projectName: 'Bad ass spot',
        email: 'david.fry.tv@gmail.com',
        phoneNumber: '123-456-7896',
        message: "",
        dateAdded: new Date(),
        isDone: false
    });

    ClientProjects.insert({
        clientName: 'Mr. Cars',
        projectName: 'Come buy my new and use Cars',
        email: 'Jsmieth@none.com',
        phoneNumber: '555-555-5555',
        message: "Please make sure my spot is ready to go by today! OR Else...",
        dateAdded: new Date(),
        isDone: false
    });

    ClientProjects.insert({
        clientName: 'Sally: I do construction',
        projectName: 'Build it up',
        email: 's.sang@sangalot.com',
        phoneNumber: '456-456-1234',
        message: "One small message",
        dateAdded: new Date(),
        isDone: false
    });

    console.log("Finished adding data.")
}