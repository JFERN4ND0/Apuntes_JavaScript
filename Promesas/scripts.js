// Una promesa es un objeto con 2 callbacks internos

const users = [
    {
        id: 1,
        name: 'Dorian'
    }, {
        id: 2,
        name: 'Laura'
    }, {
        id: 3,
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'dorian@gmail.com'
    }, {
        id: 2,
        emal: 'laura@gmail.com'
    }
]

const getUser = (id) => {
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject) =>{
        if(!user) reject(`Doesn't exist a user with id ${id}`);
        else resolve(user);
    });
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id);

    return promise = new Promise((resolve, reject) => {
        if(!email) reject(`${user.name} hasn't email`);
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        });
    });
}

/* getUser(3)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err)) */

// ******* Simplificado *********
getUser(2)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)