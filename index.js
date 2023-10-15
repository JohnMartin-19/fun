function getData(){
    fetch('https://api.fbi.gov/wanted/v1/list')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
        })
}

getData()