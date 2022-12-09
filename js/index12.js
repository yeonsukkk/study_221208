/* fetch('https://jsonplaceholder.typicode123.com/posts/1')
.then(response => response.text(), (error) => {console.log(error)})
.then(result => {
    console.log('welcome') // 위에서 error를 받았기 때문에 실행
    console.log(result) // 데이터를 받아오지 않아서 실행 안됨
}) */

fetch('https://jsonplaceholder.typicode123.com/posts/1')
.then(response => response.text())
.then(result => {
    console.log('welcome') // 위에서 error를 받았기 때문에 실행
    console.log(result) // 데이터를 받아오지 않아서 실행 안됨
})
.catch(() => {console.log('error가 발생되었습니다.')})
.finally(() => {console.log('작업이 마감되었습니다.')})

// 개발자도구에서 네트워크 -> status(상태) 100~500까지 있음