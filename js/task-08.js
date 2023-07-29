const form = document.querySelector('.login-form')

form.addEventListener('submit', handlerSub)

function handlerSub(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements
    
    if (!email.value || !password.value) {
        alert("Заповніть всі поля!")
    } else {
        console.log(email.value);
        console.log(password.value);
        form.reset()
    }
}