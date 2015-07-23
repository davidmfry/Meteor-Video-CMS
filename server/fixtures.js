if (ClientProjects.find().count() === 0)
{
    ClientProjects.insert({
        firstName: 'David',
        lastName: 'Fry',
        email: 'david.fry.tv@gmail.com',
        phoneNumber: '123-456-7896',
        message: ""
    });

    ClientProjects.insert({
        firstName: 'John',
        lastName: 'Smith',
        email: 'Jsmieth@none.com',
        phoneNumber: '555-555-5555',
        message: "Please make sure my spot is ready to go by today! OR Else..."
    });

    ClientProjects.insert({
        firstName: 'Sally',
        lastName: 'Snag',
        email: 's.sang@sangalot.com',
        phoneNumber: '456-456-1234',
        message: "One small message"
    });
}