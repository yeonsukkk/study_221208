
fetch('https://jsonplaceholder.typicode.com/todos/').
then(response => response.text()).
then(result => {
    let level = JSON.parse(result); // json파일을 객체화시킴
    let basic = level.filter(item => item.userId === 4)

    for(i in basic){
        document.write(`${basic[i].id} : ${basic[i].title} <br>`)
    }
})