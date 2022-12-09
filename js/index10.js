fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.text())
.then(result => {
    let users = JSON.parse(result);
    const {id} = users[2];
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    /* 이 아래는 Promise객체로 받아서 진행하는 것이 좋음 index11.js에서 확인 */
    .then(response => response.text())
    .then(albumId => {
        console.log(albumId);
    })
})