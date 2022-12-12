async function str(){
    // 실행할 것들
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result = await response.text();
        console.log(result)
    }
    // 에러날 경우
    catch(error){
        console.log('에러 입니다.')
    }
    // 마감
    finally{
        console.log('작업이 끝났습니다')
    }
}

str()