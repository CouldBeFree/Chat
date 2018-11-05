class User {
    constructor(name){
        this.name = name;
    }

    sendUser(name, random){
        axios.post('http://localhost:3000/users', {
            name: this.name,
            id: random
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }
}

let form = document.getElementById('form');

form.addEventListener('submit', getUserName);

function getUserName(e) {
    let userName = document.getElementById("name").value;
    e.preventDefault();
    let someName = new User(userName);
    let randomID = Math.random() * (1000 - 1) + 1;
    //let sliced = randomID.toString().slice(0, 10);
    let sliced = Math.floor(randomID).toString();
    someName.sendUser(userName, sliced);
}

axios.get('http://localhost:3000/users')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });