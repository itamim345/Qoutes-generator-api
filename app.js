function getQoutes () {
    fetch('https://api.kanye.rest')
    .then (resp => resp.json())
    .then (data => console.log(data))
}
getQoutes()

