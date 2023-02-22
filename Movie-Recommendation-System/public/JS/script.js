const searchInput = document.getElementById('userinput')

searchInput.addEventListener('keyup',() => {
    let searchText = searchInput.value
    console.log(searchText)
})