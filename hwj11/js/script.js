
const form = document.querySelector('.password-form');
form.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.className === 'btn') {
        if (pass1.value === '' || pass2.value === '') {
            errorPass.innerText = 'Поля должны быть заполненными';
        }
        if (pass1.value !== pass2.value) {
            errorPass.innerText = 'Пароли не совпадают';
        }
        if (pass1.value === pass2.value && pass1.value !== "" && pass2.value !== "") {
            alert('You re welcome !')
        }
    }
        if (event.target.tagName === 'I') {
           const currenInput = event.target.previousElementSibling;

           if (currenInput.type === 'text') {
               event.target.classList.add('fa-eye-slash');
               event.target.classList.remove('fa-eye-slash');
               currenInput.type = 'password';
               return;
          }
           if (currenInput.type === 'password') {
               event.target.classList.add('fa-eye-slash');
               event.target.classList.remove('fa-eye');
               currenInput.type = 'text';
           }
    }
});


const errorPass = document.querySelector('.Error');


const pass1 = document.querySelector('[id="pass-1"]');



const pass2 = document.querySelector('[id="pass-2"]');





