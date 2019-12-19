document.querySelector('#login-form button[type=submit]')
    .addEventListener('click', login);
function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('#login-form input[name=name]').value,
            email: document.querySelector('#login-form input[name=email]').value,
            tel: document.querySelector('#login-form input[name=tel]').value,
            message: document.querySelector('#login-form textarea[name=message]').value
        })
    })
    .then(_ => document.querySelector('#login-form').reset());
}