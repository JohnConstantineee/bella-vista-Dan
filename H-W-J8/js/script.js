const input = document.createElement('input')
input.placeholder = 'Price'
input.type = 'number'
document.body.appendChild(input)
input.addEventListener('focus',()=>{
    input.classList.add('ok')
    const p = document.querySelector('p')
    input.value=''
    if(p){
        p.remove()
        input.classList.remove('error')
    }
})
input.addEventListener('blur',()=>{
    if(input.value === ''){
        input.classList.remove('ok')
    }else if(input.value < 0) {
        input.classList.remove('ok')
        input.classList.add('error')
        const p = document.createElement('p')
        p.innerText = 'Please enter correct price'
        input.after(p)
    } else if(input.value === '0'){
        alert('Введите число больше 0')

    } else{
        const sp = document.createElement('span')
        const btn = document.createElement('button')
        btn.innerText = 'x'
        sp.innerText =`Текущая цена:${input.value}`
        sp.appendChild(btn)
        input.before(sp)
        btn.addEventListener('click',()=> removeElement(sp))
    }
})
function removeElement(el){
    el.remove()
    input.value=''
}
