/* fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.text())
.then(result => {
    let user = JSON.parse(result);
    const {address} = user[1];
    return address;
})
.then(result => {
    const {geo} = result;
    return geo;
})
.then(result => {
    document.write(`<h1>${result.lat}</h1>`);
}) */

fetch('https://jsonplaceholder.typicode.com/users') //Promise
.then(response => response.text()) //Promise 받고 내보냄
.then(result => { //Promise 받고
    let user = JSON.parse(result);
    return user[1]; //Promise 내보냄
})
.then(user => { //Promise 받고
    const {address} = user;
    return address; //Promise 내보냄
})
.then(address => { //Promise 받고
    const {geo} = address;
    return geo; //Promise 내보냄
})
.then(geo => { //Promise 받고
    const {lat} = geo; //Promise 내보냄
    document.write(`<h1>${lat}</h1>`);
})