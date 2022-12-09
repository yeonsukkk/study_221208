const user = {
    userId: 4,
    title: 'title 추가 01',
    completed: true
}

fetch('https://jsonplaceholder.typicode.com/todos', {method: 'POST', body: JSON.stringify(user)}). // 추가된 데이터를 제이슨파일로 보내야함
then(response => response.text()).
then(result => {
    console.log(result)
})