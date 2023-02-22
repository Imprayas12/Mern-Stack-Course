const searchInput = document.getElementById('userinput')

searchInput.addEventListener('keyup',() => {
    let searchText = searchInput.value
    // console.log(searchText)
    searchDB(searchText)
})

async function searchDB(searchText) {
    var res = await fetch(`http://localhost:5000/search?q=${searchText}`)
    const data = await res.json()
    console.log(data)
}