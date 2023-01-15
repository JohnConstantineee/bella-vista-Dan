function render(movie) {
const div = document.createElement('div');
const ul = document.createElement('ul');
    console.log(movie)
    div.innerHTML = `<div><h2>${movie.name}</h2><p>${'Episode №' + movie.episodeId}</p><p>${'Description' + movie.openingCrawl}</p></div>`
    div.append(ul)
    const characterUrl = movie.characters.map(char => fetch(char).then(r => r.json()));
    console.log(characterUrl)

    Promise.all(characterUrl).then(character => {
        character.map(character => ul.innerHTML += `<li>${character.name}</li>`)
    })

    document.body.append(div)
}

fetch ('https://ajax.test-danit.com/api/swapi/films')
    .then(r => r.json())
    .then(movies => movies.forEach(movie => render(movie)));