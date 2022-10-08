function getQoutes () {
    fetch('https://api.kanye.rest')
    .then (resp => resp.json())
    .then (data => displayQoutes(data))
}

function displayQoutes(quote){
    let quoteDiv = document.getElementById('single-quote');
    quoteDiv.innerHTML = `<h3>"${quote.quote}"</h3>
    <h6 class="text-end"><em>MyFAvQotes</em></h6>
    <i class="text-danger">[ Tap on Get Qoutes Button to get more quotes...]</i>`
}