document.querySelector('.tabs').addEventListener('click',function (event){
document.querySelectorAll('.tabs-title').forEach(function (elem){
    elem.classList.remove('active')
})
    event.target.classList.add('active')
    const dataTab = event.target.getAttribute('data-tab')
    document.querySelectorAll('.tabs-content > li').forEach(function (li){
        const dataAttribute = li.getAttribute('data-tab')
        if (dataTab === dataAttribute) {
            li.classList.remove('dn')
        } else {
            li.classList.add('dn')
        }
    })
})


