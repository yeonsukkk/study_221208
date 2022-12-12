/* fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.text())
.then(result => {
    console.log(result)
}) */

async function fetchStr(){
    // 비동기에서 필요한 데이터들을 받아서 저장
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const result = await response.text()
    console.log(result)
}

fetchStr()