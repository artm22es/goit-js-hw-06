const form = document.querySelector('.login-form')

form.addEventListener('submit', handlerSub)

function handlerSub(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements
    const obj = {
        email : email.value,
        password : password.value
    }
    if (!email.value || !password.value) {
        alert("Заповніть всі поля!")
    } else {
        console.log(obj);
        form.reset()
    }
}