const music = Array.from(document.getElementById('bands').children)

const checkBoxS = Array.from(document.musicFilters.querySelectorAll('input'))
console.log(checkBoxS);
function filter() {
    music.forEach(el => filterChecked().includes(el.dataset.type) ? el.classList.remove('hidden') : el.classList.add('hidden'))


    // console.log(filterChecked())
}

function filterChecked() {
    return checkBoxS.map(el => el.checked ? el.name : false).filter(el => el)
}
