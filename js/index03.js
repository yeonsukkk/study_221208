fetch('https://jsonplaceholder.typicode.com/photos').
then(response => response.text()).
then(result => {
    let level = JSON.parse(result);
    //console.log(level)
    let basic = level.filter(item => item.albumId === 1);
    for(i of basic){
        document.write(
            `
            <figure>
                <img src="${i.thumbnailUrl}" alt="${i.title}">
                <figcaption>${i.title}</figcaption>
            </figure>
            `
        )
    }
})